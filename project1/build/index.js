"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizeimage_1 = __importDefault(require("./Functionality/resizeimage"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/api', (req, res) => {
    res.send('Hello, world!');
});
//start the express server
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
// this function resize img and change it is name 
app.get('/data', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data_str = (req.query.data);
    const data_arr = data_str.split(',');
    const w = Number(data_arr[0]);
    const h = Number(data_arr[1]);
    const name = (data_arr[2]);
    const imgName = w + ',' + h + ',' + name + '.jpg';
    //const newpath0:string = path.resolve('./thumbnail', imgName);
    const oldpath = path_1.default.resolve('./thumbnail', imgName);
    // let oldpath:string = `${path.resolve()}\\thumbnail\\${w},${h},${name}.jpg`;
    let newpath = '';
    if (!(fs_1.default.existsSync(oldpath))) {
        //create the img
        newpath = yield (0, resizeimage_1.default)(Number(w), Number(h), String(name));
        console.log('new path from if ------------' + newpath);
    }
    console.log('new path out if ------------' + newpath);
    res.sendFile(String(oldpath));
}));
app.use((req, res) => {
    res.status(404).send('something is wrong! check your inputs');
});
exports.default = app;
