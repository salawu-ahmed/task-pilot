const mongoose = require('mongoose')

function dbConnect(params) {
    mongoose.connect(process.env.DATABASE_URI)
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });
}

module.exports = dbConnect