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

body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
}

.container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

button {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}

img {
    max-width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
}




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
