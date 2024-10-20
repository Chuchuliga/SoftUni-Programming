class Company {
  departments = {};

  addEmployee(name, salary, position, department) {
    if (!name || !salary || !position || !department) {
      throw new Error("Invalid input!");
    }

    if (salary < 0) {
      throw new Error("Invalid input!");
    }

    if (!this.departments[department]) {
      this.departments[department] = [];
    }

    this.departments[department].push({ name, salary, position });

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    const bestDepartment = ["", 0];

    for (const [department, employees] of Object.entries(this.departments)) {
      let avg = 0;
      let sum = 0;

      for (const employee of employees) {
        sum += employee.salary;
        avg = sum / employees.length;

        if (bestDepartment[1] < avg) {
          bestDepartment[0] = department;
          bestDepartment[1] = avg;
        }
      }
    }

    return (
      `Best Department is: ${bestDepartment[0]}\n` +
      `Average salary: ${bestDepartment[1].toFixed(2)}\n` +
      this.departments[bestDepartment[0]]
        .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
        .map((e) => `${e.name} ${e.salary} ${e.position}`)
        .join("\n")
    );
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer
