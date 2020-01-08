const mongoose = require('mongoose')

let bookModel = mongoose.model("Book")

function addBook(book, callback) {
    let b = bookModel.create(book, function (err, newBookDoc) {
        if (!err)
            callback(newBookDoc.toObject())

    })
}

function findAllBooks(callback) {
    bookModel.find({}).exec(function (err, books) {
        console.log("[INFO] BookDao.findAllBooks")
        if (!err)
            callback(books)
    })
}

function deleteBook(id, callback) {
    bookModel.findByIdAndRemove(id, function (err) {
        if (!err)
            callback({})
    })
}

module.exports = {addBook, deleteBook, findAllBooks}