const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publisher: String,
    totalPrice: [String],
    isbn: [String],
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
});


const Book = mongoose.model("Book", bookSchema);


async function createBook(userId,title, author, publisher, totalPrice, isbn) {
    const newBook = await Book.create({
        userId:userId,
        title: title,
        author: author,
        publisher: publisher,
        totalPrice: totalPrice,
        isbn: isbn
    });
    return newBook;
}

//Gets all books
async function getAllBooks() {
    const database = client.db('test');
    const collection = database.collection('books');
    const orders = await collection.find().toArray()
    console.log(books);
    return books;
}


async function getBook(userId,title) {
    return await Book.findOne({ "title": title,"userId":userId });
}


async function updateBook(userId,id, updatedFields) {
    const book = await Book.updateOne({ "_id": id,"userId": userId }, { $set: updatedFields });
    return book;
}


async function deleteBook(userId,id) {
    await Book.deleteOne({ "_id": id,"userId": userId });
}


module.exports = { createBook, getBook, updateBook, deleteBook,getAllBooks };
