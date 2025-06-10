let myInput = document.getElementById("new-task-input");
let mybtn = document.getElementById("my-button");
let mytask = document.getElementById("task-list");

mybtn.addEventListener("click", function () {
  let taskText = myInput.value.trim();
  if (taskText === "") {
    alert('You must add a task')
  };

  let li = document.createElement("li");

  let checkbox = document.createElement("checkbox");
  checkbox.type = "checkbox";

  let span = document.createElement("span");
  span.textContent = taskText;

  

  let delbtn = document.createElement("button");
  delbtn.textContent = "Delete";

  delbtn.addEventListener("click", () => {
    mytask.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delbtn);

  mytask.appendChild(li);

  myInput.value = "";

});
