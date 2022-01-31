# SwaggerJsClient.ClienteApi

All URIs are relative to _/_

| Method                                                           | HTTP request                         | Description                                    |
| ---------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------- |
| [**deleteClienteItem**](ClienteApi.md#deleteClienteItem)         | **DELETE** /api/clientes/{clienteid} | Removes the Cliente resource.                  |
| [**getClienteCollection**](ClienteApi.md#getClienteCollection)   | **GET** /api/clientes                | Retrieves the collection of Cliente resources. |
| [**getClienteItem**](ClienteApi.md#getClienteItem)               | **GET** /api/clientes/{clienteid}    | Retrieves a Cliente resource.                  |
| [**patchClienteItem**](ClienteApi.md#patchClienteItem)           | **PATCH** /api/clientes/{clienteid}  | Updates the Cliente resource.                  |
| [**postClienteCollection**](ClienteApi.md#postClienteCollection) | **POST** /api/clientes               | Creates a Cliente resource.                    |
| [**putClienteItem**](ClienteApi.md#putClienteItem)               | **PUT** /api/clientes/{clienteid}    | Replaces the Cliente resource.                 |

<a name="deleteClienteItem"></a>

# **deleteClienteItem**

> deleteClienteItem(clienteid)

Removes the Cliente resource.

Removes the Cliente resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ClienteApi();
let clienteid = "clienteid_example"; // String | Resource identifier

apiInstance.deleteClienteItem(clienteid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
});
```

### Parameters

| Name          | Type       | Description         | Notes |
| ------------- | ---------- | ------------------- | ----- |
| **clienteid** | **String** | Resource identifier |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getClienteCollection"></a>

# **getClienteCollection**

> InlineResponse2003 getClienteCollection(opts)

Retrieves the collection of Cliente resources.

Retrieves the collection of Cliente resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ClienteApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getClienteCollection(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type       | Description                | Notes                     |
| -------- | ---------- | -------------------------- | ------------------------- |
| **page** | **Number** | The collection page number | [optional] [default to 1] |

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getClienteItem"></a>

# **getClienteItem**

> ClienteJsonld getClienteItem(clienteid)

Retrieves a Cliente resource.

Retrieves a Cliente resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ClienteApi();
let clienteid = "clienteid_example"; // String | Resource identifier

apiInstance.getClienteItem(clienteid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name          | Type       | Description         | Notes |
| ------------- | ---------- | ------------------- | ----- |
| **clienteid** | **String** | Resource identifier |

### Return type

[**ClienteJsonld**](ClienteJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchClienteItem"></a>

# **patchClienteItem**

> ClienteJsonld patchClienteItem(body, clienteid)

Updates the Cliente resource.

Updates the Cliente resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ClienteApi();
let body = new SwaggerJsClient.Cliente(); // Cliente | The updated Cliente resource
let clienteid = "clienteid_example"; // String | Resource identifier

apiInstance.patchClienteItem(body, clienteid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name          | Type                      | Description                  | Notes |
| ------------- | ------------------------- | ---------------------------- | ----- |
| **body**      | [**Cliente**](Cliente.md) | The updated Cliente resource |
| **clienteid** | **String**                | Resource identifier          |

### Return type

[**ClienteJsonld**](ClienteJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postClienteCollection"></a>

# **postClienteCollection**

> ClienteJsonld postClienteCollection(body)

Creates a Cliente resource.

Creates a Cliente resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ClienteApi();
let body = new SwaggerJsClient.ClienteJsonld(); // ClienteJsonld | The new Cliente resource

apiInstance.postClienteCollection(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                  | Description              | Notes |
| -------- | ------------------------------------- | ------------------------ | ----- |
| **body** | [**ClienteJsonld**](ClienteJsonld.md) | The new Cliente resource |

### Return type

[**ClienteJsonld**](ClienteJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putClienteItem"></a>

# **putClienteItem**

> ClienteJsonld putClienteItem(body, clienteid)

Replaces the Cliente resource.

Replaces the Cliente resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ClienteApi();
let body = new SwaggerJsClient.ClienteJsonld(); // ClienteJsonld | The updated Cliente resource
let clienteid = "clienteid_example"; // String | Resource identifier

apiInstance.putClienteItem(body, clienteid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name          | Type                                  | Description                  | Notes |
| ------------- | ------------------------------------- | ---------------------------- | ----- |
| **body**      | [**ClienteJsonld**](ClienteJsonld.md) | The updated Cliente resource |
| **clienteid** | **String**                            | Resource identifier          |

### Return type

[**ClienteJsonld**](ClienteJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
