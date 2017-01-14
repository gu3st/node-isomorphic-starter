import Reducer from '../../src/Store/Reducer';
import MessagePerformer from '../../src/Store/MessagePerformer';
import combineReducers from '../../__mocks__/combineReducers';

describe('Reducer',()=>{
    var TestReducer = new Reducer;
    it('should return an object with MessagePerformer bound to message',()=>{
        expect(TestReducer.getReducers()).toEqual({
            message:MessagePerformer.reducer
        });
    });

    it('should accept combineReducer function and call it which returns the reducer',()=>{
        expect(Reducer.combine(combineReducers)).toEqual({
            message:MessagePerformer.reducer
        });
    });
});