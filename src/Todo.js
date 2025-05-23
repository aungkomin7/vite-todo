import initialRender from "./initialrender";
import listeners from "./listeners";
import observer from "./observe";
class Todo {
  init() {
    observer();
    // initialRender();
    listeners();
  }
}

export default Todo;
