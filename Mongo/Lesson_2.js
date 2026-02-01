db.FastBite.insertOne({
    name: "Tofu Buddha Bowl",
    cuisine: "Asian",
    price: { value:9.50, currency: "USD"},
    tags: ["vegan","gluten-free"],
    available: true
});


db.FastBite.find(
    //first object is filter
    {
        available: true,
        tags : "vegan",
        "price.value": {$lt: 12}
    },
    {
        _id:0,
        name: 1,
        price : 1
    }
    
);

db.FastBite.updateOne(
    {name: "Tofu Buddha Bowl"},
    {
        $set: {price : 10},
        $push: {tags : "popular"}
    }
);

db.FastBite.deleteOne({
    name: "Old Special Soup"
});