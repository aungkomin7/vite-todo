import Swal from "sweetalert2";

import {
  checkList,
  createNewList,
  deleteList,
  editList,
  updateDoneTaskTotal,
  updateTaskTotal,
} from "./lists.js";
import { allCheckBtn, listGroup, textInput } from "./selectors.js";

export const addTask = (text) => {
  if (textInput.value.trim()) {
    listGroup.append(createNewList(text));
    textInput.value = null;
  } else {
    Swal.fire("Fill your task name");
  }
};

export const job = () => {
  updateTaskTotal();
  updateDoneTaskTotal();
};

export const addTaskBtnHandler = () => {
  addTask(textInput.value);
};

export const textInputHandler = (event) => {
  if (event.key === "Enter") {
    if (textInput.value.trim()) {
      listGroup.append(createNewList(textInput.value));
      textInput.value = null;
    } else {
      Swal.fire("Fill your task name");
    }
  }
};

export const listGroupHandler = (event) => {
  if (event.target.classList.contains("del-btn")) {
    deleteList(event.target.closest(".list").id);
  } else if (event.target.classList.contains("edit-btn")) {
    editList(event.target.closest(".list").id);
  } else if (event.target.classList.contains("check-input")) {
    checkList(event.target.closest(".list").id);
  }
};

export const deleteAllListsHandler = () => {
  !Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      const list = document.querySelectorAll(".list");
      list.forEach((el) => {
        el.remove();
      });

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Delete all tasks successfully",
      });
    }
  });
};

export const checkAllListsHandler = () => {
  const list = document.querySelectorAll(".list");
  list.forEach((el) => {
    el.querySelector(".check-input").checked = true;

    checkList(el.id);
  });
};

export const unCheckAllListsHandler = () => {
  const list = document.querySelectorAll(".list");
  list.forEach((el) => {
    el.querySelector(".check-input").checked = false;

    checkList(el.id);
  });
};
