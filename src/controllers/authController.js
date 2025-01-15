class AuthController {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async register(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        try {
            const existingUser = await this.userModel.findByEmail(email);
            if (existingUser) {
                return res.status(400).json({ message: "User already exists." });
            }

            const newUser = await this.userModel.create({ email, password });
            return res.status(201).json({ message: "User registered successfully.", user: newUser });
        } catch (error) {
            return res.status(500).json({ message: "Server error.", error: error.message });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        try {
            const user = await this.userModel.findByEmail(email);
            if (!user || user.password !== password) {
                return res.status(401).json({ message: "Invalid email or password." });
            }

            return res.status(200).json({ message: "Login successful.", user });
        } catch (error) {
            return res.status(500).json({ message: "Server error.", error: error.message });
        }
    }
}

export default AuthController;