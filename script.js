document.getElementById("view-details").addEventListener("click", function() {  
    if (currentEmployee) {  
        const initData = window.Telegram.WebApp.initData;  
        fetch('http://localhost:5000/get_employee_details', {  
            method: 'POST',  
            headers: { 'Content-Type': 'application/json' },  
            body: JSON.stringify({ employee_id: currentEmployee, initData: initData })  
        })  
        .then(response => response.json())  
        .then(data => {  
            document.getElementById("employee-details").classList.remove("hidden");  
            document.getElementById("details-name").textContent = data.name;  
            document.getElementById("details-shift-start").textContent = `Время прихода: ${data.start_time || '-'}`;  
            document.getElementById("details-shift-end").textContent = `Время ухода: ${data.end_time || '-'}`;  
            if (data.photo) {  
                document.getElementById("details-photo").src = data.photo;  
            } else {  
                document.getElementById("details-photo").src = "placeholder.jpg";  
            }  
        })  
            startButton.setAttribute("disabled", "true");  
endButton.setAttribute("disabled", "true");

        mediaStream.getTracks().forEach(track => track.stop());  
videoElement.srcObject = null;  
        
        .catch(error => {  
            console.error("Error fetching employee details:", error);  
            alert("Ошибка при загрузке деталей сотрудника.");  
        });  
    } else {  
        alert("No employee selected!");  
    }  
});  
