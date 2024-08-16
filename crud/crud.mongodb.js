use("CrudDB")

db.createCollection("electronic")

// CREATE

/*db.electronic.insertOne({
    name: "Fridge",
    price: 4000
})*/

/*
db.electronic.insertMany([
    {
        "name": "Fridge",
        "price": 4000
    },
    {
        "name": "Microwave",
        "price": 1500
    },
    {
        "name": "Washing Machine",
        "price": 3000
    },
    {
        "name": "Air Conditioner",
        "price": 5000
    },
    {
        "name": "Television",
        "price": 2500
    },
    {
        "name": "Blender",
        "price": 800
    },
    {
        "name": "Oven",
        "price": 2000
    },
    {
        "name": "Toaster",
        "price": 600
    },
    {
        "name": "Dishwasher",
        "price": 3500
    },
    {
        "name": "Vacuum Cleaner",
        "price": 1200
    }
])
*/

// READ

// let a = db.electronic.find({price: 4000})
// console.log(a.toArray())

// let b = db.electronic.findOne({price: 1500});
// console.log(b)

// let c = db.electronic.find({price: {$gt: 2000}})
// console.log(c.count())

// UPDATE

// db.electronic.updateOne({price: 600}, {$set: {price: 800}})

// DELETE

// db.electronic.deleteOne({price: 1200})