import { addTask } from "./handlers";
import { tasks } from "./lists";
// import { listGroup } from "./selectors";

const initialRender = () => {
  tasks.forEach((el) => {
    addTask(el);
  });
};
export default initialRender;