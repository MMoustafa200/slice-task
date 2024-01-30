import Joi from 'joi';
import { validateSchema } from '../common/middlewares';
import { ReqField } from '../common/enums';

const tokenSchema = Joi.object({
    token: Joi.string()
        .trim()
        .regex(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
        .required(),
});

export const commonValidation = {
    token: validateSchema(tokenSchema, ReqField.Query),
};
