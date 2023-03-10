import throttle from 'lodash.throttle';
import Notiflix from 'notiflix';

const form = document.querySelector(".feedback-form")
// console.log(form)

form.addEventListener("input", throttle(onInput,500))
form.addEventListener("submit", onSubmit)
const LOCALSTORAGE_KEY = "feedback-form-state";
// const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
let formData = {}

onUpdate();

function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onUpdate() {
    const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (savedData) {
        formData = savedData
        // console.log(savedData)
        if (savedData.email) {
            form.elements.email.value = savedData.email;
        }
        if (savedData.message) {
            form.elements.message.value = savedData.message;
        }
    }
};

function onSubmit(evt) {
    evt.preventDefault()
    // const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (form.elements.email.value === "" || form.elements.message.value === "") {
        return Notiflix.Notify.info("Please, fill in all the fields!");
      };
    console.log(formData)
    localStorage.removeItem(LOCALSTORAGE_KEY)
    form.reset()
    formData = {}
}

