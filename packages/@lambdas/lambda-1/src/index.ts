import { FileUploader } from '@common-infra/file-uploader';
import type { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

const fileUploader = new FileUploader();

class LambdaHandler {
  constructor(private readonly fileUploader: FileUploader) {
    this.fileUploader = fileUploader;
  }

  async main(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult>{
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

export const handler = lambdaHandler.main.bind(lambdaHandler);
