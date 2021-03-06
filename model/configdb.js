const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect(`mongodb://localhost:27017/ApiStart`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect db successfully !!');
    } catch (error) {
        console.log(`connect db false ${error}`);
    }
}

module.exports = { connect };