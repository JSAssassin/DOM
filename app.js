//const myHeading = document.getElementById('myHeading'); OR
const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const mytextInput = document.getElementById('myTextInput');

myButton.addEventListener('click',()=>{
    myHeading.style.color = myTextInput.value;
});

const myList = document.getElementsByTagName('li');

for(let i=0; i<myList.length; i++){
    myList[i].style.color = 'purple';
}

// const errorNotPurple = document.getElementsByClassName('error-not-purple');OR
const errorNotPurple = document.querySelectorAll('.error-not-purple');

for(let i=0; i<errorNotPurple.length; i++){
    errorNotPurple[i].style.color = 'red';
}

const even = document.querySelectorAll('li:nth-child(odd)');

for(let i=0; i<even.length; i++){
    even[i].style.backgroundColor = 'lightgrey';
}

const input = document.querySelector('input#description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

button.addEventListener('click', () => {
    p.textContent = input.value + ':';
});