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
    const fileName = await storeUserFile(Buffer.from(fileRawData));
    return {
        fileName
    };
}