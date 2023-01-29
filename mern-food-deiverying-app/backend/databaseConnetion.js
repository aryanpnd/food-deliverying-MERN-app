const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://mernfirstapp:OK7IkPOpEHPUkoYZ@cluster0.zeyn9ki.mongodb.net/foodapp?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);


const mongodbConnect = async() => {
    await mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, async (err,result) => {
        if (err) {
            console.log(`----------${err}-----------`)
        }
        else{
            console.log("connected successfully");
            const fetched_data = await mongoose.connection.db.collection("store_available_items");
            fetched_data.find({}).toArray(function(err,data) {
                if(err) console.log(`----------${err}--------------`);
                else console.log("data cathed successfully....")           
            })
        }
    });
}

module.exports = mongodbConnect;