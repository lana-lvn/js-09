"use strict";

const formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');
const feedback = document.querySelector('textarea');
const userEmail = document.querySelector('input');

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);
getData();


function handleSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
};

function handleInput(e) {
    if (e.target === userEmail) {
        const currentEmail = formData.email = e.target.value;
    } else { const currentMessage = formData.message = e.target.value; }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

function getData() {
    
    const savedData = localStorage.getItem("feedback-form-state");
    const parsedData = JSON.parse(savedData);
    
    if (parsedData) {
        userEmail.value = parsedData.email;
        feedback.value = parsedData.message;
    };

};

