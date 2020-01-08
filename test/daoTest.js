const mongoose = require('mongoose')
require('../model')
let  bookDao = require('../dao/BookDao')
const assert = require('assert')
var dbUrl = "mongodb://39.101.132.239/books"

describe('test BookDao', function () {
    before(function () {
        mongoose.connect(dbUrl, function (err) {

        })
    })
    after(function () {
        mongoose.disconnect()
    })

    it('test add book', function (done) {
        let book = {name:'book-demo', price:200}
        bookDao.addBook(book, function (nb) {
            assert.ok(nb._id != null)
            done()

        })
    });
})