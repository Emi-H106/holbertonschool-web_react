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


interface Directors extends Teacher {
  numberOfReports: number;
};

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "San Francisco",
  numberOfReports: 10,
};

console.log(teacher1);
console.log(teacher2);
console.log(director1);
