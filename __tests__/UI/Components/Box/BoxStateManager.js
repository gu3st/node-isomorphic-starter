import BoxStateManager from '../../../../src/UI/Components/Box/BoxStateManager';
import connect from '../../../../__mocks__/connect';

describe('BoxStateManager',()=>{
    var TestStateManager = new BoxStateManager;
    it('should be an instance of BoxStateManager',()=>{
        TestStateManager = new BoxStateManager;
        expect(TestStateManager).toBeInstanceOf(BoxStateManager);
    });
    
    it('should return a new object',()=>{
        var fauxState = {
            message:{
                data:"Hello World"
            }
        };
        expect(TestStateManager.updatePropsState(fauxState)).toEqual({
            data:"Hello World"
        });
    });
    
    it('should accept a dispatch function and return an object of dispatch methods',()=>{
        expect(is(TestStateManager.dispatch(()=>{}),true)).toEqual('Object');
    });

    it('should call the dispatch function, when an update method is called',()=>{
        var dispatch = jest.fn();
        TestStateManager = new BoxStateManager;
        TestStateManager.dispatch(dispatch);
        TestStateManager.updateMessage();
        expect(dispatch).toHaveBeenCalled();
    });

    it('should accept a Component object, and a connect decorator which returns a decorated component',()=>{
        var testComponent = {};
        expect(BoxStateManager.connect(testComponent,connect)).toBe(testComponent);
    });
    
});