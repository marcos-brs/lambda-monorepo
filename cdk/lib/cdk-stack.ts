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
/*
    new Function(this, 'function-1', {
        handler: 'dist/index.handler',
        runtime: Runtime.NODEJS_18_X,
        code: Code.fromAsset(path.resolve(__dirname, '..', 'packages', '@lambdas', 'lambda-1'))
      });
      */

    // lambda function

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

    // const lambda1 = new NodejsFunction(this, "lambda-1", {
    //     runtime: Runtime.NODEJS_18_X,
    //     entry: path.join(__dirname, '..', '..', 'packages', '@lambdas', 'lambda-1', 'src', 'index.ts'),
    //     handler: "handler",
    //     bundling: {
    //         sourceMap: true,
    //         minify: false,
    //         sourceMapMode: SourceMapMode.INLINE,
    //     }
    // });

  
    // const myFunctionUrl = lambda1.addFunctionUrl({
    //     authType: FunctionUrlAuthType.NONE,
    //     cors: {
    //         allowedOrigins: ['*'],
    //     }
    // });
  
    // new cdk.CfnOutput(this, 'FunctionUrl', {
    //  value: myFunctionUrl.url,
    // });
  }
}
