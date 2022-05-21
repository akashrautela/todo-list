var input = document.querySelector('#input');
var button = document.querySelector('#todoButton');
var todoList = document.querySelector('#todolist');

button.addEventListener('click', function(){
    if(input.value.length > 0){
        let newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(input.value));
        let doneButton = document.createElement('button');
        doneButton.innerText = 'done';
        doneButton.className = "btn btn-danger btn-sm";
        doneButton.onclick = toggleCheck;   
        newLi.appendChild(doneButton)
        todoList.appendChild(newLi);

        input.value = ''
    }
});

input.addEventListener('keypress', function(event){
    if(event.keyCode === 13 && input.value.length > 0){
        let newLi = document.createElement('li');
        newLi.appendChild(document.createTextNode(input.value));
        
        
        let doneButton = document.createElement('button');
        doneButton.innerText = 'done';
        doneButton.className = "btn btn-danger btn-sm";

        doneButton.onclick = toggleCheck;   
        newLi.appendChild(doneButton)
        todoList.appendChild(newLi);
        
        input.value = ''
    }
})

function toggleCheck(){
    var listItem = this.parentNode;
    listItem.classList.toggle('done');
    
}












