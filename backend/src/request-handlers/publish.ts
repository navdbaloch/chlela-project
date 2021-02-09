import fileUpload from 'express-fileupload';
import Canvas from 'canvas';
import { applyFrame } from '../utils';
import { storeUserFile } from '../utils';
import fs from 'fs';

export interface PublishRequest {
    files: {
        upload: fileUpload.UploadedFile
    }
}

export const publishRequestHandler = async (request: PublishRequest) => {
    const fileRawData = request.files.upload.data as any;
    const mainImg = await Canvas.loadImage(Buffer.from(fileRawData));
    fs.writeFileSync('orignal-img.png', Buffer.from(fileRawData));
    const fileName = await storeUserFile(await applyFrame(mainImg));
    return {
        fileName
    };
}