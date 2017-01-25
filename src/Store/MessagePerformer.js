import MessageModel from '../Models/MessageModel';

/*
Reducer(s) are a tricky part of redux. In principle they are simple, in practice they can feel very awkward.
This performer pattern is what I came up with to maintain SRP as best as possible and keep things testable, flexible and hopefully readable.
 */
class MessagePerformer{
    static get ACTION_TOGGLE(){
        return 'MessagePerformer.toggleText';
    }

    static checkAction(_actionType){
        switch (_actionType){
            case MessagePerformer.ACTION_TOGGLE: return MessagePerformer.ACTION_TOGGLE.split(".")[1];
            default: return false;
        }
    }

    static toggleText(_MessageModel, _action){
        // In this case, our action does not have any useful information but we're doing manual work here because it's stupid
        _MessageModel.setData(
            (_MessageModel.getData() === 'Hello World' ?
            'Goodbye World' :
            'Hello World')
        );
    }

    static reducer(_state, _action = {}){
        // Get an action (a static method on our performer if it exists)
        const action = MessagePerformer.checkAction(_action.type);

        // If there was no action match AND there is a state, we just return the state (do nothing)
        if (!action && _state){
            return _state;
        }

        // If there either was an action, or state was undefined create our model and expand our state (even if empty into it)
        const Message = new MessageModel();
        Message.expand(_state);

        // Then if there was an action on our performer, pass our Model into it, with the action and let it update the model properly
        if (MessagePerformer[action]){
            MessagePerformer[action](Message, _action);
        }

        // Flatten the model to get the correct state
        return Message.flatten();
    }
}

export default MessagePerformer;