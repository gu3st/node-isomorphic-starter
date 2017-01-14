class AppServer{
    static get RESPONSE(){
        return 'Mock';
    }

    render(){
        return AppServer.RESPONSE;
    }
}

module.exports = AppServer;