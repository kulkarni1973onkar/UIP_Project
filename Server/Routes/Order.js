const express = require("express");
const Book = require('../Models/Order'); 
const router = express.Router();


router.post('/create', async (req, res) => {
    try {
        const { title, author, publisher, totalPrice, isbn } = req.body;
        const newBook = await Book.create({ title, author, publisher, totalPrice, isbn });
        res.status(201).send(newBook);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.get('/get', async (req, res) => {
    try {
        const book = await Book.findOne({ title: req.query.title });
        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }
        res.send(book);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.put('/update', async (req, res) => {
    try {
        const { id, ...updatedFields } = req.body;
        const book = await Book.updateOne({ _id: id }, { $set: updatedFields });
        if (book.nModified === 0) {
            return res.status(404).send({ message: "Book not found or no changes made" });
        }
        res.send({ message: "Book updated successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});


router.delete('/delete', async (req, res) => {
    try {
        const { id } = req.body;
        const book = await Book.deleteOne({ _id: id });
        if (book.deletedCount === 0) {
            return res.status(404).send({ message: "Book not found" });
        }
        res.send({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;
