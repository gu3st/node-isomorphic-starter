import BoxContainer from '../../../src/Components/Box/BoxContainer';
import connect from '../../../__mocks__/connect';
const is = require('arc-lib').is;

describe('BoxContainer',()=>{
    var TestContainer = new BoxContainer;
    it('should be an instance of BoxContainer',()=>{
        TestContainer = new BoxContainer;
        expect(TestContainer).toBeInstanceOf(BoxContainer);
    });
    
    it('should return a new object',()=>{
        var fauxState = {
            message:{
                data:"Hello World"
            }
        };
        expect(TestContainer.updatePropsState(fauxState)).toEqual({
            data:"Hello World"
        });
    });
    
    it('should accept a dispatch function and return an object of dispatch methods',()=>{
        var dispatchMethods = TestContainer.dispatch(()=>{});
        expect((dispatchMethods.updateMessage ? true : false)).toBe(true);
    });

    it('should call the dispatch function, when an update method is called',()=>{
        var dispatch = jest.fn();
        TestContainer = new BoxContainer;
        TestContainer.dispatch(dispatch);
        TestContainer.updateMessage();
        expect(dispatch).toHaveBeenCalled();
    });

    it('should accept a Component object, and a connect decorator which returns a decorated component',()=>{
        var testComponent = {};
        expect(BoxContainer.connect(testComponent,connect)).toBe(testComponent);
    });
    
});