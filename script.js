console.log("Hello, World!");

// Function for the EMPLOYEE INFORMATION
function submitButton(event) {
  event.preventDefault();
  let fName = document.getElementById("firstName").value;
  let lName = document.getElementById("lastName").value;
  let iD = document.getElementById("ID").value;
  let jTitle = document.getElementById("jobTitle").value;
  let aSalary = document.getElementById("annualSalary").value;
  let tableData = `
  <tr>
    <td>${fName}</td>
    <td>${lName}</td>
    <td>${iD}</td>
    <td>${jTitle}</td>
    <td class="salaryRight">${aSalary}</td> 
    <td class="buttonCenter"><button onclick="deleteButton(this)">Delete</button></td>
  </tr>`;

  // Update TABLE with INFORMATION
  document.getElementById("tableInfo").innerHTML += tableData;
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("ID").value = "";
  document.getElementById("jobTitle").value = "";
  document.getElementById("annualSalary").value = "";

  // Updates the MONTHLY SALARY
  updateMonthlySalary();
}

// Delete button that gets rid of ONE TABLE ROW
function deleteButton(delButton) {
  let dButton = delButton.parentNode.parentNode;
  dButton.parentNode.removeChild(dButton);

  // Updates the MONTHLY SALARY
  updateMonthlySalary();
}

// FUNCTION/LOOP for the MONTHLY COST
function monthlySalary() {
  let msalary = document.querySelectorAll("#tableInfo tr td.salaryRight");
  let totalMonthly = 0;
  for (let i = 0; i < msalary.length; i++) {
    totalMonthly += Number(msalary[i].textContent);
  }
  totalMonthly /= 12;
  return totalMonthly;
}

// FUNCTION/IF statement for the TOTAL MONTHLY COST exceeds $20,000
function updateMonthlySalary() {
  let totalMonthlySalary = monthlySalary();
  let footerElement = document.querySelector("footer");
  let totalSalary = document.getElementById("totalMonthly");
  totalSalary.textContent = "Total Monthly: $" + totalMonthlySalary.toFixed(2);

  if (totalMonthlySalary > 20000) {
    footerElement.classList.add("over-budget");
    totalSalary.style.color = "red";
  } else {
    footerElement.classList.remove("over-budget");
    totalSalary.style.color = "black";
  }
}

// STRETCH GOALS:
var typed = new Typed(".animation", {
  strings: [
    "<span>Salary</span> Calculator",
    "<span>Earning</span> Tracker",
    "<span>Gross</span> Pay",
    "<span>Payroll</span> Planner",
  ],
  typeSpeed: 40,
  backSpeed: 60,
  loop: true,
  html: true,
  onStringTyped: function (index, self) {
    var currentText = self.strings[index];
    self.el.innerHTML = currentText.replace(
      "<span>",
      '<span class="highlight">'
    );
  },
});
