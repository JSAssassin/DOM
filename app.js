//const myHeading = document.getElementById('myHeading'); OR
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const mytextInput = document.getElementById('myTextInput');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listUl = listDiv.querySelector('ul');

// const listItems = document.getElementsByTagName('li');

// for (let i = 0; i < listItems.length; i++) {
//  listItems[i].addEventListener('mouseover', () => {
//         listItems[i].textContent = listItems[i].textContent.toUpperCase();
//     });
//   listItems[i].addEventListener('mouseout', () => {
//         listItems[i].textContent = listItems[i].textContent.toLowerCase();
//     });
// } Method I - This does not let the items added later to captilaize on mouse hover so we use the method shown below

//Method II
// listDiv.addEventListener('mouseover', (event) => {
//     if(event.target.tagName == 'LI'){
//     event.target.textContent = event.target.textContent.toUpperCase();
//     }
// });
// listDiv.addEventListener('mouseout', (event) => {
//     if(event.target.tagName == 'LI'){
//     event.target.textContent = event.target.textContent.toLowerCase();
//     }
// });

listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        if (event.target.className == 'remove') {
            console.log('Hello');
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        } else if (event.target.className == 'up') {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }
        } else if (event.target.className == 'down') {
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if (nextLi) {
                ul.insertBefore(nextLi,li);
            }

        }
    }
    });



toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = 'Hide List';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show List';
        listDiv.style.display = 'none';
    }
});

myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
    myTextInput.value = '';
});

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i++) {
    myList[i].style.color = 'purple';
}

// const errorNotPurple = document.getElementsByClassName('error-not-purple');OR
const errorNotPurple = document.querySelectorAll('.error-not-purple');

for (let i = 0; i < errorNotPurple.length; i++) {
    errorNotPurple[i].style.color = 'red';
}

const even = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < even.length; i++) {
    even[i].style.backgroundColor = 'lightgrey';
}

const descriptionInput = document.querySelector('input#description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

descriptionButton.addEventListener('click', () => {
    // p.textContent = input.value + ':'; OR
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = "";
});

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
    // the empty string means it will auto clear the text in the input 
});

removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});

descriptionP.title = "List Description";
