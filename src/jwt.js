const jwt = require('jsonwebtoken')

const SECRET = 'SECRET'

const sign = payload => jwt.sign(payload, SECRET, {
	expiresIn: 60 * 5, // minutes
	algorithm: 'HS384',
})

const verify = token => jwt.verify(token, SECRET)

module.exports.sign = sign
module.exports.verify = verify
