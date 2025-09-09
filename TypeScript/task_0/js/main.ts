interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Smith",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Maria",
    lastName: "Garcia",
    age: 21,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
table.border = "1";

const headerRow: HTMLTableRowElement = table.insertRow();
const headerFirstName: HTMLTableCellElement = headerRow.insertCell();
headerFirstName.textContent = "First Name";
const headerLocation: HTMLTableCellElement = headerRow.insertCell();
headerLocation.textContent = "Location";

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const firstNameCell: HTMLTableCellElement = row.insertCell();
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = row.insertCell();
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
