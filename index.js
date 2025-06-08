let myInput = document.getElementById('new-task-input');
let mybtn =  document.getElementById('my-button');
let mytask =  document.getElementById('task-list');

mybtn.addEventListener('click', function() {
    let taskText = myInput.value.trim();
    if (taskText === '')return

    let li = document.createElement('li');

    let checkbox = document.createElement('checkbox');
    checkbox.type = 'checkbox';

    let span = document.createElement('span');
    span.textContent = taskText;

    

})