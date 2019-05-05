// initialization
const { modules, files, functions, routes } = require('../../env/utils/access');

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
