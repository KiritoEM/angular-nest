import { formateFilename } from "src/utils";

export const uploadFile = (file: any, path: string) => {
    file.mv(`${path}/${file.name}`, (err: any) => {
        if (err) {
            throw new Error(`An error was occured when uploading file !!!); ${err}`);
        }

        console.log("File uploaded successfully");
    })
}