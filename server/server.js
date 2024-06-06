const express = require('express');
const User = require("./db/models/User");

require("./db/connection/connection");

const app = express();

app.use(express.json()); 

app.get('/', async (req, res) => {
    res.json("Olá mundo!");
});

app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const findEmail = await User.findOne({ email });
        if(findEmail){
            return res.status(403).json({ message: "Já existe alguém com esse email."})
        }else{
            const newUser = new User({ username, email, password });
            const userSave = await newUser.save();
            return res.status(201).json(userSave);
        }
    } catch (error) {
        res.status(400).json(error)
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        let senhaCorreta;

        if(!user){
            return res.status(401).json({ message: "Email ou senha incorretos."})
        }
        if(password == user.password && (user)){
            senhaCorreta = true
            return res.status(200).json({ message: "Autenticado como " + user.username + "!"})
        }else{
            senhaCorreta = false;
            return res.status(401).json({ message: "Email ou senha incorretos."})
        }
    } catch (error) {
        return res.status(402).json(error);
    }
});

app.get('/users', async (req, res) => {
    try {
        const findUsers = await User.find();
        
        if(findUsers.length == 0){
          res.json({ message: "Não há usuários"})  
        }
        res.status(200).json(findUsers);
    }catch {
        res.status(403).json({ message: "Erro" });
    }
})

app.delete('/users', async (req, res) => {
    try {
        const deletedUsers = await User.deleteMany();
        if(deletedUsers.deletedCount == 0) {
            res.json({ message: "Não há usuários" })
        }else{
            res.json({ message: deletedUsers.deletedCount + " usuário(s) deletados" });
        }
    } catch (error) {
        res.status(400).json(error);
    }
})

app.listen(3000, () => {
    console.log("Server is running at the port 3000");
});
