const Joi = require('joi');

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    fullName: Joi.string().min(3).max(100).required().messages({
      'string.min': 'Full name must be at least 3 characters long',
      'string.max': 'Full name cannot exceed 100 characters',
      'any.required': 'Full name is required',
    }),
    username: Joi.string().min(5).max(100).required().messages({
      'string.min': 'Username must be at least 5 characters long',
      'string.max': 'Username cannot exceed 100 characters',
      'any.required': 'Username is required',
    }),
    email: Joi.string().email().max(100).required().messages({
      'string.email': 'Please provide a valid email address',
      'string.max': 'Email cannot exceed 100 characters',
      'any.required': 'Email is required',
    }),
    password: Joi.string().min(8).max(100).required().messages({
      'string.min': 'Password must be at least 8 characters long',
      'string.max': 'Password cannot exceed 100 characters',
      'any.required': 'Password is required',
    }),
    mobile: Joi.string()
      .pattern(/^\d{10}$/)
      .optional()
      .messages({
        'string.pattern.base': 'Mobile number must be exactly 10 digits',
      }),
    bio: Joi.string().max(150).optional().messages({
      'string.max': 'Bio cannot exceed 150 characters',
    }),
    skills: Joi.array().items(Joi.string()).optional().messages({
      'array.base': 'Skills must be an array of strings',
    }),
    category: Joi.string()
      .valid('Student', 'Fresher', 'Working Professional')
      .optional()
      .messages({
        'any.only': 'Category must be one of: Student, Fresher, Working Professional',
      }),
    currentCity: Joi.string().max(100).optional().messages({
      'string.max': 'Current city cannot exceed 100 characters',
    }),
    university: Joi.string().max(100).optional().messages({
      'string.max': 'University cannot exceed 100 characters',
    }),
    stream: Joi.string().max(100).optional().messages({
      'string.max': 'Stream cannot exceed 100 characters',
    }),
    resume: Joi.string().uri().optional().messages({
      'string.uri': 'Resume must be a valid URL',
    }),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    return res.status(400).json({ message: 'Bad Request', errors });
  }

  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'Please provide a valid email address',
      'any.required': 'Email is required',
    }),
    password: Joi.string().min(8).max(100).required().messages({
      'string.min': 'Password must be at least 8 characters long',
      'string.max': 'Password cannot exceed 100 characters',
      'any.required': 'Password is required',
    }),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    return res.status(400).json({ message: 'Bad Request', errors });
  }

  next();
};

module.exports = {
  signupValidation,
  loginValidation,
};