const elements = {
contact: document.getElementById('contact'),
test: document.getElementById('test'),
story: document.getElementById('story'),
about: document.getElementById('about'),
home: document.getElementById('home'),
nav: document.getElementById('nav'),
firstName: document.getElementById('firstName'),
lastName: document.getElementById('lastName'),
email: document.getElementById('email'),
phone: document.getElementById('phone'),
firstNameSmall: document.getElementById('firstNameSmall'),
lastNameSmall: document.getElementById('lastNameSmall'),
emailSmall: document.getElementById('emailSmall'),
phoneSmall: document.getElementById('phoneSmall')
};

function addBorder(element) {
for (let key in elements) {
    if (elements.hasOwnProperty(key)) {
    elements[key].classList.remove('border');
    }
}
element.classList.add('border');
}

function validateInput(input, regex, smallElement) {
smallElement.style.opacity = regex.test(input) ? 0 : 1;
}

function validateLastName() {
validateInput(elements.lastName.value, /^[a-zA-Z\s]+$/, elements.lastNameSmall);
}

function validateFirstName() {
validateInput(elements.firstName.value, /^[a-zA-Z\s]+$/, elements.firstNameSmall);
}

function validateEmail() {
validateInput(elements.email.value, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, elements.emailSmall);
}

function validatePhoneNumber() {
validateInput(elements.phone.value, /^\d{10}$/, elements.phoneSmall);
}

function handleScroll() {
elements.nav.style.opacity = window.scrollY === 0 ? 1 : 0;
}

function scrollToTop() {
window.scrollTo(0, 0);
}

function addEventListeners() {
elements.contact.addEventListener('click', (event) => {
    addBorder(event.target);
});
elements.test.addEventListener('click', (event) => {
    addBorder(event.target);
});
elements.story.addEventListener('click', (event) => {
    addBorder(event.target);
});
elements.about.addEventListener('click', (event) => {
    addBorder(event.target);
});
elements.home.addEventListener('click', (event) => {
    addBorder(event.target);
});

elements.nav.addEventListener('mouseover', () => {
    elements.nav.style.opacity = 1;
});

elements.nav.addEventListener('mouseout', () => {
    elements.nav.style.opacity = window.scrollY === 0 ? 1 : 0;
});

elements.home.addEventListener('click', scrollToTop);

elements.firstName.addEventListener('input', validateFirstName);
elements.lastName.addEventListener('input', validateLastName);
elements.email.addEventListener('input', validateEmail);
elements.phone.addEventListener('input', validatePhoneNumber);

window.addEventListener('scroll', handleScroll);
}

addEventListeners();  

let submitting = document.getElementById("submitted")
let form = document.getElementById("form")
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    submitting.style.right = '1vw'
    setTimeout(() => {
        submitting.style.right = '-25vw'
    }, 5000);
})