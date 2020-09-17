// initialization
const { modules, files, functions, routes } = require('../../utils/access');

// modules
const mongoose = modules.MONGOOSE;

module.exports = functions.helpers.asyncWrapper(async (req, res, next) => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  console.log('Mongo DB connected');
});
