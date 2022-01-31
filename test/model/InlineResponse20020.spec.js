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

  describe("(package)", function () {
    describe("InlineResponse20020", function () {
      beforeEach(function () {
        instance = new SwaggerJsClient.InlineResponse20020();
      });

      it("should create an instance of InlineResponse20020", function () {
        // TODO: update the code to test InlineResponse20020
        expect(instance).to.be.a(SwaggerJsClient.InlineResponse20020);
      });

      it('should have the property hydramember (base name: "hydra:member")', function () {
        // TODO: update the code to test the property hydramember
        expect(instance).to.have.property("hydramember");
        // expect(instance.hydramember).to.be(expectedValueLiteral);
      });

      it('should have the property hydratotalItems (base name: "hydra:totalItems")', function () {
        // TODO: update the code to test the property hydratotalItems
        expect(instance).to.have.property("hydratotalItems");
        // expect(instance.hydratotalItems).to.be(expectedValueLiteral);
      });

      it('should have the property hydraview (base name: "hydra:view")', function () {
        // TODO: update the code to test the property hydraview
        expect(instance).to.have.property("hydraview");
        // expect(instance.hydraview).to.be(expectedValueLiteral);
      });

      it('should have the property hydrasearch (base name: "hydra:search")', function () {
        // TODO: update the code to test the property hydrasearch
        expect(instance).to.have.property("hydrasearch");
        // expect(instance.hydrasearch).to.be(expectedValueLiteral);
      });
    });
  });
});