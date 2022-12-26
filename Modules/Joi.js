const Joi = require('joi');



let schema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(4).required(),
    mobile: Joi.string().length(10).pattern(/^[0-9]+$/),
    dob: Joi.date()
});

let { error } = schema.validate(req.body);
if (error) {
    return res.send(error.details[0].message);
} else {

}