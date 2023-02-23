const { body, validationResult } = require("express-validator");

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    const message = errorMessages.join("/ ");
    return res.status(400).json({
      status: "error",
      message,
    });
  }
  next();
};

const userValidators = [
  body("fullname")
    .isString()
    .withMessage("fullname must be a string")
    .notEmpty()
    .withMessage("fullname can not be empty")
    .isLength({ min: 3 })
    .withMessage("fullname must be at least 3 characters")
    .isLength({ max: 50 })
    .withMessage("fullname must be less than 50 characters"),
  body("username")
    .isString()
    .withMessage("fullname must be a string")
    // .notEmpty()
    // .withMessage("fullname can not be empty")
    .isLength({ min: 3 })
    .withMessage("fullname must be at least 3 characters")
    .isLength({ max: 50 })
    .withMessage("fullname must be less than 50 characters"),
  body("email").isEmail().withMessage("email would be a valid email"),
  body("password")
    .isStrongPassword({ minSymbols: 0 })
    .withMessage(
      "Password must have at least: one symbol, one uppercase, one number, one lowercase"
    )
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .notEmpty()
    .withMessage("Password can not be empty"),
  body("biography")
    .notEmpty()
    .withMessage("biography can not be empty")
    .isLength({ max: 300 })
    .withMessage("fullname must be less than 300 characters"),
  body("phone").notEmpty().withMessage("phone can not be empty"),
  body("age")
    .notEmpty()
    // .isNumeric()
    // .withMessage('age must be numeric')
    .isLength({ max: 2 })
    .withMessage("age must be less than 3 characters"),

  checkValidations,
];

const sportValidators = [
  body("name")
    .isString()
    .withMessage("name must be a string")
    .notEmpty()
    .withMessage("fullname can not be empty")
    .isLength({ min: 3 })
    .withMessage("fullname must be at least 3 characters")
    .isLength({ max: 50 })
    .withMessage("fullname must be less than 50 characters"),
  checkValidations,
];

module.exports = { userValidators, sportValidators };
