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
import { ApiClient } from "../ApiClient";

/**
 * The DestinoJsonld model module.
 * @module model/DestinoJsonld
 * @version 0.0.0
 */
export class DestinoJsonld {
  /**
   * Constructs a new <code>DestinoJsonld</code>.
   * Destino
   * @alias module:model/DestinoJsonld
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>DestinoJsonld</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DestinoJsonld} obj Optional instance to populate.
   * @return {module:model/DestinoJsonld} The populated <code>DestinoJsonld</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DestinoJsonld();
      if (data.hasOwnProperty("@context"))
        obj.context = ApiClient.convertToType(data["@context"], Object);
      if (data.hasOwnProperty("@id"))
        obj.id = ApiClient.convertToType(data["@id"], "String");
      if (data.hasOwnProperty("@type"))
        obj.type = ApiClient.convertToType(data["@type"], "String");
      if (data.hasOwnProperty("idDestino"))
        obj.idDestino = ApiClient.convertToType(data["idDestino"], "Number");
      if (data.hasOwnProperty("destino"))
        obj.destino = ApiClient.convertToType(data["destino"], "String");
    }
    return obj;
  }
}

/**
 * @member {Object} context
 */
DestinoJsonld.prototype.context = undefined;

/**
 * @member {String} id
 */
DestinoJsonld.prototype.id = undefined;

/**
 * @member {String} type
 */
DestinoJsonld.prototype.type = undefined;

/**
 * @member {Number} idDestino
 */
DestinoJsonld.prototype.idDestino = undefined;

/**
 * @member {String} destino
 */
DestinoJsonld.prototype.destino = undefined;