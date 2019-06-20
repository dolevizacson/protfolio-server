// initialization
const {
  modules,
  files,
  functions,
  routes,
  constants,
} = require('../../env/utils/access');

// modules
const mongoose = modules.MONGOOSE;
const passport = modules.PASSPORT;
const passportLocalMongoose = modules.PASSPORT_LOCAL_MONGOOSE;

// files
const userModelValidation = require(files.USER_MODEL_VALIDATION);

// constants
const { scopes, joiModelValidation } = constants.validation;

mongoose.set('useCreateIndex', true);

const { Schema } = mongoose;

const modelName = 'user';

const userSchema = new Schema({}, { collection: modelName }).plugin(
  passportLocalMongoose
);

// validation
userSchema.static(joiModelValidation, function() {
  return userModelValidation;
});

const UserModel = mongoose.model(modelName, userSchema);

passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

module.exports = modelName;
