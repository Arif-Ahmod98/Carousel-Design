"use strict";

const userInfo = [
    {
        name: "Peter Jones",
        occupation: "Intern",
        img: "images/22.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae inventore nisi culpa eos tenetur optio maiores voluptatibus!",
    },
    {
        name: "Sabbir Ahmed",
        occupation: "SEO Expert",
        img: "images/sabbir.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis error omnis eveniet a nulla eligendi. Digital Marketer"
    },
    {
        name: "Arif Ahmod",
        occupation: "Front End Developer",
        img: "images/airfahmod.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita quibusdam aspernatur animi sint cupiditate?. "
    },

    {
        name: "Mr. Janson",
        occupation: "Digital Marketer",
        img: "images/11.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, fugiat expedita ab aliquam perspiciatis hic repudiandae. Cupiditate, nobis? "
    }

];

const profile = document.getElementById("profile");
const name = document.getElementById("name");
const occupation = document.getElementById("occupation");
const identity = document.getElementById("identity");
const random = document.querySelector(".random-btn");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");
let currentItem = 0;

const showPerson = () => {
    let item = userInfo[currentItem];
    profile.src = item.img;
    name.textContent = item.name;
    occupation.textContent = item.occupation;
    identity.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', () => {

    showPerson();

});


// for next profile

rightBtn.addEventListener('click', () => {

    currentItem++;

    if (currentItem > userInfo.length - 1) {

        currentItem = 0;

    }
    else {

        showPerson();

    }

});


// for preview profile

leftBtn.addEventListener('click', () => {

    currentItem--;

    if (currentItem < 0) {

        currentItem = userInfo.length - 1;

    }
    else {

        showPerson();

    }

});


// for Random profile

random.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * userInfo.length);
    showPerson();
})