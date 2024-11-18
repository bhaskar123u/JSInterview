const employees = [
  {
    fname: "Bhaskar",
    lname: "Sharan",
    address: [
      {
        city: "Patna",
        pinCode: 801503,
        default: true
      },
      {
        city: "Gurgaon",
        pinCode: 122017,
        default: false
      },
      {
        city: "Hyderabad",
        pinCode: 500001,
        default: false
      }
    ]
  },
  {
    fname: "Ammy",
    lname: "Jackson",
    address: [
      {
        city: "Mumbai",
        pinCode: 400001,
        default: false
      },
      {
        city: "Delhi",
        pinCode: 110001,
        default: true
      }
    ]
  },
  {
    fname: "Marteen",
    lname: "Kumar",
    address: [
      {
        city: "Chennai",
        pinCode: 600001,
        default: true
      },
      {
        city: "Patna",
        pinCode: 801503,
        default: false
      },
    ]
  }
];

// get list of employees with default address
const employeesWithDefaultAddresses = employees.map(employee => {
  const defaultAddress = employee.address.find(address => address.default);
  return {
    fname: employee.fname,
    lname: employee.lname,
    defaultCity: defaultAddress ? defaultAddress.city : null,
    defaultPinCode: defaultAddress ? defaultAddress.pinCode : null
  };
});
console.log("Employee with default address");
console.log(employeesWithDefaultAddresses)


// get all employees whose default city is Patna
const usersWithPatna = employees.filter(employee =>
  employee.address.some(address => address.city === "Patna" && address.default)
);
console.log(usersWithPatna);

// get all employees with more than 1 address
const employeesWithMultipleAddresses = employees.filter(
  employee => employee.address.length > 1
);
console.log(employeesWithMultipleAddresses);

// list of city where all employee have a address
const citiesWithAddress =
  employees.flatMap(employee =>
    employee.address.map(address => address.city)
  );
console.log(citiesWithAddress);

// list of unique city where all employee have a address
const citiesWithDefaultAddress =
  new Set(employees.flatMap(employee =>
    employee.address.map(address => address.city)
  ));
console.log(citiesWithDefaultAddress);
// wrap everything inside Array.from to convert to array

// get all pinCodes
const pinCodesWithDefaultAddress = employees.flatMap(employee =>
  employee.address.filter(address => address.default).map(address => address.pinCode)
);
console.log("All pinCodes " + pinCodesWithDefaultAddress);

// get total unique pinCodes
const uniquePinCodes = new Set(
  employees.flatMap(employee =>
    employee.address.filter(address => address.default).map(address => address.pinCode)
  )
);
console.log("Total unique pinCodes " + uniquePinCodes.size);


// employee with highest number of address
const employeeWithMostAddresses = employees.reduce((max, employee) =>
  (employee.address.length > max.address.length ? employee : max)
);
console.log(employeeWithMostAddresses);