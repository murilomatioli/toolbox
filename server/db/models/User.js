const mongoose = require("mongoose")

const User = new mongoose.Schema ({
    username: {
        type: String,
        minlength: [3, "Seu nome de usuário deve conter pelo menos 3 caracteres."],
        required: [true, "Cadastre seu nome de usuário."],
        unique: false
    },
    email: {
        type: String,
        minlength: [],
        match: [/^\S+@\S+\.\S+$/, 'Por favor, insira um e-mail válido.'],
        required: [true, "Cadastre seu email."],
        unique: [true, "Já existe alguém cadastrado com esse email"]
    },
    password: {
        type: String,
        minlength: [8, "Sua senha deve conter pelo menos 8 caracteres."],
        required: [true, "Cadastre a sua senha."],
    }
})

module.exports = mongoose.model("users", User)