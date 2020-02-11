const {
  modules,
  files,
  functions,
  routes,
  classes,
} = require('../../env/utils/access');

// files
const mailer_agent = require(files.MAILER_AGENT);

// errors
const MailNotSentError = require(files.MAIL_NOT_SENT_ERROR);

module.exports = class MailerService {
  async sendMail(mail) {
    const mailer = mailer_agent();

    try {
      const response = await mailer.sendMail({
        ...mail,
        to: process.env.CONTACT_EMAIL,
      });
    } catch (error) {
      throw new MailNotSentError('SMTP server error');
    }
    if (response.rejected.length > 0) {
      throw new MailNotSentError('Mail rejected error');
    }
  }
};
