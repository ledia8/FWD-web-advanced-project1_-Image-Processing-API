import express from 'express';
import sharp_func from "./Functionality/resizeimage";
import path from 'path';
import fs from 'fs'

const app = express();
const port:number = 3000;

app.get('/api', (req:express.Request, res:express.Response) :void => {
    res.send('Hello, world!');
});

//start the express server
app.listen(port, () : void=> {
    console.log(`server started at localhost:${port}`)
});

// this function resize img and change it is name 
app.get('/data', async (req:express.Request, res:express.Response) :Promise<void> => {
    let data_str: string = (req.query.data) as string;
    let data_arr: (number|string)[] = data_str.split(',');
    
    let w:number = Number(data_arr[0]) ;
    let h:number = Number(data_arr[1]) as number;
    let name:string = (data_arr[2])as string;
    let imgName:string = w + ',' + h+','+name+'.jpg';

    let newpath0:string = path.resolve("./thumbnail", imgName);
    
    let oldpath:string =path.resolve("./thumbnail", imgName);

    // let oldpath:string = `${path.resolve()}\\thumbnail\\${w},${h},${name}.jpg`;
    let newpath:String="";
    if(!(fs.existsSync(oldpath))){
        //create the img
        newpath = await sharp_func(Number(w),Number(h),String(name));
        console.log("new path from if ------------"+ newpath);
    }
    console.log("new path out if ------------"+ newpath);
    res.sendFile(String(oldpath));
});

app.use((req:express.Request, res:express.Response, next) => {
    res.status(404).send("something is wrong! check your inputs")
});

export default app;




