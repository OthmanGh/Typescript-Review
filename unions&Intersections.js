// type IDFieldType = string | number;
var signContract = function (employee) {
    console.log('Contract signed by ' + employee.name + ' with email: ' + employee.email);
};
signContract({
    name: 'othman',
    creditScore: 200,
    id: 21,
    email: 'Othman@gmail.com',
});
