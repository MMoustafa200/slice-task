"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const auth_controller_1 = require("../controllers/auth.controller");
const authController = tsyringe_1.container.resolve(auth_controller_1.AuthController);
const router = (0, express_1.Router)();
router.post('/register', authController.register.bind(authController));
router.post('/login', authController.login.bind(authController));
router.delete('/logout', authController.logout.bind(authController));
exports.authRouter = router;