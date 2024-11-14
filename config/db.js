const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('http://testeos.me:3000/', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos conectada');
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
        process.exit(1);
    }
};
module.exports = connectDB;
