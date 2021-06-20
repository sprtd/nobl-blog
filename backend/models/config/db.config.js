const mongoose = require('mongoose')

const connectDB = async ()=> {
  try{
    const MONGO_URI = process.env.MONGO_URI
    const connect = await mongoose.connect(MONGO_URI, {
      useCreateIndex: true, 
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    if(connect) {
      console.log('mongodb connection established')
    }
    

  }catch(err) {
    console.error(err)
  }
}

module.exports = connectDB