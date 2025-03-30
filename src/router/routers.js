import { createUser } from "../db/dbUser.js"

export default function routers(app, options){
    
    app.get("/", async(req, res) => {
        res.status(200).send({message:"OK"})
    })

    app.post("/", async(req, res)=>{
        const {email, password, idade} = req.body

        try{
            
        const newUser = await createUser(email, password, idade)

        if(!newUser){
            return res.send({message:"Erro ao cadastrar"})

        
        }

        res.send({menssage: "Usuário criado", newUser})
            
  
        }catch(error){
            console.error("Erro ao cadastrar usuário", error)
        }



        
    })
}