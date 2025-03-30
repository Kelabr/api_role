import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

async function createUser(email, password, idade){
    const user = await prisma.user.create({
        data:{
            email:email,
            password:password,
            idade:idade
        }
    })

    return user
}

export {createUser}