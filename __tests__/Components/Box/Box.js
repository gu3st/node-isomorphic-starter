import React from 'react';
import Box from '../../../src/Components/Box/Box';
import renderer from 'react-test-renderer';

describe('Box Component',()=>{
    var props,tree;

    props = {
        data:"Hello World",
        updateMessage:jest.fn()
    };

    tree = renderer.create(<Box {...props}/>).toJSON();
    it('should match the Box component snapshot',()=>{
        expect(tree).toMatchSnapshot();
    });
});