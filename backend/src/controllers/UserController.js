const User = require('../models/User')

module.exports = {
  async store(req, res) {
    const {email, password} = req.body

    //Verifica se o usuário já está cadastrado.
    let user = await User.findOne({email})

    if(!user) {
      user = await User.create({email, password})
    }

    return res.json(user)
  }
}