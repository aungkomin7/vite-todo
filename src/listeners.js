import {
  addTaskBtnHandler,
  checkAllListsHandler,
  deleteAllListsHandler,
  listGroupHandler,
  textInputHandler,
  unCheckAllListsHandler,
} from "./handlers.js";
import {
  addTaskBtn,
  allCheckBtn,
  allDelBtn,
  allUnCheckBtn,
  listGroup,
  textInput,
} from "./selectors.js";

export const listeners = () => {
  textInput.addEventListener("keyup", textInputHandler);
  addTaskBtn.addEventListener("click", addTaskBtnHandler);
  listGroup.addEventListener("click", listGroupHandler);
  allDelBtn.addEventListener("click", deleteAllListsHandler);
  allCheckBtn.addEventListener("click", checkAllListsHandler);
  allUnCheckBtn.addEventListener("click", unCheckAllListsHandler);
  
};

export default listeners;
