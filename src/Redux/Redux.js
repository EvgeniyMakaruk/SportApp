import { applyMiddleware, combineReducers, createStore } from "redux";
import { wallRed } from "./Reducers/WallRed";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { TodoRed } from "./Reducers/TodoRed";
import { SeartchRed } from "./Reducers/SeartchRED";

export const rootReducer = combineReducers({
   wallRed,
   TodoRed,
   SeartchRed,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
window.store = store