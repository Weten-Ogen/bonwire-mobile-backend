// Elements
const btn = document.querySelector('#btn'),

form = document.querySelector('form'),
box = document.createElement('checkbox');
let ul = document.querySelector('.tasklist');

 

// listenin for page load event
document.addEventListener('DOMContentLoaded',() => {
    form.onsubmit = () =>{
        const txt = document.querySelector('#task').value;
        const li = document.createElement('li');
        
         li.append(txt);
        ul.append(`${box}${li}`);
        console.log(ul)
        localStorage.setItem('li', li);
        return false;
    };
});
