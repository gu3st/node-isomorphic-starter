import MessagePerformer from '../../Store/MessagePerformer';
/*
    This is our Redux Container in a testable independant state. Redux containers are a state abstraction between the central store, and manipulating the property state.
    In this way they have 2 central purposes
        1. update the state of the properties required for the React component
        2. accept actions from the React component, and trigger the reducer(s) process in which a reducer will accept the action type, and change the data state
 */
class BoxContainer{
    // Here we get our full redux state, and we return a new properties object (excluding dispatch functions) that will React will update the DOM with
    updatePropsState(_state){
        return {
            data: _state.message.data
        };
    }

    dispatch(_dispatch){
        // When we pass this into Connect, reduce calls this, in order to decorate the underlying functions we return. As part of this we get a dispatch function, which is a type of resolver for us to dispatch actions to our Reducers
        this.reduxDispatcher = _dispatch;

        // The object we return here, gets decorated and then returned to props. by our React Component. So in your Component when you do onClick={this.props.updateMessage} this will be fired
        return {
            updateMessage: this.updateMessage.bind(this)
        };
    }

    // Our reduxDispatcher takes a flexible object that will be passed through to the reducer. I assume we want to maintain some consistent patterns throughout our app (ie. using type)
    updateMessage(){
        this.reduxDispatcher({
            type: MessagePerformer.ACTION_TOGGLE
        });
    }

    static connect(_Component, _ReactReduxConnect){
        const Manager = new BoxContainer();
        const propsBind = Manager.updatePropsState.bind(Manager);
        const dispatchBind = Manager.dispatch.bind(Manager);
        return _ReactReduxConnect(propsBind, dispatchBind)(_Component);
    }
}

export default BoxContainer;