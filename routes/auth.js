const router = require("express").Router();

const User = require("../models/user");
// Traemos la dependencia que vamos a utilizar
const Joi = require('@hapi/joi');

// Creamos un esquema de registro usando las validaciones de Joi
const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

router.post('/register', async (req, res) => {

    // Dentro del método que invoca POST
    // Usaremos la propiedad error del objeto que nos entrega schemaRegister.validate()
    const { error } = schemaRegister.validate(req.body)

    // Si este error existe, aqui se termina la ejecución devolviedonos el error
    if (error) {
        return res.status(400).json(
            { error: error.details[0].message }
        )
    }

    // Otras validaciones

    const user = new User({
        const isEmailExist = await User.findOne({ email: req.body.email });
if (isEmailExist) {
  return res.status(400).json({ error: "Email ya registrado" });
}

module.exports = router;
