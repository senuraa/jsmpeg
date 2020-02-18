const socket = io("https://0ce42e99.ngrok.io");
const span = document.getElementById('data');

socket.on("showData",message =>{
    span.innerHTML = JSON.stringify(message)
})