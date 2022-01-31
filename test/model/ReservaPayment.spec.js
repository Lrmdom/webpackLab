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
    describe("ReservaPayment", function () {
      beforeEach(function () {
        instance = new SwaggerJsClient.ReservaPayment();
      });

      it("should create an instance of ReservaPayment", function () {
        // TODO: update the code to test ReservaPayment
        expect(instance).to.be.a(SwaggerJsClient.ReservaPayment);
      });

      it('should have the property id (base name: "id")', function () {
        // TODO: update the code to test the property id
        expect(instance).to.have.property("id");
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property idPagamento (base name: "idPagamento")', function () {
        // TODO: update the code to test the property idPagamento
        expect(instance).to.have.property("idPagamento");
        // expect(instance.idPagamento).to.be(expectedValueLiteral);
      });

      it('should have the property idTipoPagamento (base name: "idTipoPagamento")', function () {
        // TODO: update the code to test the property idTipoPagamento
        expect(instance).to.have.property("idTipoPagamento");
        // expect(instance.idTipoPagamento).to.be(expectedValueLiteral);
      });

      it('should have the property valor (base name: "valor")', function () {
        // TODO: update the code to test the property valor
        expect(instance).to.have.property("valor");
        // expect(instance.valor).to.be(expectedValueLiteral);
      });

      it('should have the property idpreco (base name: "idpreco")', function () {
        // TODO: update the code to test the property idpreco
        expect(instance).to.have.property("idpreco");
        // expect(instance.idpreco).to.be(expectedValueLiteral);
      });

      it('should have the property idreserva (base name: "idreserva")', function () {
        // TODO: update the code to test the property idreserva
        expect(instance).to.have.property("idreserva");
        // expect(instance.idreserva).to.be(expectedValueLiteral);
      });

      it('should have the property data (base name: "data")', function () {
        // TODO: update the code to test the property data
        expect(instance).to.have.property("data");
        // expect(instance.data).to.be(expectedValueLiteral);
      });
    });
  });
});