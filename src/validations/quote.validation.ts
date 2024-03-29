import Joi from 'joi';
import { validateSchema } from '../common/middlewares';
import { ReqField } from '../common/enums';

const randomQuoteSchema = Joi.object({
    authorId: Joi.number().positive().required(),
    token: Joi.string()
        .trim()
        .regex(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
        .required(),
});

export const quoteValidation = {
    randomQuote: validateSchema(randomQuoteSchema, ReqField.Query),
};
