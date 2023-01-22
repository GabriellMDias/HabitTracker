//Configura o servidor local utilizando o framework Fastify
import Fastify from "fastify";
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

//Define conteúdo do diretório "/"
app.get('/', async ()=> {
    //Requisita conteúdo da tabela habits
    const habits = await prisma.habit.findMany()
    return habits
})

//Configura Porta e mensagem no console
app.listen({
    port:3333,
}).then(()=>{
    console.log("HTTP Server running")
})
