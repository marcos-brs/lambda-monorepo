export interface FileUploader {
    upload: (base64File: string, destination: string) => Promise<boolean>;
}
