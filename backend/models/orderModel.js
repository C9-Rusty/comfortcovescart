const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object, required:true},
    status:{type:String,default:"product Processing"},
    date:{type:Date,default:Date.now()},
    payment:{type:String,defalut:false}
})

const orderModel = mongoose.models.Order || mongoose.model('Order',orderSchema);

module.exports = orderModel;