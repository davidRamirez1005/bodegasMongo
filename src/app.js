import express from 'express';
import dotenv from 'dotenv';
import {servidor} from './config/connect.js';
import {limitget} from './helpers/configLimit.js'
import { appToken, appVerify } from "./jwt/configToken.js";
import appBodega from './routers/bodegasRouter.js';



dotenv.config();
const appExpress = express();


appExpress.use(express.json());

appExpress.use('/token',limitget(),appToken)
appExpress.use('/bodega',limitget(), appVerify, appBodega)



appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});

export default appExpress;