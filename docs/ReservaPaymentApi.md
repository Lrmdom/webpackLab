# SwaggerJsClient.ReservaPaymentApi

All URIs are relative to _/_

| Method                                                                                | HTTP request                          | Description                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------- | ----------------------------------------------------- |
| [**deleteReservaPaymentItem**](ReservaPaymentApi.md#deleteReservaPaymentItem)         | **DELETE** /api/reserva_payments/{id} | Removes the ReservaPayment resource.                  |
| [**getReservaPaymentCollection**](ReservaPaymentApi.md#getReservaPaymentCollection)   | **GET** /api/reserva_payments         | Retrieves the collection of ReservaPayment resources. |
| [**getReservaPaymentItem**](ReservaPaymentApi.md#getReservaPaymentItem)               | **GET** /api/reserva_payments/{id}    | Retrieves a ReservaPayment resource.                  |
| [**patchReservaPaymentItem**](ReservaPaymentApi.md#patchReservaPaymentItem)           | **PATCH** /api/reserva_payments/{id}  | Updates the ReservaPayment resource.                  |
| [**postReservaPaymentCollection**](ReservaPaymentApi.md#postReservaPaymentCollection) | **POST** /api/reserva_payments        | Creates a ReservaPayment resource.                    |
| [**putReservaPaymentItem**](ReservaPaymentApi.md#putReservaPaymentItem)               | **PUT** /api/reserva_payments/{id}    | Replaces the ReservaPayment resource.                 |

<a name="deleteReservaPaymentItem"></a>

# **deleteReservaPaymentItem**

> deleteReservaPaymentItem(id)

Removes the ReservaPayment resource.

Removes the ReservaPayment resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaPaymentApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteReservaPaymentItem(id, (error, data, response) => {
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

<a name="getReservaPaymentCollection"></a>

# **getReservaPaymentCollection**

> InlineResponse20017 getReservaPaymentCollection(opts)

Retrieves the collection of ReservaPayment resources.

Retrieves the collection of ReservaPayment resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaPaymentApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getReservaPaymentCollection(opts, (error, data, response) => {
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

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getReservaPaymentItem"></a>

# **getReservaPaymentItem**

> ReservaPaymentJsonld getReservaPaymentItem(id)

Retrieves a ReservaPayment resource.

Retrieves a ReservaPayment resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaPaymentApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getReservaPaymentItem(id, (error, data, response) => {
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

[**ReservaPaymentJsonld**](ReservaPaymentJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchReservaPaymentItem"></a>

# **patchReservaPaymentItem**

> ReservaPaymentJsonld patchReservaPaymentItem(body, id)

Updates the ReservaPayment resource.

Updates the ReservaPayment resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaPaymentApi();
let body = new SwaggerJsClient.ReservaPayment(); // ReservaPayment | The updated ReservaPayment resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchReservaPaymentItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                    | Description                         | Notes |
| -------- | --------------------------------------- | ----------------------------------- | ----- |
| **body** | [**ReservaPayment**](ReservaPayment.md) | The updated ReservaPayment resource |
| **id**   | **String**                              | Resource identifier                 |

### Return type

[**ReservaPaymentJsonld**](ReservaPaymentJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postReservaPaymentCollection"></a>

# **postReservaPaymentCollection**

> ReservaPaymentJsonld postReservaPaymentCollection(body)

Creates a ReservaPayment resource.

Creates a ReservaPayment resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaPaymentApi();
let body = new SwaggerJsClient.ReservaPaymentJsonld(); // ReservaPaymentJsonld | The new ReservaPayment resource

apiInstance.postReservaPaymentCollection(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                                | Description                     | Notes |
| -------- | --------------------------------------------------- | ------------------------------- | ----- |
| **body** | [**ReservaPaymentJsonld**](ReservaPaymentJsonld.md) | The new ReservaPayment resource |

### Return type

[**ReservaPaymentJsonld**](ReservaPaymentJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putReservaPaymentItem"></a>

# **putReservaPaymentItem**

> ReservaPaymentJsonld putReservaPaymentItem(body, id)

Replaces the ReservaPayment resource.

Replaces the ReservaPayment resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ReservaPaymentApi();
let body = new SwaggerJsClient.ReservaPaymentJsonld(); // ReservaPaymentJsonld | The updated ReservaPayment resource
let id = "id_example"; // String | Resource identifier

apiInstance.putReservaPaymentItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                                | Description                         | Notes |
| -------- | --------------------------------------------------- | ----------------------------------- | ----- |
| **body** | [**ReservaPaymentJsonld**](ReservaPaymentJsonld.md) | The updated ReservaPayment resource |
| **id**   | **String**                                          | Resource identifier                 |

### Return type

[**ReservaPaymentJsonld**](ReservaPaymentJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
