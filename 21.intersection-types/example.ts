interface Employee {
    name: string;
    id: number;
}

interface Admin {
   isAdmin:boolean;
   accessLevel: number
}

type AdminEmployee = Employee & Admin;

let adminEmployee: AdminEmployee = {
    id:123,
    name: 'Alice',
    isAdmin: true,
    accessLevel: 2
}

console.log(adminEmployee.name)
console.log(adminEmployee.isAdmin)
console.log(adminEmployee.accessLevel)


