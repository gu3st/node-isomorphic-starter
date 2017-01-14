const ResponseMock = require('../../../__mocks__/ResponseMock');
const RequestMock = require('../../../__mocks__/RequestMock');
const AppServer = require('../../../__mocks__/UI/AppServer');
const AppEndpoint = require('../../../src/Controllers/Endpoints/AppEndpoint');

describe('App Endpoint',()=>{
    var response,request,TestEndpoint,TestServer;
    response = new ResponseMock;
    request = new RequestMock;
    TestServer = new AppServer;
    TestEndpoint = new AppEndpoint(TestServer);

    it('should be an instance of AppEndpoint',()=>{
        expect(TestEndpoint).toBeInstanceOf(AppEndpoint);
    });

    it('should return a status code of 200 and a string on render',()=>{
        TestEndpoint.loadPage(request,response);
        expect(response.getStatus()).toBe(200);
        expect(response.getResponseBody()).toBe(AppServer.RESPONSE);
    });
});