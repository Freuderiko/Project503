const User = require('../models/User')

module.exports = {
  //Criação de usuário.
  async store(req, res) {
    const {email, password} = req.body

    //Verifica se o usuário já está cadastrado.
    let user = await User.findOne({email})

    if(!user) {
      user = await User.create({email, password})
    }

    return res.json(user)
  },

  //Login.
  async login(req, res) {
    const {email, password} = req.body

    const user = await User.findOne({email, password})

    if(!user) {
      return res.send(401)
    }

    return res.json(user)
  }
}