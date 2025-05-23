import { doneTaskTotal, listTemplate } from "./selectors.js";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

export const tasks = ["apple", "orange", "mango"];

export const updateTaskTotal = () => {
  const list = document.querySelectorAll(".list");
  taskTotal.innerText = list.length;
};

export const updateDoneTaskTotal = () => {
  const list = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = list.length;
};

export const createNewList = (currenttask) => {
  const list = listTemplate.content.cloneNode(true);
  list.querySelector(".list").id = "list" + uuidv4();
  list.querySelector(".task-info").innerText = currenttask;
  return list;
};

export const deleteList = (listId) => {
  const currentlist = document.querySelector(`#${listId}`);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      currentlist.classList.add("animate__animated", "animate__zoomOut");
      currentlist.addEventListener("animationend", () => {
        currentlist.remove();
      });
    }
  });
};

export const editList = (listId) => {
  const currentlist = document.querySelector(`#${listId}`);
  const taskInfo = currentlist.querySelector(".task-info");
  const editBtn = currentlist.querySelector(".edit-btn");
  const delBtn = currentlist.querySelector(".del-btn");

  const checkInput = currentlist.querySelector(".check-input");

  taskInfo.classList.add("hidden");
  const newTaskInput = document.createElement("input");
  newTaskInput.classList.add(
    "border-b",
    "px-1",
    "focus-visible:outline-none",
    "w-[230px]"
  );
  taskInfo.after(newTaskInput);
  newTaskInput.value = taskInfo.innerText;
  newTaskInput.focus();
  editBtn.setAttribute("disabled", true);
  delBtn.classList.add("opacity-50");
  checkInput.classList.add("opacity-50");

  const newTaskInputHandler = () => {
    newTaskInput.classList.add("hidden");
    taskInfo.innerText = newTaskInput.value;
    taskInfo.classList.remove("hidden");
    editBtn.removeAttribute("disabled");
    delBtn.classList.remove("opacity-50");
    checkInput.classList.remove("opacity-50");
  };

  newTaskInput.addEventListener("blur", newTaskInputHandler);
};

export const checkList = (listId) => {
  const currentlist = document.querySelector(`#${listId}`);
  const taskInfo = currentlist.querySelector(".task-info");
  const editBtn = currentlist.querySelector(".edit-btn");
  const checkInput = currentlist.querySelector(".check-input");
  const childList = currentlist.querySelector(".child-list");

  currentlist.classList.toggle("scale-95");
  currentlist.classList.toggle("duration-200");
  childList.classList.toggle("border-stone-500");
  taskInfo.classList.toggle("line-through");
  taskInfo.classList.toggle("opacity-50");

  if (checkInput.checked) {
    editBtn.setAttribute("disabled", true);
    editBtn.classList.add("opacity-50");
  } else {
    editBtn.removeAttribute("disabled");
    editBtn.classList.remove("opacity-50");
  }
};
