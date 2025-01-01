export const formateFilename = (fileName: string) => {
    const arr = fileName.split(".");
    const fileNameExt = arr.pop();
    const fileNameBasename = arr.join("_").concat(`${new Date()}.${fileNameExt}`);

    return fileNameBasename;
}