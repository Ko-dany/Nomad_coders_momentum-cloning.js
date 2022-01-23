const loginForm = document.querySelector("#name_form");
const nameForm = loginForm.querySelector("input:first-child");
const greeting = document.querySelector("#greeting");

//getElementByTagname 으로 선언하는 방법도 확인해보기



loginHanlder = (event) => {
    event.preventDefault();
    const userName = nameForm.value;
    greeting.innerText = `Hello, ${userName}`;
    greeting.style.display = "";
    loginForm.style.display = "none";

    localStorage.setItem("name",userName);
}

loginKeeper = () => {
    if(localStorage.getItem("name") === null){
        return
    } else {
        greeting.innerText = `Hello, ${localStorage.getItem("name")}`;
        greeting.style.display = "";
        loginForm.style.display = "none";
    }
}

loginKeeper();
loginForm.addEventListener("submit", loginHanlder);