const express = require("express");
const { userRegister, userLogin } = require("../controllers/user.controller");
const { validator, registerRules } = require("../middleware/validator");
const isAuth = require("../middleware/passport-setup");
const router = express.Router();

router.post("/register", registerRules(), validator, userRegister);
router.post("/login", userLogin);
router.get(`/current`, isAuth(), (req, res) => res.json(req.user));
// http://localhost:7000/user/register

router.get("/:_id", (req, res) => {
  let { _id } = req.params;
  user.find({ _id })
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
});
router.put('/update/:_id', (req, res) => {
    let _id = req.params._id;
    User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
        .then(user => res.send(user))
        .catch(err => res.send(err));
})

module.exports = router;
