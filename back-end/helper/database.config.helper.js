const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => console.log("Veri Tabanına Başarı İle Bağlandın"))
    .catch((err) => console.log(err.reason));
};

module.exports = connectDatabase;
