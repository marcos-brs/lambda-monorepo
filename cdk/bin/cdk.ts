#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LambdaMonorepoStack } from '../lib/cdk-stack';

const app = new cdk.App();
new LambdaMonorepoStack(app, 'CdkStack', {
});