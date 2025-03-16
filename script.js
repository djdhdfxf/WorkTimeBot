document.getElementById("start-shift").addEventListener("click", function() {  
    if (currentEmployee) {  
        captureAndSendPhoto('start_shift');  
    } else {  
        alert("No employee selected!");  
    }  
});  
document.getElementById("end-shift").addEventListener("click", function() {  
    if (currentEmployee) {  
        captureAndSendPhoto('end_shift');  
    } else {  
        alert("No employee selected!");  
    }  
});

function captureAndSendPhoto(action) {  
    const videoElement = document.getElementById('camera-feed');  
    const canvasElement = document.getElementById('photo-canvas');  
    const startButton = document.getElementById('start-shift');  
    const endButton = document.getElementById('end-shift');  

    // Отключить кнопки  
    startButton.setAttribute("disabled", "true");  
    endButton.setAttribute("disabled", "true");  

    // Запрос доступа к камере  
    navigator.mediaDevices.getUserMedia({ video: true })  
        .then(function(mediaStream) {  
            videoElement.srcObject = mediaStream;  
            videoElement.play();  

            // Ждать 3 секунды  
            setTimeout(function() {  
                // Захватить фото  
                canvasElement.width = videoElement.width;  
                canvasElement.height = videoElement.height;  
                const context = canvasElement.getContext('2d');  
                context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);  

                // Конвертировать canvas в blob  
                canvasElement.toBlob(function(blob) {  
                    const form = new FormData();  
                    form.append('employee_id', currentEmployee);  
                    form.append('initData', window.Telegram.WebApp.initData);  
                    form.append('photo', blob, 'photo.jpg');  

                    // Определить правильный endpoint в зависимости от действия  
                    let endpoint;  
                    if (action === 'start_shift') {  
                        endpoint = 'http://localhost:5000/start_shift';  
                    } else if (action === 'end_shift') {  
                        endpoint = 'http://localhost:5000/end_shift';  
                    } else {  
                        console.error("Invalid action");  
                        return;  
                    }  

                    fetch(endpoint, {  
                        method: 'POST',  
                        body: form  
                    })  
                    .then(response => response.json())  
                    .then(data => {  
                        alert(data.message);  
                        // Включить кнопки обратно  
                        startButton.removeAttribute("disabled");  
                        endButton.removeAttribute("disabled");  
                    })  
                    .catch(error => {  
                        alert("Error: " + error.message);  
                        // Включить кнопки обратно  
                        startButton.removeAttribute("disabled");  
                        endButton.removeAttribute("disabled");  
                    });  
                }, 'image/jpeg');  

                // Остановить поток камеры  
                mediaStream.getTracks().forEach(track => track.stop());  
                videoElement.srcObject = null;  
            }, 3000);  
        })  
        .catch(function(error) {  
            alert("Camera access denied or error: " + error.message);  
            // Включить кнопки обратно  
            startButton.removeAttribute("disabled");  
            endButton.removeAttribute("disabled");  
        });  
}  
