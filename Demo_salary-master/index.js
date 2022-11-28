$(".btn").click(function () {
  var salary = $("#salaryInput").val();
  var tax;
  if (salary <= 400000) tax = (salary * 1) / 100;
  else if (salary > 400000 && salary <= 1000000) {
    tax = (400000 * 1) / 100;
    tax = tax + ((salary - 400000) * 15) / 100;
  } else {
    tax = (400000 * 1) / 100;
    tax = tax + (600000 * 15) / 100;
    tax = tax + ((salary - 1000000) * 25) / 100;
  }
  console.log(tax);
  alert("Your payable TAX is : " + tax + "Rs");
});
