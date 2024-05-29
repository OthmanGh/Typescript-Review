interface UserInterface {
  id: number;
  name: string;
  age?: number;
  greet(message: string): void;
}

const User: UserInterface = {
  id: 21,
  name: 'Othman',
  age: 23,
  greet: (message) => {
    console.log(message);
  },
};

User.age = 54;
User.greet('Hello There');

console.log(User);
