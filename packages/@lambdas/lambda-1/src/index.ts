import { FileUploader, FileUploaderAwsAdapter } from '@common-infra/file-uploader';
import type { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

const fileUploader = new FileUploaderAwsAdapter();

export class LambdaHandler {
  constructor(private readonly fileUploader: FileUploader) {
    this.fileUploader = fileUploader;
  }

  async main(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult>{
    if(event.body) {
        this.fileUploader.upload(event.body?.toString(), 'any_destination');
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'hello world',
        }),
    };
  }
}

const lambdaHandler = new LambdaHandler(fileUploader);

export const handler = lambdaHandler.main.bind(lambdaHandler);
