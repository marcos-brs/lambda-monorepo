import express from 'express';
import { handlerToExpress } from './hander-to-express.adapter';
import { lambdas } from '../packages/@lambdas';

const app = express();

for (const { route, allowedMethods, handler } of lambdas) {
    for (const method of allowedMethods)
        app[method]('/'+route, handlerToExpress(handler));
}

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
