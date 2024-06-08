const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publisher: String,
    totalPrice: [String],
    isbn: [String]
});


const Book = mongoose.model("Book", bookSchema);


async function createBook(title, author, publisher, totalPrice, isbn) {
    const newBook = await Book.create({
        title: title,
        author: author,
        publisher: publisher,
        totalPrice: totalPrice,
        isbn: isbn
    });
    return newBook;
}


async function getBook(title) {
    return await Book.findOne({ "title": title });
}


async function updateBook(id, updatedFields) {
    const book = await Book.updateOne({ "_id": id }, { $set: updatedFields });
    return book;
}


async function deleteBook(id) {
    await Book.deleteOne({ "_id": id });
}


module.exports = { createBook, getBook, updateBook, deleteBook };
