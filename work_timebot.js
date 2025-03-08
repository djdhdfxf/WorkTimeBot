document.addEventListener("DOMContentLoaded", function () {
    const mainScreen = document.getElementById("main-screen");
    const employeeCard = document.getElementById("employee-card");
    const employeeList = document.getElementById("employee-list");
    const openCardButton = document.getElementById("open-card");
    const backButton = document.getElementById("back");
    const employeeName = document.getElementById("employee-name");

    openCardButton.addEventListener("click", function () {
        const selectedEmployee = employeeList.value;

        if (selectedEmployee) {
            // Меняем имя сотрудника в карточке
            const employeeNames = {
                dmitry: "Дмитрий Шалдонский",
                artem: "Иванов Артём",
                arina: "Арина Веснина"
            };
            employeeName.textContent = employeeNames[selectedEmployee] || "Сотрудник";

            // Переключаем экраны
            mainScreen.style.display = "none";
            employeeCard.style.display = "block";
        } else {
            alert("Пожалуйста, выберите сотрудника!");
        }
    });

    backButton.addEventListener("click", function () {
        // Вернуться назад к списку сотрудников
        mainScreen.style.display = "block";
        employeeCard.style.display = "none";
    });
});