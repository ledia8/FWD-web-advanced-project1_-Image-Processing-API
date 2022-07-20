import supertest from 'supertest';
import app from '../index';
import sharp_func from "../Functionality/resizeimage";

const request = supertest(app);


describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200)
    }
)});

it('expect sharp_func return string!', async () => {
    const newPath= await sharp_func(200,400,'flower');
    expect(newPath).toEqual('D:\\udacity_web-advanced-FWD\\project1\\thumbnail\\200,400,flower.jpg');
});

it('expect sharp_func return error if enter width equal zero!', async () => {
    const newPath= await sharp_func(0,400,'flower');
    expect(newPath).not.toEqual('error no width for image equal zero');
});

it('expect sharp_func return error if enter hight equal zero!', async () => {
    const newPath= await sharp_func(200,0,'flower');
    expect(newPath).not.toEqual('error no hight for image equal zero');
});

it('expect sharp_func return error if enter image not exist', async () => {
    const newPath= await sharp_func(200,400,'flow');
    expect(newPath).not.toEqual('error image not exist!');
});