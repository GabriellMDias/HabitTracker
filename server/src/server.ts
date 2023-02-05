//Configura o servidor local utilizando o framework Fastify
import Fastify from "fastify";
import cors from '@fastify/cors'
import { prisma } from './lib/prisma'
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes)


//Configura Porta e mensagem no console
app.listen({
    port:3333,
    host: '0.0.0.0',
}).then(()=>{
    console.log("HTTP Server running")
})
