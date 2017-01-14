const is = require('arc-lib').is;

class MessageModel{
    constructor(){
        this.data = "Hello World";
    }

    getData(){
        return this.data;
    }

    setData(_data){
        this.data = _data;
    }

    //Model Hydration
    flatten(){
        return {
            data:this.data
        };
    }

    expand(_messageObj){
        if(is(_messageObj) !== 'object'){
            return;
        }
        this.data = _messageObj.data;
    }
}

module.exports = MessageModel;