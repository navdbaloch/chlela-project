import Canvas from 'canvas';
import fs from 'fs';
import crypto from 'crypto';

export const absPath = (uri: string): string => {
    return `${__dirname}/../${uri}`;
}

export const applyFrame = async (mainImg: Canvas.Image): Promise<Buffer> => {
    const frameImg = await Canvas.loadImage(absPath(`${process.env.FRAME_PATH}/gold-frame.png`));
    const width = frameImg.width > mainImg.width ? frameImg.width : mainImg.width;
    const height = frameImg.height > mainImg.height ? frameImg.height : mainImg.height;

    mainImg.width = width;
    mainImg.height = height;

    const canvas = Canvas.createCanvas(width, height);
    const context = canvas.getContext('2d');

    // draw user image
    context.drawImage(mainImg, 0, 0, width, height,);
    // draw the frame on top of user image
    context.drawImage(frameImg, 0, 0, width, height);
    return canvas.toBuffer();
}

/**
 * Store framed user image
 * @param {Buffer} buffer
 * @returns {string} file name
 */
export const storeUserFile = async (buffer: Buffer): Promise<string> => {
    const userImgDir = absPath(`${process.env.USER_IMG_PATH}`);
    let fileName: string | boolean = false;
    while (fileName === false) {
        const proposedName = crypto.randomBytes(16).toString("hex");
        const filePath = `${userImgDir}/${proposedName}.png`;
        if (!fs.existsSync(filePath)) {
            fileName = proposedName;
        }
    }
    const fileStoragePath = `${userImgDir}/${fileName}.png`;
    fs.writeFileSync(fileStoragePath, buffer);
    return fileName;
}