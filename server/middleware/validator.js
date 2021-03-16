const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check(`name`, `This field is required`).notEmpty(),
  check(`email`, `This is not a valid email`).isEmail(),
  check(`email`, `This field is required`).notEmpty(),
  check(`phoneNumber`, `This field is required`).notEmpty(),
  check(`phoneNumber`, `This is not a valid phone number`).isLength({ min: 8 }),
  check(`password`, `This field is required`).notEmpty(),
  check(`password`, `This is not a valid password`).isLength({ min: 5 }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
