const clock = document.querySelector("#clock h2");

clockHandler = ()=>{
    const today = new Date();
    const hour = (String(today.getHours())).padStart(2,"0");
    const min = (String(today.getMinutes())).padStart(2,"0");
    const sec = (String(today.getSeconds())).padStart(2,"0");

    clock.innerText = `${hour}:${min}:${sec}`;
}

clockHandler();
setInterval(clockHandler, 1000);