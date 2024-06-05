// multerUpload.ts
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { NextRequest } from 'next/server';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(process.cwd(), 'public'));
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = uuidv4();
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

export async function uploadFile(request: NextRequest, fieldName: string = 'file'): Promise<string | null> {
    return new Promise((resolve, reject) => {
        const middleware = upload.single(fieldName);

        middleware(request as any, {} as any, async (error: any) => {
            if (error) {
                reject(error);
            } else {
                const file = (request as any).file;
                resolve(file ? file.filename : null);
            }
        });
    });
}