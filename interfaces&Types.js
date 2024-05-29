var User = {
    id: 21,
    name: 'Othman',
    age: 23,
    greet: function (message) {
        console.log(message);
    },
};
User.age = 54;
User.greet('Hello There');
console.log(User);
