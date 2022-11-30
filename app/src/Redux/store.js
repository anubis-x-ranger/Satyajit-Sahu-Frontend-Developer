import {legacy_createStore as createStore,combineReducers,applyMiddleware} from  'redux'
import thunk from "redux-thunk";
import { appreducer } from './app/appreducer';

export const store=createStore(appreducer,applyMiddleware(thunk));