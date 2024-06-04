import multer from "multer";
import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'/public/asset/docs')
    },
    filename:function(req,file,cb){
        const filename = uuidv4();
        cb(null,filename)
    }
})

export const uploadDocs= multer({
    storage
})