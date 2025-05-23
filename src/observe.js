import { job } from "./handlers";
import { updateDoneTaskTotal, updateTaskTotal } from "./lists";
import { listGroup } from "./selectors";

const observer = () => {

  const job = () => {
    updateTaskTotal();
    updateDoneTaskTotal();
  };

  const observerOptions = {
    attributes: true,
    childList: true,
    subtree: true,
  };

  const listGroupObserver = new MutationObserver(job);
  listGroupObserver.observe(listGroup, observerOptions);
};

export default observer;
