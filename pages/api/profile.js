import { verify } from "jsonwebtoken";

export default function profileHandler(req, res) {
  const { myTokenName } = req.cookies;
  try {
    const user = verify(myTokenName, "secret");
    console.log(user);
    return res.json({
      email: user.email,
      password: user.password,
    });
  } catch (err) {
    res.status(401).json({ message: "Login failed" });
  }
  return res.json({
    user: "user123",
  });
}
