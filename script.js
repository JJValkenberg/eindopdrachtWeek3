//Selectors
const taskInput = document.querySelector("#new-task"); //inputveld van nieuwe to do
const taskButton = document.querySelector("#input-button");
const taskList = document.querySelector("#tasks-UL"); //UL via DOM aan variabel gekoppeld

//FUNCTIONS

//Add To Do
const addToDo = async () => {
  const input = taskInput.value;
  if (input) createToDos(input);
  await postToDo(input);
};

//Create ToDo's
const createToDos = (description, id) => {
  let newTodo = document.createElement("li");
  let newTodoText = document.createTextNode(`${description}`);
  let newDiv = document.createElement("div");
  newDiv.classList.add("task");
  newDiv.appendChild(newTodo);
  newTodo.appendChild(newTodoText);
  taskList.appendChild(newTodo);
  //complete button
  let completeButton = document.createElement("button");
  let completeImg = document.createElement("img");
  completeImg.src = "check.png";
  completeButton.classList.add = "complete-button";
  newTodo.appendChild(completeButton);
  completeButton.appendChild(completeImg);
  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.id = id;
  let deleteImg = document.createElement("img");
  deleteImg.src = "trash.png";
  deleteButton.classList.add = "delete-button";
  newDiv.appendChild(deleteButton);
  newTodo.appendChild(deleteButton);
  deleteButton.appendChild(deleteImg);
  taskInput.value = "";
};

//Get the ToDo's
const setToDo = async () => {
  const data = await getToDo();
  console.log("de data", data);
  data.forEach((item) => {
    createToDos(item.description, item.id, item.done);
  });
};
//calling function to set ToDo's
setToDo();

//Event listener for new ToDo
taskButton.addEventListener("click", addToDo);
