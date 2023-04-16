import { type FileUploader } from "../ports/file-uploader.port";

export class FileUploaderAwsAdapter implements FileUploader {
    async upload(base64File: string, destination: string): Promise<boolean> {
        // create base64 file uploader using aws sdk
        return true;
    }

}
