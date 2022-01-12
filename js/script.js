let toDoInput;
let errorMssg;
let addButton;
let ulList;
let newToDoElement;

let popup;
let popupInfo;
let toDoEdit;
let popupInput;
let popupAcceptButton;
let popupCancelButton;

const main = () => {
	prepareDomeElements();
	prepareDomeEvents();
};

const prepareDomeElements = () => {
	toDoInput = document.querySelector(".todo-input");
	errorMssg = document.querySelector(".error-info");
	addButton = document.querySelector(".btn-add");
	ulList = document.querySelector(".todolist ul");

	popup = document.querySelector(".popup");
	popupInfo = document.querySelector(".popup-info");
	popupInput = document.querySelector(".popup-input");
	popupAcceptButton = document.querySelector(".accept");
	popupCancelButton = document.querySelector(".cancel");
};
const prepareDomeEvents = () => {
	addButton.addEventListener("click", addNewTask);
	ulList.addEventListener("click", verifyClick);
	popupCancelButton.addEventListener("click", closePopup);
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

const verifyClick = (e) => {
	if (e.target.matches(".complete")) {
		e.target.closest("li").classList.toggle("completed");
		e.target.classList.toggle("completed");
	} else if (e.target.matches(".edit")) {
		editTask();
	} else if (e.target.matches(".delete")) {
	}
};

const editTask = () => {
	popup.style.display = "flex";
};

const closePopup = () => {
	popup.style.display = "none";
};

document.addEventListener("DOMContentLoaded", main);
