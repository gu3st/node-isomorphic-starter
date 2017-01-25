import MessagePerformer from './MessagePerformer';

/*
Technically, by design Redux only has a single reducer. This makes sense as a design, but not as a practice, so we keep the 'Reducer'
and combine what is equivalent to many seperate reducers into one.
 */
class Reducer{
    getReducers(){
        return {
            message: MessagePerformer.reducer
        };
    }

    // We are injecting a combineReducers function for the sake of testability
    static combine(_combineReducers){
        const ReduxReducer = new Reducer();
        return _combineReducers(ReduxReducer.getReducers());
    }
}

export default Reducer;