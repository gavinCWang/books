const mongoose = require('mongoose')
let BookSchema = {name:String, price:Number}
let Customer = {name:String, password:String, score:Number}

let bookModel = mongoose.model("Book", BookSchema)
mongoose.model("Customer", Customer)

