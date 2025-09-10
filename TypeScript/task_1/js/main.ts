interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Brown",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "Chicago",
};

const teacher2: Teacher = {
  firstName: "Bob",
  lastName: "Johnson",
  fullTimeEmployee: false,
  location: "Miami",
  contract: true,
};

console.log(teacher1);
console.log(teacher2);
