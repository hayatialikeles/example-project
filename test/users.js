var expect    = require("chai").expect;
var request=require('request');

describe("Users get Controller",()=>{
    it("user get list status control",(done)=>{
        request("http://localhost:3000/users/1/12",(err,response,body)=>{
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("user get list data control",(done)=>{
        request("http://localhost:3000/users/1/12",(err,response,body)=>{
            expect(JSON.parse(body).state).to.equal(true);
            done();
        });
    });

    it("user get list params control",(done)=>{
        request("http://localhost:3000/users/1",(err,response,body)=>{
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

});