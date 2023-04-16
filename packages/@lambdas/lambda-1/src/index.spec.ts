import { FileUploaderAwsAdapter } from "@common-infra/file-uploader";
import { LambdaHandler } from ".";
import { Context } from "aws-lambda";

describe('lambda-1', () => {
    let lambdaHandler: LambdaHandler;
    let fileUploader: FileUploaderAwsAdapter;

    beforeEach(async () => {
        fileUploader = new FileUploaderAwsAdapter();
        lambdaHandler = new LambdaHandler(fileUploader);
    });

    it('should return hello-world', async () => {
        expect(await lambdaHandler.main({} as any, {} as Context)).toEqual({
            statusCode: 200,
            body: JSON.stringify({
                message: 'hello world',
            }),
        });
    });

    it('should call fileUploader.upload', async () => {
        const fileUploaderSpy = jest.spyOn(fileUploader, 'upload');
        await lambdaHandler.main({ body: 'any_base64_file' } as any, {} as Context);
        expect(fileUploaderSpy).toHaveBeenCalledWith('any_base64_file', 'any_destination');
    });
});
