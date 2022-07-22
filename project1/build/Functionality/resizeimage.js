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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const sharp_app = (0, sharp_1.default)();
;
const sharp_func = (width, hight, name) => __awaiter(void 0, void 0, void 0, function* () {
    let imgName = width + ',' + hight + ',' + name + '.jpg';
    let newpath = path_1.default.resolve("./thumbnail", imgName);
    console.log("newpath........." + newpath);
    try {
        let pathOfOldImg = path_1.default.resolve("./img", name + ".jpg"); //`${path.resolve()}\\img\\${name}.jpg`
        yield (0, sharp_1.default)(pathOfOldImg)
            .resize(width, hight, {
            fit: 'contain',
            position: 'right top',
        }).toFile(newpath);
    }
    catch (err) {
        console.log(err);
    }
    return newpath;
});
exports.default = sharp_func;
// sharp_func(200,400,'flower.jpg');
//create folder
const createfolder = () => {
    var fs = require('fs');
    const dir = './thumbnail';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
            recursive: true
        });
    }
};
createfolder();
// let newpath0:string = path.resolve(__dirname,"thumbnail\\");
// let newpath:string= newpath0 +'\\'+ width + ',' + hight+','+name+'.jpg';
// let newpath:string = `${path.resolve()}\\thumbnail\\${width},${hight},${name}.jpg`;
//let newpath1: string = 'D:\\udacity_web-advanced-FWD\\project1\\thumbnail\\'+width+ ',' +hight+','+name+'.jpg';
