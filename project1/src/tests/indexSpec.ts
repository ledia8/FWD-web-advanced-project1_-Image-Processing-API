import supertest from 'supertest';
import app from '../index';
import sharp_func from "../Functionality/resizeimage";
import path from 'path';

const request = supertest(app);

//path.resolve("./thumbnail", imgName)


describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200)
    }
)});

it('expect sharp_func return string!', async () => {
    const newPath= await sharp_func(200,400,'flower');
    let imgName = '200,400,flower.jpg';
    expect(newPath).toEqual(path.resolve('./thumbnail',imgName));
});

it('expect sharp_func return string!', async () => {
    const newPath= await sharp_func(200,400,'flower');
    let imgName = 'flower.jpg';
    expect(newPath).not.toEqual(path.resolve('./thumbnail',imgName));
});

it('expect sharp_func return error if enter width equal zero!', async () => {
    const newPath= await sharp_func(1,400,'flower');
    expect(newPath).not.toEqual('error no width for image equal zero');
});

it('expect sharp_func return error if enter hight equal zero!', async () => {
    const newPath= await sharp_func(200,1,'flower');
    expect(newPath).not.toEqual('error no hight for image equal zero');
});

it('expect sharp_func return error if enter image not exist', async () => {
    const newPath= await sharp_func(200,400,'flow');
    expect(newPath).not.toEqual('error image not exist!');
});