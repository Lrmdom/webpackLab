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
 * The EstadiaMinima model module.
 * @module model/EstadiaMinima
 * @version 0.0.0
 */
export class EstadiaMinima {
  /**
   * Constructs a new <code>EstadiaMinima</code>.
   * EstadiaMinima
   * @alias module:model/EstadiaMinima
   * @class
   */
  constructor() {}

  /**
   * Constructs a <code>EstadiaMinima</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstadiaMinima} obj Optional instance to populate.
   * @return {module:model/EstadiaMinima} The populated <code>EstadiaMinima</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EstadiaMinima();
      if (data.hasOwnProperty("id"))
        obj.id = ApiClient.convertToType(data["id"], "Number");
      if (data.hasOwnProperty("estadiaMin"))
        obj.estadiaMin = ApiClient.convertToType(data["estadiaMin"], "String");
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
EstadiaMinima.prototype.id = undefined;

/**
 * @member {String} estadiaMin
 */
EstadiaMinima.prototype.estadiaMin = undefined;