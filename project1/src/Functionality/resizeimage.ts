//import express from 'express';
import sharp from 'sharp';
import path from 'path';
import * as fs from 'fs';
// import { isMissingDeclaration } from 'typescript';

// const app = express();
// const sharp_app = sharp();

// interface img{
//     width:number,
//     hight:number,
//     name:string
// };



const sharp_func = async(width:number,hight:number,name:string): Promise<string> =>{

	const imgName:string = width + ',' + hight+','+name+'.jpg';
	const newpath:string = path.resolve('./thumbnail', imgName);
	console.log('newpath.........'+newpath);
    
	try{
		const pathOfOldImg = path.resolve('./img',name+'.jpg');//`${path.resolve()}\\img\\${name}.jpg`
		await sharp(pathOfOldImg)
			.resize(width, hight, {
				fit: 'contain',
				position: 'right top',
			}).toFile(newpath);
    
	}catch(err) { console.log(err);}
	return newpath;
};
export default sharp_func;

// sharp_func(200,400,'flower.jpg');

//create folder
const createfolder = (): void =>{
	//const fs = require('fs');

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