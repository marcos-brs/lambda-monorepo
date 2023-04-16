# Lambda Monorepo

## Objectves
- Run aws lambda locally
- Code reuse with monorepo structure
- Testable code using classes instead of functions
- Use AWS CDK with typescript as IaC tool

## How to use
1. `bootstrap:dev`: install all dependencies
2. `bootstrap:prod`: install olly production dependencies
3. `build`: build all npm projects inside `packages` folder with `tsc`
4. `start:dev`: start a webserver with all the lambdas (need to run `build` first)
5. `cdk bootstrap`: define all the resources that will be needed to deploy the application
6. `cdk deploy`: deploy the application (NO need run `cdk bootstrap` first)
7. `cdk destroy`: remove all the resources created by the stack

  Note: To run `cdk` commands you need an aws account set up via the aws cli

## Folder structure

```
- app -> web application adapter to run lambdas locally
- cdk -> cloudformation stack definition
- packages
-- @common-domain -> reusable domain services like authentication
-- @common-infra -> reusables infra services like file uploader
--- file-uploader -> example of infra service
-- @lambdas -> all lambdas need to be in this folder
--- index.ts -> file to map lambdas to webserver and cloudformation stack
--- lambda-1 -> example of lambda
```

## TODO
- [ ] Watch mode to compile package folder in real time
- [ ] Create adapters for lambdas invoked by SQS
- [ ] Use `esbuild` instead of `tsc` to not be necessary use `Docker` on `cdk bootstrap` proccess
- [ ] CI/CD by enviroment
- [ ] Fix eslint to run in all projects
- [ ] Make some example tests
- [ ] Add husky + commitlinter