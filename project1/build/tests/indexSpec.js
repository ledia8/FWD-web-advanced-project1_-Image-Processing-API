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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const resizeimage_1 = __importDefault(require("../Functionality/resizeimage"));
const request = (0, supertest_1.default)(index_1.default);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api');
        expect(response.status).toBe(200);
    }));
});
it('expect sharp_func return string!', () => __awaiter(void 0, void 0, void 0, function* () {
    const newPath = yield (0, resizeimage_1.default)(200, 400, 'flower');
    expect(newPath).toEqual('D:\\udacity_web-advanced-FWD\\project1\\thumbnail\\200,400,flower.jpg');
}));
it('expect sharp_func return string!', () => __awaiter(void 0, void 0, void 0, function* () {
    const newPath = yield (0, resizeimage_1.default)(200, 400, 'flower');
    expect(newPath).not.toEqual('D:\\udacity_web-advanced-FWD\\project1\\thumbnail\\flower.jpg');
}));
it('expect sharp_func return error if enter width equal zero!', () => __awaiter(void 0, void 0, void 0, function* () {
    const newPath = yield (0, resizeimage_1.default)(1, 400, 'flower');
    expect(newPath).not.toEqual('error no width for image equal zero');
}));
it('expect sharp_func return error if enter hight equal zero!', () => __awaiter(void 0, void 0, void 0, function* () {
    const newPath = yield (0, resizeimage_1.default)(200, 1, 'flower');
    expect(newPath).not.toEqual('error no hight for image equal zero');
}));
it('expect sharp_func return error if enter image not exist', () => __awaiter(void 0, void 0, void 0, function* () {
    const newPath = yield (0, resizeimage_1.default)(200, 400, 'flow');
    expect(newPath).not.toEqual('error image not exist!');
}));
