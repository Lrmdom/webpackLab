/*
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD.
    define(["expect.js", "../../src/index"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require("expect.js"), require("../../src/index"));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerJsClient);
  }
})(this, function (expect, SwaggerJsClient) {
  "use strict";

  var instance;

  beforeEach(function () {
    instance = new SwaggerJsClient.MylistApi();
  });

  describe("(package)", function () {
    describe("MylistApi", function () {
      describe("deleteMylistItem", function () {
        it("should call deleteMylistItem successfully", function (done) {
          // TODO: uncomment, update parameter values for deleteMylistItem call
          /*

          instance.deleteMylistItem(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("getMylistCollection", function () {
        it("should call getMylistCollection successfully", function (done) {
          // TODO: uncomment, update parameter values for getMylistCollection call and complete the assertions
          /*
          var opts = {};

          instance.getMylistCollection(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.InlineResponse20010);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("getMylistItem", function () {
        it("should call getMylistItem successfully", function (done) {
          // TODO: uncomment, update parameter values for getMylistItem call and complete the assertions
          /*

          instance.getMylistItem(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.MylistJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("patchMylistItem", function () {
        it("should call patchMylistItem successfully", function (done) {
          // TODO: uncomment, update parameter values for patchMylistItem call and complete the assertions
          /*

          instance.patchMylistItem(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.MylistJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("postMylistCollection", function () {
        it("should call postMylistCollection successfully", function (done) {
          // TODO: uncomment, update parameter values for postMylistCollection call and complete the assertions
          /*

          instance.postMylistCollection(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.MylistJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe("putMylistItem", function () {
        it("should call putMylistItem successfully", function (done) {
          // TODO: uncomment, update parameter values for putMylistItem call and complete the assertions
          /*

          instance.putMylistItem(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerJsClient.MylistJsonld);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });
});