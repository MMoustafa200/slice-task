import Joi from 'joi';
import { validateSchema } from '../common/middlewares';
import { ReqField } from '../common/enums';

const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    fullname: Joi.string().min(3).required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});

const logoutSchema = Joi.object({
    token: Joi.string()
        .trim()
        .regex(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
        .required(),
});

export const authValidation = {
    register: validateSchema(registerSchema, ReqField.Body),
    login: validateSchema(loginSchema, ReqField.Body),
    logout: validateSchema(logoutSchema, ReqField.Query),
};
