let toDoInput;
let errorMssg;
let addButton;
let ulList;
let newToDoElement;

const main = () => {
	prepareDomeElements();
	prepareDomeEvents();
};

const prepareDomeElements = () => {
	toDoInput = document.querySelector(".todo-input");
	errorMssg = document.querySelector(".error-info");
	addButton = document.querySelector(".btn-add");
	ulList = document.querySelector(".todolist ul");
};
const prepareDomeEvents = () => {
	addButton.addEventListener("click", addNewTask);
};

const addNewTask = () => {
	if (toDoInput.value !== "") {
		newToDoElement = document.createElement("li");
		newToDoElement.textContent = toDoInput.value;
		createToolsPanel();

		ulList.append(newToDoElement);

		toDoInput.value = "";
		errorMssg.textContent = "";
	} else {
		errorMssg.textContent = "Wpisz treść zadania!";
	}
};

const createToolsPanel = () => {
	const toolsContainer = document.createElement("div");
	toolsContainer.classList.add("tools");
	newToDoElement.append(toolsContainer);

	const acceptButton = document.createElement("button");
	acceptButton.classList.add("complete");
	acceptButton.innerHTML = '<i class="fas fa-check"></i>';

	const editButton = document.createElement("button");
	editButton.classList.add("edit");
	editButton.textContent = "EDIT";

	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	deleteButton.innerHTML = '<i class="fas fa-times"></i>';

	toolsContainer.append(acceptButton, editButton, deleteButton);
};

document.addEventListener("DOMContentLoaded", main);
