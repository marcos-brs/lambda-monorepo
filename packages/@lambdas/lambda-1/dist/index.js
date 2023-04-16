"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const file_uploader_1 = require("@common-infra/file-uploader");
const fileUploader = new file_uploader_1.FileUploader();
class LambdaHandler {
    constructor(fileUploader) {
        this.fileUploader = fileUploader;
        this.fileUploader = fileUploader;
    }
    async main(event, context) {
        this.fileUploader.main(event);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'hello world',
            }),
        };
    }
}
const lambdaHandler = new LambdaHandler(fileUploader);
exports.handler = lambdaHandler.main.bind(lambdaHandler);
//# sourceMappingURL=index.js.map