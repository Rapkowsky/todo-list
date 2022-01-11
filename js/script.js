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
		ulList.append(newToDoElement);
		toDoInput.value = "";
		errorMssg.textContent = "";
	} else {
		errorMssg.textContent = "Wpisz treść zadania!";
	}
};

document.addEventListener("DOMContentLoaded", main);
