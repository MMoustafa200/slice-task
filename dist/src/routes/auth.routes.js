"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_validation_1 = require("../validations/auth.validation");
const common_validation_1 = require("../validations/common.validation");
const is_auth_middleware_1 = require("../common/middlewares/is-auth.middleware");
const authController = tsyringe_1.container.resolve(auth_controller_1.AuthController);
const router = (0, express_1.Router)();
router.post('/register', auth_validation_1.authValidation.register, authController.register.bind(authController));
router.post('/login', auth_validation_1.authValidation.login, authController.login.bind(authController));
router.delete('/logout', common_validation_1.commonValidation.token, is_auth_middleware_1.isAuth, authController.logout.bind(authController));
exports.authRouter = router;
