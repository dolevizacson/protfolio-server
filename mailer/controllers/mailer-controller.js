// initialization
const {
  modules,
  files,
  functions,
  routes,
  constants,
  classes,
} = require('../../env/utils/access');

// modules
const express = modules.EXPRESS;

// files
const MailerService = require(files.MAILER_SERVICE);
const middleware = require(files.MIDDLEWARE);
const mailValidationSchema = require(files.MAIL_VALIDATION);

// services
const mailerService = new MailerService();

const mailerController = express.Router();

mailerController.post(
  routes.CREATE,
  middleware.validation.validateWithSchema(mailValidationSchema),
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const mail = await mailerService.sendMail(req.body);
    res.send(`Mail send successfully`);
  })
);

module.exports = mailerController;
