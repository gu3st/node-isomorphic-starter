import MessageModel from '../../src/Models/MessageModel';

describe('Message Model',()=>{
    var TestModel = new MessageModel;
    it('should be an instanceOf MessageModel',()=>{
       expect(TestModel).toBeInstanceOf(MessageModel)
    });

    it('should set/get data on the data property',()=>{
        TestModel.setData('Test');
        expect(TestModel.getData()).toBe('Test');
    });

    it('should hydrate the data model from an object',()=>{
        TestModel = new MessageModel;
        TestModel.expand({data:'Another test'});
        expect(TestModel.getData()).toBe('Another test');
    });

    it('should return the flattened model as json',()=>{
        TestModel = new MessageModel;
        TestModel.expand({data:'Some value'});
        expect(TestModel.flatten()).toEqual({
            data:'Some value'
        });
    });

    it('should ignore additional properties when expanding',()=>{
        TestModel = new MessageModel;
        TestModel.expand({data:'Set this',extraData:'ignore this'});
        expect(TestModel.flatten()).toEqual({
            data:'Set this'
        });
    });

    it('if an non object value is passed into expand, nothing should be set',()=>{
        TestModel = new MessageModel;
        TestModel.expand();
        expect(TestModel.flatten()).toEqual({
            data:'Hello World'
        });
    });

});