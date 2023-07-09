import joi from "joi";

export const recordSchema = joi.object({
    'value': joi.number().positive().required(),
    'description': joi.string().required(),
    'type': joi.string().valid('in','out').required()
});