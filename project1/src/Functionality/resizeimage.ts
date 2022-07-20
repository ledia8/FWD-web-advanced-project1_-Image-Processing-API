import express from 'express';
import sharp from 'sharp';
import path from 'path';
import { isMissingDeclaration } from 'typescript';

const app = express();
const sharp_app = sharp();

interface img{
    width:number,
    hight:number,
    name:string
};



const sharp_func = async(width:number,hight:number,name:string): Promise<String> =>{
    let newpath: string = 'D:\\udacity_web-advanced-FWD\\project1\\thumbnail\\'+width+ ',' +hight+','+name+'.jpg';
    try{
        await sharp(`${path.resolve()}\\img\\${name}.jpg`)
        .resize(width, hight, {
        fit: 'contain',
        position: 'right top',
    }).toFile(newpath);
    
    }catch(err) { console.log(err)}
    return newpath;
}
export default sharp_func;

// sharp_func(200,400,'flower.jpg');

//create folder
const createfolder = (): void =>{
    var fs = require('fs');

    const dir = './thumbnail';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
            recursive: true
        });
    }
}

createfolder();

