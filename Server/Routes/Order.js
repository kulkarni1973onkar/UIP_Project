const express = require("express");
const Book = require('../Models/Order'); 
const router = express.Router();


router.post('/create', async (req, res) => {
    try {
        const {OrderId,OrderName,OrderPrice,OrderAddress, OrderStatus} = req.body;
        const newOrder = await Order.create({ OrderId,OrderName,OrderPrice,OrderAddress, OrderStatus });
        res.status(201).send(newOrder);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.get('/get', async (req, res) => {
    try {
        const order = await Order.findOne({ OrderName: req.query.title });
        if (!order) {
            return res.status(404).send({ message: "Order not found" });
        }
        res.send(order);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.put('/update', async (req, res) => {
    try {
        const { OrderId, ...updatedFields } = req.body;
        const order = await Order.updateOne({ _OrderId: OrderId }, { $set: updatedFields });
        if (order.nModified === 0) {
            return res.status(404).send({ message: "Order not found or no changes made" });
        }
        res.send({ message: "Order updated successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.delete('/delete', async (req, res) => {
    try {
        const { OrderId } = req.body;
        const order = await Order.deleteOne({ _OrderId: OrderId });
        if (order.deletedCount === 0) {
            return res.status(404).send({ message: "Order not found" });
        }
        res.send({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;
