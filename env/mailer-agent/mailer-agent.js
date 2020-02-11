// initialization
const { modules, files, functions, routes } = require('../utils/access');

// modules
const mailer = modules.MAILER;
const googleAPI = modules.GOOGLE_API;

// OAuth
const {
  google: {
    auth: { OAuth2 },
  },
} = googleAPI;

const oAuth2Client = new OAuth2(
  process.env.OAUTH_CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
);

oAuth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN,
});

const accessToken = oAuth2Client.getAccessToken();

let transporter;

module.exports = () => {
  if (transporter) {
    return transporter;
  } else {
    transporter = mailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.CONTACT_EMAIL,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    console.log('Mailer connected');
  }
};
