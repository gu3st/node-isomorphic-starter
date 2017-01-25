import MessagePerformer from '../../src/Store/MessagePerformer';
import MessageModel from '../../src/Models/MessageModel';

describe('Message Performer',()=>{
    it('should return MessagePerformer.toggleText',()=>{
        expect(MessagePerformer.ACTION_TOGGLE).toBe('MessagePerformer.toggleText');
    });

    it('should accept a string, check it against available actions, and return a function name if matched',()=>{
        expect(MessagePerformer.checkAction(MessagePerformer.ACTION_TOGGLE)).toBe('toggleText');
    });

    it('should accept a value, and if it does not match any available actions return false',()=>{
        expect(MessagePerformer.checkAction('HI')).toEqual(false);
    });

    it('should accept a MessageModel and setData to Goodbye World if Hello World is currently set',()=>{
        var TestModel = new MessageModel;
        TestModel.setData('Hello World');
        MessagePerformer.toggleText(TestModel,{});
        expect(TestModel.getData()).toBe('Goodbye World');
    });

    it('should accept MessageModel and setData to Hello World if data does not currently equal Hello World',()=>{
        var TestModel = new MessageModel;
        TestModel.setData('Goodbye World');
        MessagePerformer.toggleText(TestModel,{});
        expect(TestModel.getData()).toBe('Hello World');
    });

    it('should accept a state object and an action object. If an action is not matched, and state is set it should return the state passed in',()=>{
        var state = {
            data:'Test'
        }
        expect(MessagePerformer.reducer(state)).toBe(state);
    });

    it('should accept a state object and an action object, if state is undefined and action is undefined it should return a default state',()=>{
        var TestModel = new MessageModel;
        expect(MessagePerformer.reducer()).toEqual(TestModel.flatten());
    });

    it('should accept a state object, expand it into the model, and perform an action on the model before returning a new state object',()=>{
        expect(MessagePerformer.reducer({data:'Hello World'},{type:'MessagePerformer.toggleText'})).toEqual({
            data:'Goodbye World'
        });
    });
});