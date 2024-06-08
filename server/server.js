const express = require('express');
const User = require("./db/models/User");

require("./db/connection/connection");

const app = express();

app.use(express.json()); 

app.get('/', async (req, res) => {
    res.json("Olá mundo!");
});

app.post('/users', async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });
        const userSave = await newUser.save();
        res.status(201).json(userSave);
    } catch {
        res.status(400).json({ message: "Não foi possível criar o usuário."})
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
