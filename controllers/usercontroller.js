const router = require("express").Router();
const { UserModel } = require("../models");

router.post("/register", async (req, res) => {

    UserModel.create({
        username: "user1234",
        passwordhash: "password5678"
    })
})

module.exports = router;