//Configura o servidor local utilizando o framework Fastify
import Fastify from "fastify";
import cors from '@fastify/cors'
import { prisma } from './lib/prisma'
import { appRoutes } from "./routes";
//import './lib/dayjs';

const app = Fastify();
const port = (process.env.PORT || 3333)

app.register(cors);
app.register(appRoutes)


//Configura Porta e mensagem no console
app.listen({
    port:port,
    host: '0.0.0.0',
}).then(()=>{
    console.log("HTTP Server running on Port: " + port)
})
