# SwaggerJsClient.ReservaApi

All URIs are relative to _/_

| Method                                                           | HTTP request                  | Description                                    |
| ---------------------------------------------------------------- | ----------------------------- | ---------------------------------------------- |
| [**deleteReservaItem**](ReservaApi.md#deleteReservaItem)         | **DELETE** /api/reservas/{id} | Removes the Reserva resource.                  |
| [**getReservaCollection**](ReservaApi.md#getReservaCollection)   | **GET** /api/reservas         | Retrieves the collection of Reserva resources. |
| [**getReservaItem**](ReservaApi.md#getReservaItem)               | **GET** /api/reservas/{id}    | Retrieves a Reserva resource.                  |
| [**patchReservaItem**](ReservaApi.md#patchReservaItem)           | **PATCH** /api/reservas/{id}  | Updates the Reserva resource.                  |
| [**postReservaCollection**](ReservaApi.md#postReservaCollection) | **POST** /api/reservas        | Creates a Reserva resource.                    |
| [**putReservaItem**](ReservaApi.md#putReservaItem)               | **PUT** /api/reservas/{id}    | Replaces the Reserva resource.                 |

<a name="deleteReservaItem"></a>

# **deleteReservaItem**

> deleteReservaItem(id)

Removes the Reserva resource.

Removes the Reserva resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteReservaItem(id, (error, data, response) => {
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

<a name="getReservaCollection"></a>

# **getReservaCollection**

> InlineResponse20019 getReservaCollection(opts)

Retrieves the collection of Reserva resources.

Retrieves the collection of Reserva resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getReservaCollection(opts, (error, data, response) => {
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

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getReservaItem"></a>

# **getReservaItem**

> ReservaJsonld getReservaItem(id)

Retrieves a Reserva resource.

Retrieves a Reserva resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getReservaItem(id, (error, data, response) => {
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

[**ReservaJsonld**](ReservaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchReservaItem"></a>

# **patchReservaItem**

> ReservaJsonld patchReservaItem(body, id)

Updates the Reserva resource.

Updates the Reserva resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaApi();
let body = new SwaggerJsClient.Reserva(); // Reserva | The updated Reserva resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchReservaItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                      | Description                  | Notes |
| -------- | ------------------------- | ---------------------------- | ----- |
| **body** | [**Reserva**](Reserva.md) | The updated Reserva resource |
| **id**   | **String**                | Resource identifier          |

### Return type

[**ReservaJsonld**](ReservaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postReservaCollection"></a>

# **postReservaCollection**

> ReservaJsonld postReservaCollection(body)

Creates a Reserva resource.

Creates a Reserva resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaApi();
let body = new SwaggerJsClient.ReservaJsonld(); // ReservaJsonld | The new Reserva resource

apiInstance.postReservaCollection(body, (error, data, response) => {
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
| **body** | [**ReservaJsonld**](ReservaJsonld.md) | The new Reserva resource |

### Return type

[**ReservaJsonld**](ReservaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putReservaItem"></a>

# **putReservaItem**

> ReservaJsonld putReservaItem(body, id)

Replaces the Reserva resource.

Replaces the Reserva resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaApi();
let body = new SwaggerJsClient.ReservaJsonld(); // ReservaJsonld | The updated Reserva resource
let id = "id_example"; // String | Resource identifier

apiInstance.putReservaItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                  | Description                  | Notes |
| -------- | ------------------------------------- | ---------------------------- | ----- |
| **body** | [**ReservaJsonld**](ReservaJsonld.md) | The updated Reserva resource |
| **id**   | **String**                            | Resource identifier          |

### Return type

[**ReservaJsonld**](ReservaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
