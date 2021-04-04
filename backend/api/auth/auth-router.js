const router = require("express").Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const Auth = require("./auth-model")

router.post("/register", async (req, res, next) => {
	try {
		const { user_name, password, location } = req.body
		if(!user_name || !password || !location){
			return res.status(400).json({
				message: "username, password and location required"
			})
		} else {
			const newUser = await Auth.add({
				user_name: user_name,
				password: await bcrypt.hash(password, 5),
				location: location
			})
			return res.status(201).json(newUser)
		}
	} catch (err) {
		next(err)
	}
})

router.post("/login", async (req, res, next) => {
	try {
		const { user_name, password } = req.body
		if(!user_name || !password){
			return res.status(400).json({
				message: "username and password required"
			})
		}
		const user = await Auth.findBy({ user_name }).first()
		const checkPassword = await bcrypt.compare(password, user ? user.password : "")

		if (!user || !checkPassword){
			return res.status(401).json({
				message: "username or password incorrect"
			})
		} else {
			const token = jwt.sign({
				subject: user.id,
				user_name: user.user_name
			}, process.env.JWT_SECRET, {expiresIn: "1d"})
			
			res.cookie("token", token)

			res.status(200).json({
				message: `Welcome back ${user_name}!`,
				token: token
			})
		}
		
	} catch (err) {
		next(err)
	}
})

router.post("/logout", async (req, res, next) => {
	try {
		req.session.destroy((err) => {
			if (err){
				next(err)
			} else {
				res.status(204).end()
			}
		})
		
	} catch (err) {
		next(err)
	}
})

module.exports = router