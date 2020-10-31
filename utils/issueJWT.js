const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const pathToKey = path.join(__dirname, '..', 'id_rsa_priv.pem')
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8')

module.exports.issueJWT = (band) => {
  jwt.sign({ bandId: band._id }, PRIV_KEY, { expiresIn: '1h' })
}
