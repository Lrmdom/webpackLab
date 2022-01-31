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
    describe("CasaJsonld", function () {
      beforeEach(function () {
        instance = new SwaggerJsClient.CasaJsonld();
      });

      it("should create an instance of CasaJsonld", function () {
        // TODO: update the code to test CasaJsonld
        expect(instance).to.be.a(SwaggerJsClient.CasaJsonld);
      });

      it('should have the property context (base name: "@context")', function () {
        // TODO: update the code to test the property context
        expect(instance).to.have.property("context");
        // expect(instance.context).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "@id")', function () {
        // TODO: update the code to test the property id
        expect(instance).to.have.property("id");
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "@type")', function () {
        // TODO: update the code to test the property type
        expect(instance).to.have.property("type");
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property prereservas (base name: "prereservas")', function () {
        // TODO: update the code to test the property prereservas
        expect(instance).to.have.property("prereservas");
        // expect(instance.prereservas).to.be(expectedValueLiteral);
      });

      it('should have the property owner (base name: "owner")', function () {
        // TODO: update the code to test the property owner
        expect(instance).to.have.property("owner");
        // expect(instance.owner).to.be(expectedValueLiteral);
      });

      it('should have the property codCasa (base name: "codCasa")', function () {
        // TODO: update the code to test the property codCasa
        expect(instance).to.have.property("codCasa");
        // expect(instance.codCasa).to.be(expectedValueLiteral);
      });

      it('should have the property adicionado (base name: "adicionado")', function () {
        // TODO: update the code to test the property adicionado
        expect(instance).to.have.property("adicionado");
        // expect(instance.adicionado).to.be(expectedValueLiteral);
      });

      it('should have the property dataActivo (base name: "dataActivo")', function () {
        // TODO: update the code to test the property dataActivo
        expect(instance).to.have.property("dataActivo");
        // expect(instance.dataActivo).to.be(expectedValueLiteral);
      });

      it('should have the property destino (base name: "destino")', function () {
        // TODO: update the code to test the property destino
        expect(instance).to.have.property("destino");
        // expect(instance.destino).to.be(expectedValueLiteral);
      });

      it('should have the property propid (base name: "propid")', function () {
        // TODO: update the code to test the property propid
        expect(instance).to.have.property("propid");
        // expect(instance.propid).to.be(expectedValueLiteral);
      });

      it('should have the property designacao (base name: "designacao")', function () {
        // TODO: update the code to test the property designacao
        expect(instance).to.have.property("designacao");
        // expect(instance.designacao).to.be(expectedValueLiteral);
      });

      it('should have the property tipoalojamento (base name: "tipoalojamento")', function () {
        // TODO: update the code to test the property tipoalojamento
        expect(instance).to.have.property("tipoalojamento");
        // expect(instance.tipoalojamento).to.be(expectedValueLiteral);
      });

      it('should have the property tipo (base name: "tipo")', function () {
        // TODO: update the code to test the property tipo
        expect(instance).to.have.property("tipo");
        // expect(instance.tipo).to.be(expectedValueLiteral);
      });

      it('should have the property pessoas (base name: "pessoas")', function () {
        // TODO: update the code to test the property pessoas
        expect(instance).to.have.property("pessoas");
        // expect(instance.pessoas).to.be(expectedValueLiteral);
      });

      it('should have the property pais (base name: "pais")', function () {
        // TODO: update the code to test the property pais
        expect(instance).to.have.property("pais");
        // expect(instance.pais).to.be(expectedValueLiteral);
      });

      it('should have the property distrito (base name: "distrito")', function () {
        // TODO: update the code to test the property distrito
        expect(instance).to.have.property("distrito");
        // expect(instance.distrito).to.be(expectedValueLiteral);
      });

      it('should have the property endereco (base name: "endereco")', function () {
        // TODO: update the code to test the property endereco
        expect(instance).to.have.property("endereco");
        // expect(instance.endereco).to.be(expectedValueLiteral);
      });

      it('should have the property codpostal (base name: "codpostal")', function () {
        // TODO: update the code to test the property codpostal
        expect(instance).to.have.property("codpostal");
        // expect(instance.codpostal).to.be(expectedValueLiteral);
      });

      it('should have the property area (base name: "area")', function () {
        // TODO: update the code to test the property area
        expect(instance).to.have.property("area");
        // expect(instance.area).to.be(expectedValueLiteral);
      });

      it('should have the property lat (base name: "lat")', function () {
        // TODO: update the code to test the property lat
        expect(instance).to.have.property("lat");
        // expect(instance.lat).to.be(expectedValueLiteral);
      });

      it('should have the property lng (base name: "lng")', function () {
        // TODO: update the code to test the property lng
        expect(instance).to.have.property("lng");
        // expect(instance.lng).to.be(expectedValueLiteral);
      });

      it('should have the property altitude (base name: "altitude")', function () {
        // TODO: update the code to test the property altitude
        expect(instance).to.have.property("altitude");
        // expect(instance.altitude).to.be(expectedValueLiteral);
      });

      it('should have the property localidade (base name: "localidade")', function () {
        // TODO: update the code to test the property localidade
        expect(instance).to.have.property("localidade");
        // expect(instance.localidade).to.be(expectedValueLiteral);
      });

      it('should have the property distCentro (base name: "distCentro")', function () {
        // TODO: update the code to test the property distCentro
        expect(instance).to.have.property("distCentro");
        // expect(instance.distCentro).to.be(expectedValueLiteral);
      });

      it('should have the property distPraia (base name: "distPraia")', function () {
        // TODO: update the code to test the property distPraia
        expect(instance).to.have.property("distPraia");
        // expect(instance.distPraia).to.be(expectedValueLiteral);
      });

      it('should have the property piscina (base name: "piscina")', function () {
        // TODO: update the code to test the property piscina
        expect(instance).to.have.property("piscina");
        // expect(instance.piscina).to.be(expectedValueLiteral);
      });

      it('should have the property televisao (base name: "televisao")', function () {
        // TODO: update the code to test the property televisao
        expect(instance).to.have.property("televisao");
        // expect(instance.televisao).to.be(expectedValueLiteral);
      });

      it('should have the property arCondicionado (base name: "arCondicionado")', function () {
        // TODO: update the code to test the property arCondicionado
        expect(instance).to.have.property("arCondicionado");
        // expect(instance.arCondicionado).to.be(expectedValueLiteral);
      });

      it('should have the property img1 (base name: "img1")', function () {
        // TODO: update the code to test the property img1
        expect(instance).to.have.property("img1");
        // expect(instance.img1).to.be(expectedValueLiteral);
      });

      it('should have the property img2 (base name: "img2")', function () {
        // TODO: update the code to test the property img2
        expect(instance).to.have.property("img2");
        // expect(instance.img2).to.be(expectedValueLiteral);
      });

      it('should have the property img3 (base name: "img3")', function () {
        // TODO: update the code to test the property img3
        expect(instance).to.have.property("img3");
        // expect(instance.img3).to.be(expectedValueLiteral);
      });

      it('should have the property img4 (base name: "img4")', function () {
        // TODO: update the code to test the property img4
        expect(instance).to.have.property("img4");
        // expect(instance.img4).to.be(expectedValueLiteral);
      });

      it('should have the property img5 (base name: "img5")', function () {
        // TODO: update the code to test the property img5
        expect(instance).to.have.property("img5");
        // expect(instance.img5).to.be(expectedValueLiteral);
      });

      it('should have the property img6 (base name: "img6")', function () {
        // TODO: update the code to test the property img6
        expect(instance).to.have.property("img6");
        // expect(instance.img6).to.be(expectedValueLiteral);
      });

      it('should have the property img7 (base name: "img7")', function () {
        // TODO: update the code to test the property img7
        expect(instance).to.have.property("img7");
        // expect(instance.img7).to.be(expectedValueLiteral);
      });

      it('should have the property img8 (base name: "img8")', function () {
        // TODO: update the code to test the property img8
        expect(instance).to.have.property("img8");
        // expect(instance.img8).to.be(expectedValueLiteral);
      });

      it('should have the property img9 (base name: "img9")', function () {
        // TODO: update the code to test the property img9
        expect(instance).to.have.property("img9");
        // expect(instance.img9).to.be(expectedValueLiteral);
      });

      it('should have the property img10 (base name: "img10")', function () {
        // TODO: update the code to test the property img10
        expect(instance).to.have.property("img10");
        // expect(instance.img10).to.be(expectedValueLiteral);
      });

      it('should have the property quartos (base name: "quartos")', function () {
        // TODO: update the code to test the property quartos
        expect(instance).to.have.property("quartos");
        // expect(instance.quartos).to.be(expectedValueLiteral);
      });

      it('should have the property camascasal (base name: "camascasal")', function () {
        // TODO: update the code to test the property camascasal
        expect(instance).to.have.property("camascasal");
        // expect(instance.camascasal).to.be(expectedValueLiteral);
      });

      it('should have the property camassingle (base name: "camassingle")', function () {
        // TODO: update the code to test the property camassingle
        expect(instance).to.have.property("camassingle");
        // expect(instance.camassingle).to.be(expectedValueLiteral);
      });

      it('should have the property casasbanho (base name: "casasbanho")', function () {
        // TODO: update the code to test the property casasbanho
        expect(instance).to.have.property("casasbanho");
        // expect(instance.casasbanho).to.be(expectedValueLiteral);
      });

      it('should have the property golf (base name: "golf")', function () {
        // TODO: update the code to test the property golf
        expect(instance).to.have.property("golf");
        // expect(instance.golf).to.be(expectedValueLiteral);
      });

      it('should have the property tenis (base name: "tenis")', function () {
        // TODO: update the code to test the property tenis
        expect(instance).to.have.property("tenis");
        // expect(instance.tenis).to.be(expectedValueLiteral);
      });

      it('should have the property pesca (base name: "pesca")', function () {
        // TODO: update the code to test the property pesca
        expect(instance).to.have.property("pesca");
        // expect(instance.pesca).to.be(expectedValueLiteral);
      });

      it('should have the property natacao (base name: "natacao")', function () {
        // TODO: update the code to test the property natacao
        expect(instance).to.have.property("natacao");
        // expect(instance.natacao).to.be(expectedValueLiteral);
      });

      it('should have the property bowling (base name: "bowling")', function () {
        // TODO: update the code to test the property bowling
        expect(instance).to.have.property("bowling");
        // expect(instance.bowling).to.be(expectedValueLiteral);
      });

      it('should have the property casino (base name: "casino")', function () {
        // TODO: update the code to test the property casino
        expect(instance).to.have.property("casino");
        // expect(instance.casino).to.be(expectedValueLiteral);
      });

      it('should have the property cinema (base name: "cinema")', function () {
        // TODO: update the code to test the property cinema
        expect(instance).to.have.property("cinema");
        // expect(instance.cinema).to.be(expectedValueLiteral);
      });

      it('should have the property discoteca (base name: "discoteca")', function () {
        // TODO: update the code to test the property discoteca
        expect(instance).to.have.property("discoteca");
        // expect(instance.discoteca).to.be(expectedValueLiteral);
      });

      it('should have the property outrasActividprox (base name: "outrasActividprox")', function () {
        // TODO: update the code to test the property outrasActividprox
        expect(instance).to.have.property("outrasActividprox");
        // expect(instance.outrasActividprox).to.be(expectedValueLiteral);
      });

      it('should have the property roupascama (base name: "roupascama")', function () {
        // TODO: update the code to test the property roupascama
        expect(instance).to.have.property("roupascama");
        // expect(instance.roupascama).to.be(expectedValueLiteral);
      });

      it('should have the property roupasbanho (base name: "roupasbanho")', function () {
        // TODO: update the code to test the property roupasbanho
        expect(instance).to.have.property("roupasbanho");
        // expect(instance.roupasbanho).to.be(expectedValueLiteral);
      });

      it('should have the property limpeza (base name: "limpeza")', function () {
        // TODO: update the code to test the property limpeza
        expect(instance).to.have.property("limpeza");
        // expect(instance.limpeza).to.be(expectedValueLiteral);
      });

      it('should have the property utilcozinha (base name: "utilcozinha")', function () {
        // TODO: update the code to test the property utilcozinha
        expect(instance).to.have.property("utilcozinha");
        // expect(instance.utilcozinha).to.be(expectedValueLiteral);
      });

      it('should have the property fogao (base name: "fogao")', function () {
        // TODO: update the code to test the property fogao
        expect(instance).to.have.property("fogao");
        // expect(instance.fogao).to.be(expectedValueLiteral);
      });

      it('should have the property frigorif (base name: "frigorif")', function () {
        // TODO: update the code to test the property frigorif
        expect(instance).to.have.property("frigorif");
        // expect(instance.frigorif).to.be(expectedValueLiteral);
      });

      it('should have the property congel (base name: "congel")', function () {
        // TODO: update the code to test the property congel
        expect(instance).to.have.property("congel");
        // expect(instance.congel).to.be(expectedValueLiteral);
      });

      it('should have the property forno (base name: "forno")', function () {
        // TODO: update the code to test the property forno
        expect(instance).to.have.property("forno");
        // expect(instance.forno).to.be(expectedValueLiteral);
      });

      it('should have the property barbecue (base name: "barbecue")', function () {
        // TODO: update the code to test the property barbecue
        expect(instance).to.have.property("barbecue");
        // expect(instance.barbecue).to.be(expectedValueLiteral);
      });

      it('should have the property microndas (base name: "microndas")', function () {
        // TODO: update the code to test the property microndas
        expect(instance).to.have.property("microndas");
        // expect(instance.microndas).to.be(expectedValueLiteral);
      });

      it('should have the property mlavaloica (base name: "mlavaloica")', function () {
        // TODO: update the code to test the property mlavaloica
        expect(instance).to.have.property("mlavaloica");
        // expect(instance.mlavaloica).to.be(expectedValueLiteral);
      });

      it('should have the property mlavaroupa (base name: "mlavaroupa")', function () {
        // TODO: update the code to test the property mlavaroupa
        expect(instance).to.have.property("mlavaroupa");
        // expect(instance.mlavaroupa).to.be(expectedValueLiteral);
      });

      it('should have the property aqcentral (base name: "aqcentral")', function () {
        // TODO: update the code to test the property aqcentral
        expect(instance).to.have.property("aqcentral");
        // expect(instance.aqcentral).to.be(expectedValueLiteral);
      });

      it('should have the property satcabo (base name: "satcabo")', function () {
        // TODO: update the code to test the property satcabo
        expect(instance).to.have.property("satcabo");
        // expect(instance.satcabo).to.be(expectedValueLiteral);
      });

      it('should have the property internet (base name: "internet")', function () {
        // TODO: update the code to test the property internet
        expect(instance).to.have.property("internet");
        // expect(instance.internet).to.be(expectedValueLiteral);
      });

      it('should have the property outrosServicos (base name: "outrosServicos")', function () {
        // TODO: update the code to test the property outrosServicos
        expect(instance).to.have.property("outrosServicos");
        // expect(instance.outrosServicos).to.be(expectedValueLiteral);
      });

      it('should have the property linkInfo (base name: "linkInfo")', function () {
        // TODO: update the code to test the property linkInfo
        expect(instance).to.have.property("linkInfo");
        // expect(instance.linkInfo).to.be(expectedValueLiteral);
      });

      it('should have the property linkDispon (base name: "linkDispon")', function () {
        // TODO: update the code to test the property linkDispon
        expect(instance).to.have.property("linkDispon");
        // expect(instance.linkDispon).to.be(expectedValueLiteral);
      });

      it('should have the property activo (base name: "activo")', function () {
        // TODO: update the code to test the property activo
        expect(instance).to.have.property("activo");
        // expect(instance.activo).to.be(expectedValueLiteral);
      });

      it('should have the property sessid (base name: "sessid")', function () {
        // TODO: update the code to test the property sessid
        expect(instance).to.have.property("sessid");
        // expect(instance.sessid).to.be(expectedValueLiteral);
      });

      it('should have the property promo (base name: "promo")', function () {
        // TODO: update the code to test the property promo
        expect(instance).to.have.property("promo");
        // expect(instance.promo).to.be(expectedValueLiteral);
      });

      it('should have the property certif (base name: "certif")', function () {
        // TODO: update the code to test the property certif
        expect(instance).to.have.property("certif");
        // expect(instance.certif).to.be(expectedValueLiteral);
      });

      it('should have the property dataAct (base name: "dataAct")', function () {
        // TODO: update the code to test the property dataAct
        expect(instance).to.have.property("dataAct");
        // expect(instance.dataAct).to.be(expectedValueLiteral);
      });

      it('should have the property titulo (base name: "titulo")', function () {
        // TODO: update the code to test the property titulo
        expect(instance).to.have.property("titulo");
        // expect(instance.titulo).to.be(expectedValueLiteral);
      });

      it('should have the property qtspecialoffer (base name: "qtspecialoffer")', function () {
        // TODO: update the code to test the property qtspecialoffer
        expect(instance).to.have.property("qtspecialoffer");
        // expect(instance.qtspecialoffer).to.be(expectedValueLiteral);
      });

      it('should have the property fengomar (base name: "fengomar")', function () {
        // TODO: update the code to test the property fengomar
        expect(instance).to.have.property("fengomar");
        // expect(instance.fengomar).to.be(expectedValueLiteral);
      });

      it('should have the property estacionamento (base name: "estacionamento")', function () {
        // TODO: update the code to test the property estacionamento
        expect(instance).to.have.property("estacionamento");
        // expect(instance.estacionamento).to.be(expectedValueLiteral);
      });

      it('should have the property telefone (base name: "telefone")', function () {
        // TODO: update the code to test the property telefone
        expect(instance).to.have.property("telefone");
        // expect(instance.telefone).to.be(expectedValueLiteral);
      });

      it('should have the property despertador (base name: "despertador")', function () {
        // TODO: update the code to test the property despertador
        expect(instance).to.have.property("despertador");
        // expect(instance.despertador).to.be(expectedValueLiteral);
      });

      it('should have the property dvd (base name: "dvd")', function () {
        // TODO: update the code to test the property dvd
        expect(instance).to.have.property("dvd");
        // expect(instance.dvd).to.be(expectedValueLiteral);
      });

      it('should have the property torradeira (base name: "torradeira")', function () {
        // TODO: update the code to test the property torradeira
        expect(instance).to.have.property("torradeira");
        // expect(instance.torradeira).to.be(expectedValueLiteral);
      });

      it('should have the property animais (base name: "animais")', function () {
        // TODO: update the code to test the property animais
        expect(instance).to.have.property("animais");
        // expect(instance.animais).to.be(expectedValueLiteral);
      });

      it('should have the property fumadores (base name: "fumadores")', function () {
        // TODO: update the code to test the property fumadores
        expect(instance).to.have.property("fumadores");
        // expect(instance.fumadores).to.be(expectedValueLiteral);
      });

      it('should have the property caucao (base name: "caucao")', function () {
        // TODO: update the code to test the property caucao
        expect(instance).to.have.property("caucao");
        // expect(instance.caucao).to.be(expectedValueLiteral);
      });

      it('should have the property valorcaucao (base name: "valorcaucao")', function () {
        // TODO: update the code to test the property valorcaucao
        expect(instance).to.have.property("valorcaucao");
        // expect(instance.valorcaucao).to.be(expectedValueLiteral);
      });

      it('should have the property deficientes (base name: "deficientes")', function () {
        // TODO: update the code to test the property deficientes
        expect(instance).to.have.property("deficientes");
        // expect(instance.deficientes).to.be(expectedValueLiteral);
      });

      it('should have the property concelho (base name: "concelho")', function () {
        // TODO: update the code to test the property concelho
        expect(instance).to.have.property("concelho");
        // expect(instance.concelho).to.be(expectedValueLiteral);
      });

      it('should have the property altImg1 (base name: "altImg1")', function () {
        // TODO: update the code to test the property altImg1
        expect(instance).to.have.property("altImg1");
        // expect(instance.altImg1).to.be(expectedValueLiteral);
      });

      it('should have the property forSale (base name: "forSale")', function () {
        // TODO: update the code to test the property forSale
        expect(instance).to.have.property("forSale");
        // expect(instance.forSale).to.be(expectedValueLiteral);
      });

      it('should have the property forRent (base name: "forRent")', function () {
        // TODO: update the code to test the property forRent
        expect(instance).to.have.property("forRent");
        // expect(instance.forRent).to.be(expectedValueLiteral);
      });

      it('should have the property forArrenda (base name: "forArrenda")', function () {
        // TODO: update the code to test the property forArrenda
        expect(instance).to.have.property("forArrenda");
        // expect(instance.forArrenda).to.be(expectedValueLiteral);
      });

      it('should have the property valorArrendamento (base name: "valorArrendamento")', function () {
        // TODO: update the code to test the property valorArrendamento
        expect(instance).to.have.property("valorArrendamento");
        // expect(instance.valorArrendamento).to.be(expectedValueLiteral);
      });

      it('should have the property valorVenda (base name: "valorVenda")', function () {
        // TODO: update the code to test the property valorVenda
        expect(instance).to.have.property("valorVenda");
        // expect(instance.valorVenda).to.be(expectedValueLiteral);
      });

      it('should have the property certifEnerg (base name: "certifEnerg")', function () {
        // TODO: update the code to test the property certifEnerg
        expect(instance).to.have.property("certifEnerg");
        // expect(instance.certifEnerg).to.be(expectedValueLiteral);
      });

      it('should have the property certifEnergLevel (base name: "certifEnergLevel")', function () {
        // TODO: update the code to test the property certifEnergLevel
        expect(instance).to.have.property("certifEnergLevel");
        // expect(instance.certifEnergLevel).to.be(expectedValueLiteral);
      });

      it('should have the property seoTitle (base name: "seoTitle")', function () {
        // TODO: update the code to test the property seoTitle
        expect(instance).to.have.property("seoTitle");
        // expect(instance.seoTitle).to.be(expectedValueLiteral);
      });

      it('should have the property ano (base name: "ano")', function () {
        // TODO: update the code to test the property ano
        expect(instance).to.have.property("ano");
        // expect(instance.ano).to.be(expectedValueLiteral);
      });
    });
  });
});