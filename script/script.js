const input = document.querySelector('.input-todo');
const ul = document.querySelector('.ul-todo');
const btn = document.querySelector('.btn-todo');
let li;

const createli = (inputvalue) =>{
    li = document.createElement('li');
    li.textContent = inputvalue;
    ul.appendChild(li);
    clearinput();
    createbutton();
}

const createbutton = ()=> {
    const button = document.createElement('button');
    button.textContent = 'Apagar';
    button.setAttribute('class','btn-apagar');
    button.setAttribute('title', 'Apagar Tarefa'); 
    li.appendChild(button);
}

const clearinput = ()=>{
    input.value = '';
}

btn.addEventListener('click',()=>{
    if(input.value !== ''){
        createli(input.value);
    }
});

document.addEventListener('click',(event)=>{
    const el = event.target
    if(el.classList.contains('btn-apagar')){
        el.parentElement.remove();
    }
})

input.addEventListener('keydown',(event)=>{
    if(event.keyCode === 13 && input.value !== ''){
        createli(input.value);
    }
});