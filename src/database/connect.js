const mongoose = require("mongoose");
const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.bdcjavr.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        console.log("ocorreu um erro ao conectar no banco de dados", error);
      }
      return console.log("conectado com sucesso no banco de dados");
    }
  );
};

module.exports = connectToDatabase;
