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
import { Cliente } from "../model/Cliente";
import { ClienteJsonld } from "../model/ClienteJsonld";
import { InlineResponse2003 } from "../model/InlineResponse2003";

/**
 * Cliente service.
 * @module api/ClienteApi
 * @version 0.0.0
 */
export class ClienteApi {
  /**
    * Constructs a new ClienteApi. 
    * @alias module:api/ClienteApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the deleteClienteItem operation.
   * @callback moduleapi/ClienteApi~deleteClienteItemCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Removes the Cliente resource.
   * Removes the Cliente resource.
   * @param {String} clienteid Resource identifier
   * @param {module:api/ClienteApi~deleteClienteItemCallback} callback The callback function, accepting three arguments: error, data, response
   */
  deleteClienteItem(clienteid, callback) {
    let postBody = null;
    // verify the required parameter 'clienteid' is set
    if (clienteid === undefined || clienteid === null) {
      throw new Error(
        "Missing the required parameter 'clienteid' when calling deleteClienteItem"
      );
    }

    let pathParams = {
      clienteid: clienteid,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = [];
    let returnType = null;

    return this.apiClient.callApi(
      "/api/clientes/{clienteid}",
      "DELETE",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
  /**
   * Callback function to receive the result of the getClienteCollection operation.
   * @callback moduleapi/ClienteApi~getClienteCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2003{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves the collection of Cliente resources.
   * Retrieves the collection of Cliente resources.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page The collection page number (default to <.>)
   * @param {module:api/ClienteApi~getClienteCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getClienteCollection(opts, callback) {
    opts = opts || {};
    let postBody = null;

    let pathParams = {};
    let queryParams = {
      page: opts["page"],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = InlineResponse2003;

    return this.apiClient.callApi(
      "/api/clientes",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
  /**
   * Callback function to receive the result of the getClienteItem operation.
   * @callback moduleapi/ClienteApi~getClienteItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ClienteJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieves a Cliente resource.
   * Retrieves a Cliente resource.
   * @param {String} clienteid Resource identifier
   * @param {module:api/ClienteApi~getClienteItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  getClienteItem(clienteid, callback) {
    let postBody = null;
    // verify the required parameter 'clienteid' is set
    if (clienteid === undefined || clienteid === null) {
      throw new Error(
        "Missing the required parameter 'clienteid' when calling getClienteItem"
      );
    }

    let pathParams = {
      clienteid: clienteid,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = [];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = ClienteJsonld;

    return this.apiClient.callApi(
      "/api/clientes/{clienteid}",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
  /**
   * Callback function to receive the result of the patchClienteItem operation.
   * @callback moduleapi/ClienteApi~patchClienteItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ClienteJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Updates the Cliente resource.
   * Updates the Cliente resource.
   * @param {module:model/Cliente} body The updated Cliente resource
   * @param {String} clienteid Resource identifier
   * @param {module:api/ClienteApi~patchClienteItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  patchClienteItem(body, clienteid, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling patchClienteItem"
      );
    }
    // verify the required parameter 'clienteid' is set
    if (clienteid === undefined || clienteid === null) {
      throw new Error(
        "Missing the required parameter 'clienteid' when calling patchClienteItem"
      );
    }

    let pathParams = {
      clienteid: clienteid,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/merge-patch+json"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = ClienteJsonld;

    return this.apiClient.callApi(
      "/api/clientes/{clienteid}",
      "PATCH",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
  /**
   * Callback function to receive the result of the postClienteCollection operation.
   * @callback moduleapi/ClienteApi~postClienteCollectionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ClienteJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a Cliente resource.
   * Creates a Cliente resource.
   * @param {module:model/ClienteJsonld} body The new Cliente resource
   * @param {module:api/ClienteApi~postClienteCollectionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  postClienteCollection(body, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling postClienteCollection"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = ClienteJsonld;

    return this.apiClient.callApi(
      "/api/clientes",
      "POST",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
  /**
   * Callback function to receive the result of the putClienteItem operation.
   * @callback moduleapi/ClienteApi~putClienteItemCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ClienteJsonld{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Replaces the Cliente resource.
   * Replaces the Cliente resource.
   * @param {module:model/ClienteJsonld} body The updated Cliente resource
   * @param {String} clienteid Resource identifier
   * @param {module:api/ClienteApi~putClienteItemCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  putClienteItem(body, clienteid, callback) {
    let postBody = body;
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling putClienteItem"
      );
    }
    // verify the required parameter 'clienteid' is set
    if (clienteid === undefined || clienteid === null) {
      throw new Error(
        "Missing the required parameter 'clienteid' when calling putClienteItem"
      );
    }

    let pathParams = {
      clienteid: clienteid,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = [];
    let contentTypes = ["application/ld+json", "application/json", "text/html"];
    let accepts = ["application/ld+json", "application/json", "text/html"];
    let returnType = ClienteJsonld;

    return this.apiClient.callApi(
      "/api/clientes/{clienteid}",
      "PUT",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    );
  }
}