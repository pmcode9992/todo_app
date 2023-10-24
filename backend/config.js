import mongoose from "mongoose";

const mongoURL = 'mongodb://127.0.0.1:27017/tododb';

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})

const todoschema = new mongoose.Schema({
    name: String,
    status: Number
});

const List = mongoose.model("List", todoschema);

// const item1 = new List({
//     name: "Welcome to your todo list",
// })
// const item2 = new List({
//     name: "Hit the + button to add a new item",
// })
// const item3 = new List({
//     name: "Hit the x button to delete an item",
// })

// const defaultItems = [item1, item2, item3];

// List.insertMany(defaultItems);

export default List