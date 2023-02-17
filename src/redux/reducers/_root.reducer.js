import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';

// will have to import every reducers into the root reducer

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'

const rootReducer = combineReducers({
    // will contain our imported reducers
    // currently I have no reducer
    errors,
    user,
});

export default rootReducer;