document.getElementById("open-card").addEventListener("click", function() {
    let employeeList = document.getElementById("employee-list");
    let selectedEmployee = employeeList.options[employeeList.selectedIndex].text;

    if (selectedEmployee !== "Сотрудники") {
        document.getElementById("employee-card").classList.remove("hidden");
        document.getElementById("employee-name").textContent = selectedEmployee;
    } else {
        alert("Пожалуйста, выберите сотрудника!");
    }
});

document.getElementById("start-shift").addEventListener("click", function() {
    alert("Выход на смену зафиксирован!");
});

document.getElementById("end-shift").addEventListener("click", function() {
    alert("Смена завершена!");
});
