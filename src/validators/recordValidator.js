import { recordSchema } from './schemas/recordSchema.js';

export function recordValidator(req, res, next) {

    const validation = recordSchema.validate(req.body);

    if (validation.error) {
        return res.status(422).send(validation.error.message)
    }

    next();

}