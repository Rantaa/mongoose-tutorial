const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please check your data entry. No name specified.']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    name: 'Peach',
    rating: 7,
    review: 'Pretty solid as a fruit.'
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const pear = new Fruit({
    name: 'Pear',
    rating: 9,
    review: 'Lovely'
});

// pear.save();

// const person = new Person({
//     name: 'Amy',
//     age: 12,
//     favouriteFruit: pineapple
// });

// person.save();


// const person = new Person({
//     name: 'John',
//     age: 37,
// });

// person.save();

// const kiwi = new Fruit({
//     name: 'Kiwi',
//     rating: 10,
//     review: 'The best fruit!'
// });

// const orange = new Fruit({
//     name: 'Orange',
//     rating: 4,
//     review: 'Too sour for me'
// });

// const banana = new Fruit({
//     name: 'Banana',
//     rating: 3,
//     review: 'Weird texture'
// })

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Successfully saved all the fruits to fruitsDB');
//     }
// });

// Person.updateOne({_id: '63f0e4f0cf4f31471ed6d944'}, {favouriteFruit: pear}, function(err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Successfully updated the document.')
//     }
// })

// Fruit.deleteOne({_id: '63f0e66a069df8654fcb02b8'}, function(err) {
//     if (err) {
//         console.log(err) 
//     } else {
//         console.log('Successfully deleted all the Johns');
//     }
// });

Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        
        mongoose.connection.close();

        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        })
    };
})
