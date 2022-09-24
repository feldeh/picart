"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const router = require("express").Router();
const { Response, Request } = require();
const { user, validate } = require("../model/user");
const bcrypt = require("brcrypt");
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.detail[0].message });
        const user = yield User.findOne({ email: req.body.email });
        if (user)
            return res.status(409).send({ message: "User with given email already exists!" });
        const salt = yield bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = yield bcrypt.hash(req.body.password, salt);
        yield new user(Object.assign(Object.assign({}, req.body), { password: hashPassword })).save();
        res.status(201).send({ message: "user created successfully" });
    }
    catch (error) {
        res.status(500).send({ message: " Internal Server Error" });
    }
}));
module.exports = router;
