const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
	getUser: async (req, res) => {
		const user = await db.User.findById(req.user);
		res.json({
			id: user._id,
			username: user.username,
		});
	},
	register: async (req, res) => {
		try {
			let {
				name,
				email,
				username,
				password,
				inventory,
				business,
				phone,
			} = req.body;

			// validate

			if (!name || !email || !username || !password) {
				return res
					.status(400)
					.json({ msg: "Not all fields have been entered." });
			}

			if (password.length < 5) {
				return res.status(400).json({
					msg: "The password needs to be at least 5 characters long.",
				});
			}

			const existingUser = await db.User.findOne({ username });
			if (existingUser) {
				return res.status(400).json({
					msg: "An account with this username has already been created",
				});
			}

			const existingEmail = await db.User.findOne({ email });
			if (existingEmail) {
				return res
					.status(400)
					.json({ msg: "An account with this email has already been created" });
			}

			const salt = await bcrypt.genSalt();
			const passwordHash = await bcrypt.hash(password, salt);
			//console.log(passwordHash);
			//console.log(name);

			const newUser = new db.User({
				name: req.body.name,
				email: req.body.email,
				username: req.body.username,
				password: passwordHash,
				business: req.body.business,
				industry: req.body.industry,
				phone: req.body.phone,
			});
			//console.log("i am herer")
			const savedUser = await newUser.save();
			// It is saving but it still gives me an error
			console.log(savedUser);
			res.json(savedUser);
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	},
	login: async (req, res) => {
		try {
			const { username, password } = req.body;

			// validate

			if (!username || !password) {
				return res
					.status(400)
					.json({ msg: "Not all fields have been entered." });
			}

			const user = await db.User.findOne({ username });
			if (!user) {
				return res.status(400).json({ msg: "Username does not exist!" });
			}

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res.status(400).json({ msg: "Invalid password!" });
			}

			const token = jwt.sign(
				{
					exp: Math.floor(Date.now() / 1000) + 60 * 60,
					id: user._id,
				},
				"secret"
			);
			res.json({
				token,
				user: {
					id: user._id,
					name: user.name,
					username: user.username,
				},
			});
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	},
	valid: async (req, res) => {
		try {
			const token = req.header("x-auth-token");
			if (!token) {
				return res.json(false);
			}

			const verified = jwt.verify(token, "secret");
			if (!verified) {
				return res.json(false);
			}

			const user = await db.User.findById(verified.id);
			if (!user) {
				return res.josn(false);
			}

			return res.json(true);
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	},
	delete: async (req, res) => {
		try {
			const deletedUser = await db.User.findByIdAndDelete(req.user);
			res.json(deletedUser);
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	},
	update: async (req, res) => {
		try {
			//console.log(req.params.userId)
			const updateUser = await db.User.findByIdAndUpdate(req.params.userId);
			console.log(req.body);
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	},
	findById: async (req, res) => {
		//console.log("i am here", req.params);

		try {
			const foundUser = await db.User.findById(req.params.id)
			//console.log(foundUser)
			 
			res.json(foundUser)
		} catch (err) {
			res.status(500)
		}
		// db.User.findById(req.params.id)
		// 	.then((dbModel) => res.json(dbModel))
		// 	.catch((err) => res.status(422).son(err));
	},
};
