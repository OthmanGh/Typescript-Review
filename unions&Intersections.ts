// type IDFieldType = string | number;

// const printID = (id: IDFieldType) => {
//   console.log(id);
// };

interface BusinessPartner {
  name: string;
  creditScore: number;
}

interface UserIdentity {
  id: number;
  email: string;
}

type Employee = BusinessPartner & UserIdentity;

const signContract = (employee: Employee): void => {
  console.log('Contract signed by ' + employee.name + ' with email: ' + employee.email);
};

signContract({
  name: 'othman',
  creditScore: 200,
  id: 21,
  email: 'Othman@gmail.com',
});
