import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
//import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda'
import {NodejsFunction, SourceMapMode} from "aws-cdk-lib/aws-lambda-nodejs"
import path from 'path';
import { FunctionUrlAuthType, Runtime } from 'aws-cdk-lib/aws-lambda';

import { lambdas } from '../../packages/@lambdas';

export class LambdaMonorepoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    for(const {name} of lambdas) {
        const lambda = new NodejsFunction(this, name, {
            runtime: Runtime.NODEJS_18_X,
            entry: path.join(__dirname, '..', '..', 'packages', '@lambdas', name, 'src', 'index.ts'),
            handler: "handler",
            bundling: {
                sourceMap: true,
                minify: false,
                sourceMapMode: SourceMapMode.INLINE,
            }
        });

        /* 
        Need to setup esbuild
        const lambda = new Function(this, name, {
            handler: 'dist/index.handler',
            runtime: Runtime.NODEJS_18_X,
            code: Code.fromAsset(path.join(__dirname, '..', '..', 'packages', '@lambdas', name))
        });
        */

        const lambdaUrl = lambda.addFunctionUrl({
            authType: FunctionUrlAuthType.NONE,
            cors: {
                allowedOrigins: ['*'],
            }
        });

        new cdk.CfnOutput(this, 'FunctionUrl', {
            value: lambdaUrl.url,
           });
    }
  }
}
