import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "1d",
	});

	const isProduction = process.env.NODE_ENV === "production";

	res.cookie("jwt", token, {
		httpOnly: true,
		secure: isProduction,
		sameSite: isProduction ? "None" : "Lax",
		domain: isProduction ? "onrender.com" : undefined,
		path: "/",
		maxAge: 24 * 60 * 60 * 1000,
	});

	return token;
};

export default generateToken;
