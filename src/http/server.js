import fastify from "fastify";
import routers from "../router/routers.js";

const app = fastify()

app.register(routers, {prefix:"api"})


app.listen({port:3333}, ()=>{
    console.log("Servodr rodando")
})