const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect('mongodb://root:admin@localhost:27017/admin', {
            dbName: 'nodejs',
            useNewUrlParser:true // ignore url warning..
        }, (error) => {
            if (error) {
                console.log('connection error', error);
            } else {
                console.log('connection success');
            }
        });
    };
    connect();
    mongoose.connection.on('error', (error) => {
        console.error('db connection error.', error);
    });
    mongoose.connection.on('disconnected', () => {
        console.error('db connection closed. try to reconnect.');
        connect();
    });
    require('./article');
};