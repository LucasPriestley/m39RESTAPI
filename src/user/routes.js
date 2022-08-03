const { Router } = require("express");
const userRouter = Router();
const {
  createUser,
  login,
  getAllUsers,
  findUser,
  updateUser,
  deleteUser,
} = require("./controllers");
const { hashPass, comparePass, tokenCheck } = require("../middleware");

userRouter.post("/user", hashPass, createUser);

userRouter.post("/login", comparePass, login);

userRouter.get("/user", getAllUsers);

userRouter.get("/login", tokenCheck, login);

// userRouter.get("/user", findUser);

userRouter.patch("/user", updateUser);

userRouter.delete("/user", deleteUser);

module.exports = userRouter;

// const loginFetch = async (username, pass) => {
//     const res = await fetch("http://localhost:5001/login", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             username: username,
//             password: pass
//         })
//     })
//     const data = await res.json()
//     data.user
//     data.token
// } This is for next week, only in React app