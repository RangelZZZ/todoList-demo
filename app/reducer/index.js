import { combineReducers } from 'redux'
import todos from './todos'
import filterTodos from './filter-todo'

const rootReducer = combineReducers({
    todos,
    filterTodos
});

export default rootReducer;