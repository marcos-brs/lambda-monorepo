import path from "path";
import { handler as lambda1Handler } from "./lambda-1";

interface Lambda {
    route: string;
    allowedMethods: ('get' | 'post' | 'put' | 'delete')[];
    name: string;
    location: string;
    buildLocation: string;
    handler: any;
  }

export const lambdas: Lambda[] = [{
    route: 'lambda-1',
    allowedMethods: ['get'],
    name: 'lambda-1',
    location: path.join(__dirname, 'lambda-1'),
    buildLocation: 'dist/index.js',
    handler: lambda1Handler,
}]