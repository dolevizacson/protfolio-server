// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// modules
const mongoose = modules.MONGOOSE;
const passport = modules.PASSPORT;
const passportLocalMongoose = modules.PASSPORT_LOCAL_MONGOOSE;
mongoose.set('useCreateIndex', true);

const { Schema } = mongoose;

const modelName = 'user';

const userSchema = new Schema({}, { collection: modelName }).plugin(
  passportLocalMongoose
);

const UserModel = mongoose.model(modelName, userSchema);

passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

module.exports = modelName;
