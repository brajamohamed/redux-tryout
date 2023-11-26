import { createStore } from "redux";
import allReducers from "./Reducers/reducer";

const store = createStore(allReducers);

export default store;
