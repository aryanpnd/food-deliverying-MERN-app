const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://mernfirstapp:OK7IkPOpEHPUkoYZ@cluster0.zeyn9ki.mongodb.net/foodapp?retryWrites=true&w=majority";

// const mongoURI = "mongodb://mernfirstapp:OK7IkPOpEHPUkoYZ@ac-wjz4s2e-shard-00-00.zeyn9ki.mongodb.net:27017,ac-wjz4s2e-shard-00-01.zeyn9ki.mongodb.net:27017,ac-wjz4s2e-shard-00-02.zeyn9ki.mongodb.net:27017/foodapp?ssl=true&replicaSet=atlas-pdga9t-shard-0&authSource=admin&retryWrites=true&w=majority";


mongoose.set('strictQuery', true);


const mongodbConnect = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, result) => {
        if (err) {
            console.log(`----------${err}-----------`)
        }
        else {
            console.log("connected successfully");
            const fetched_data = await mongoose.connection.db.collection("store_available_items");
            fetched_data.find({}).toArray(async function (err, data) {

                const foodCatagory = await mongoose.connection.db.collection("foodCatagories");
                foodCatagory.find({}).toArray(function (err, catagoryData) {

                    if (err) console.log(`----------${err}--------------`);

                    else {
                        global.store_available_items = data
                        global.foodCatagory = catagoryData
                        // console.log(global.store_available_items)
                        console.log("data cathed successfully....")
                    }

                })


            })
        }
    });
}

module.exports = mongodbConnect;