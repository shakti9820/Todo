import { createStore} from "redux";
import { addTodo } from "./reducer/addTodo.reducer";
// import logger from "redux-logger";

export const store = createStore(addTodo);
