# SwaggerJsClient.ReservaStateApi

All URIs are relative to _/_

| Method                                                                          | HTTP request                        | Description                                         |
| ------------------------------------------------------------------------------- | ----------------------------------- | --------------------------------------------------- |
| [**deleteReservaStateItem**](ReservaStateApi.md#deleteReservaStateItem)         | **DELETE** /api/reserva_states/{id} | Removes the ReservaState resource.                  |
| [**getReservaStateCollection**](ReservaStateApi.md#getReservaStateCollection)   | **GET** /api/reserva_states         | Retrieves the collection of ReservaState resources. |
| [**getReservaStateItem**](ReservaStateApi.md#getReservaStateItem)               | **GET** /api/reserva_states/{id}    | Retrieves a ReservaState resource.                  |
| [**patchReservaStateItem**](ReservaStateApi.md#patchReservaStateItem)           | **PATCH** /api/reserva_states/{id}  | Updates the ReservaState resource.                  |
| [**postReservaStateCollection**](ReservaStateApi.md#postReservaStateCollection) | **POST** /api/reserva_states        | Creates a ReservaState resource.                    |
| [**putReservaStateItem**](ReservaStateApi.md#putReservaStateItem)               | **PUT** /api/reserva_states/{id}    | Replaces the ReservaState resource.                 |

<a name="deleteReservaStateItem"></a>

# **deleteReservaStateItem**

> deleteReservaStateItem(id)

Removes the ReservaState resource.

Removes the ReservaState resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaStateApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteReservaStateItem(id, (error, data, response) => {
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

<a name="getReservaStateCollection"></a>

# **getReservaStateCollection**

> InlineResponse20018 getReservaStateCollection(opts)

Retrieves the collection of ReservaState resources.

Retrieves the collection of ReservaState resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaStateApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getReservaStateCollection(opts, (error, data, response) => {
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

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getReservaStateItem"></a>

# **getReservaStateItem**

> ReservaStateJsonld getReservaStateItem(id)

Retrieves a ReservaState resource.

Retrieves a ReservaState resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaStateApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getReservaStateItem(id, (error, data, response) => {
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

[**ReservaStateJsonld**](ReservaStateJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchReservaStateItem"></a>

# **patchReservaStateItem**

> ReservaStateJsonld patchReservaStateItem(body, id)

Updates the ReservaState resource.

Updates the ReservaState resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaStateApi();
let body = new SwaggerJsClient.ReservaState(); // ReservaState | The updated ReservaState resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchReservaStateItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                | Description                       | Notes |
| -------- | ----------------------------------- | --------------------------------- | ----- |
| **body** | [**ReservaState**](ReservaState.md) | The updated ReservaState resource |
| **id**   | **String**                          | Resource identifier               |

### Return type

[**ReservaStateJsonld**](ReservaStateJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postReservaStateCollection"></a>

# **postReservaStateCollection**

> ReservaStateJsonld postReservaStateCollection(body)

Creates a ReservaState resource.

Creates a ReservaState resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaStateApi();
let body = new SwaggerJsClient.ReservaStateJsonld(); // ReservaStateJsonld | The new ReservaState resource

apiInstance.postReservaStateCollection(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                            | Description                   | Notes |
| -------- | ----------------------------------------------- | ----------------------------- | ----- |
| **body** | [**ReservaStateJsonld**](ReservaStateJsonld.md) | The new ReservaState resource |

### Return type

[**ReservaStateJsonld**](ReservaStateJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putReservaStateItem"></a>

# **putReservaStateItem**

> ReservaStateJsonld putReservaStateItem(body, id)

Replaces the ReservaState resource.

Replaces the ReservaState resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaStateApi();
let body = new SwaggerJsClient.ReservaStateJsonld(); // ReservaStateJsonld | The updated ReservaState resource
let id = "id_example"; // String | Resource identifier

apiInstance.putReservaStateItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                            | Description                       | Notes |
| -------- | ----------------------------------------------- | --------------------------------- | ----- |
| **body** | [**ReservaStateJsonld**](ReservaStateJsonld.md) | The updated ReservaState resource |
| **id**   | **String**                                      | Resource identifier               |

### Return type

[**ReservaStateJsonld**](ReservaStateJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
