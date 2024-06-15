const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    OrderName: String,
    OrderPrice: [String],
    OrderAddress: String,
    OrderStatus: String,
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
});


const Order = mongoose.model("Order", orderSchema);


async function createOrder(userId,OrderId,OrderName,OrderPrice,OrderAddress, OrderStatus) {
    const newOrder = await Order.create({
        OrderName:OrderName,
        OrderPrice:OrderPrice,
        OrderAddress:OrderAddress,
        OrderStatus:OrderStatus,
        totalPrice: totalPrice,
        userId:userId,
        OrderId:OrderId
        
    });
    return newOrder;
}


// GET Orders
async function getAllOrders() {
    const database = client.db('test');
    const collection = database.collection('orders');
    const orders = await collection.find().toArray()
    console.log(orders);
    return orders;
}
async function getOrder(userId,OrderName) {
    return await Order.findOne({ "OrderName": OrderName,"userId":userId });
}


async function updateOrder(userId,OrderId, updatedFields) {
    const order = await Order.updateOne({ "_OrderId": OrderId,"userId": userId }, { $set: updatedFields });
    return order;
}


async function deleteOrder(userId,OrderId) {
    await Book.deleteOne({ "_OrderId": OrderId,"userId": userId });
}


module.exports = { createOrder, getAllOrders,getOrder, updateOrder, deleteOrder };
