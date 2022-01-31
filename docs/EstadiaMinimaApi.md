# SwaggerJsClient.EstadiaMinimaApi

All URIs are relative to _/_

| Method                                                                             | HTTP request                         | Description                                          |
| ---------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------------- |
| [**deleteEstadiaMinimaItem**](EstadiaMinimaApi.md#deleteEstadiaMinimaItem)         | **DELETE** /api/estadia_minimas/{id} | Removes the EstadiaMinima resource.                  |
| [**getEstadiaMinimaCollection**](EstadiaMinimaApi.md#getEstadiaMinimaCollection)   | **GET** /api/estadia_minimas         | Retrieves the collection of EstadiaMinima resources. |
| [**getEstadiaMinimaItem**](EstadiaMinimaApi.md#getEstadiaMinimaItem)               | **GET** /api/estadia_minimas/{id}    | Retrieves a EstadiaMinima resource.                  |
| [**patchEstadiaMinimaItem**](EstadiaMinimaApi.md#patchEstadiaMinimaItem)           | **PATCH** /api/estadia_minimas/{id}  | Updates the EstadiaMinima resource.                  |
| [**postEstadiaMinimaCollection**](EstadiaMinimaApi.md#postEstadiaMinimaCollection) | **POST** /api/estadia_minimas        | Creates a EstadiaMinima resource.                    |
| [**putEstadiaMinimaItem**](EstadiaMinimaApi.md#putEstadiaMinimaItem)               | **PUT** /api/estadia_minimas/{id}    | Replaces the EstadiaMinima resource.                 |

<a name="deleteEstadiaMinimaItem"></a>

# **deleteEstadiaMinimaItem**

> deleteEstadiaMinimaItem(id)

Removes the EstadiaMinima resource.

Removes the EstadiaMinima resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.EstadiaMinimaApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteEstadiaMinimaItem(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
});
```

### Parameters

| Name   | Type       | Description         | Notes |
| ------ | ---------- | ------------------- | ----- |
| **id** | **String** | Resource identifier |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getEstadiaMinimaCollection"></a>

# **getEstadiaMinimaCollection**

> InlineResponse2006 getEstadiaMinimaCollection(opts)

Retrieves the collection of EstadiaMinima resources.

Retrieves the collection of EstadiaMinima resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.EstadiaMinimaApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getEstadiaMinimaCollection(opts, (error, data, response) => {
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

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getEstadiaMinimaItem"></a>

# **getEstadiaMinimaItem**

> EstadiaMinimaJsonld getEstadiaMinimaItem(id)

Retrieves a EstadiaMinima resource.

Retrieves a EstadiaMinima resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.EstadiaMinimaApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getEstadiaMinimaItem(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name   | Type       | Description         | Notes |
| ------ | ---------- | ------------------- | ----- |
| **id** | **String** | Resource identifier |

### Return type

[**EstadiaMinimaJsonld**](EstadiaMinimaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchEstadiaMinimaItem"></a>

# **patchEstadiaMinimaItem**

> EstadiaMinimaJsonld patchEstadiaMinimaItem(body, id)

Updates the EstadiaMinima resource.

Updates the EstadiaMinima resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.EstadiaMinimaApi();
let body = new SwaggerJsClient.EstadiaMinima(); // EstadiaMinima | The updated EstadiaMinima resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchEstadiaMinimaItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                  | Description                        | Notes |
| -------- | ------------------------------------- | ---------------------------------- | ----- |
| **body** | [**EstadiaMinima**](EstadiaMinima.md) | The updated EstadiaMinima resource |
| **id**   | **String**                            | Resource identifier                |

### Return type

[**EstadiaMinimaJsonld**](EstadiaMinimaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postEstadiaMinimaCollection"></a>

# **postEstadiaMinimaCollection**

> EstadiaMinimaJsonld postEstadiaMinimaCollection(body)

Creates a EstadiaMinima resource.

Creates a EstadiaMinima resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.EstadiaMinimaApi();
let body = new SwaggerJsClient.EstadiaMinimaJsonld(); // EstadiaMinimaJsonld | The new EstadiaMinima resource

apiInstance.postEstadiaMinimaCollection(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                              | Description                    | Notes |
| -------- | ------------------------------------------------- | ------------------------------ | ----- |
| **body** | [**EstadiaMinimaJsonld**](EstadiaMinimaJsonld.md) | The new EstadiaMinima resource |

### Return type

[**EstadiaMinimaJsonld**](EstadiaMinimaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putEstadiaMinimaItem"></a>

# **putEstadiaMinimaItem**

> EstadiaMinimaJsonld putEstadiaMinimaItem(body, id)

Replaces the EstadiaMinima resource.

Replaces the EstadiaMinima resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.EstadiaMinimaApi();
let body = new SwaggerJsClient.EstadiaMinimaJsonld(); // EstadiaMinimaJsonld | The updated EstadiaMinima resource
let id = "id_example"; // String | Resource identifier

apiInstance.putEstadiaMinimaItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                              | Description                        | Notes |
| -------- | ------------------------------------------------- | ---------------------------------- | ----- |
| **body** | [**EstadiaMinimaJsonld**](EstadiaMinimaJsonld.md) | The updated EstadiaMinima resource |
| **id**   | **String**                                        | Resource identifier                |

### Return type

[**EstadiaMinimaJsonld**](EstadiaMinimaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
