const { validInput } = require("./validInput");

const validation = async (req, res, next) => {
    const [isValid, errors] = validInput(req.body); // checking whether all fields are provided and valid

    if (!isValid) {
        return res.status(400).json(errors);
    }
    next();
}

module.exports = { validation }