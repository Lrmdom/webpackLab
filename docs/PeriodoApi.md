# SwaggerJsClient.PeriodoApi

All URIs are relative to _/_

| Method                                                           | HTTP request                  | Description                                    |
| ---------------------------------------------------------------- | ----------------------------- | ---------------------------------------------- |
| [**deletePeriodoItem**](PeriodoApi.md#deletePeriodoItem)         | **DELETE** /api/periodos/{id} | Removes the Periodo resource.                  |
| [**getPeriodoCollection**](PeriodoApi.md#getPeriodoCollection)   | **GET** /api/periodos         | Retrieves the collection of Periodo resources. |
| [**getPeriodoItem**](PeriodoApi.md#getPeriodoItem)               | **GET** /api/periodos/{id}    | Retrieves a Periodo resource.                  |
| [**patchPeriodoItem**](PeriodoApi.md#patchPeriodoItem)           | **PATCH** /api/periodos/{id}  | Updates the Periodo resource.                  |
| [**postPeriodoCollection**](PeriodoApi.md#postPeriodoCollection) | **POST** /api/periodos        | Creates a Periodo resource.                    |
| [**putPeriodoItem**](PeriodoApi.md#putPeriodoItem)               | **PUT** /api/periodos/{id}    | Replaces the Periodo resource.                 |

<a name="deletePeriodoItem"></a>

# **deletePeriodoItem**

> deletePeriodoItem(id)

Removes the Periodo resource.

Removes the Periodo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PeriodoApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deletePeriodoItem(id, (error, data, response) => {
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

<a name="getPeriodoCollection"></a>

# **getPeriodoCollection**

> InlineResponse20012 getPeriodoCollection(opts)

Retrieves the collection of Periodo resources.

Retrieves the collection of Periodo resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PeriodoApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getPeriodoCollection(opts, (error, data, response) => {
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

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getPeriodoItem"></a>

# **getPeriodoItem**

> PeriodoJsonld getPeriodoItem(id)

Retrieves a Periodo resource.

Retrieves a Periodo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PeriodoApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getPeriodoItem(id, (error, data, response) => {
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

[**PeriodoJsonld**](PeriodoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchPeriodoItem"></a>

# **patchPeriodoItem**

> PeriodoJsonld patchPeriodoItem(body, id)

Updates the Periodo resource.

Updates the Periodo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PeriodoApi();
let body = new SwaggerJsClient.Periodo(); // Periodo | The updated Periodo resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchPeriodoItem(body, id, (error, data, response) => {
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
| **body** | [**Periodo**](Periodo.md) | The updated Periodo resource |
| **id**   | **String**                | Resource identifier          |

### Return type

[**PeriodoJsonld**](PeriodoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postPeriodoCollection"></a>

# **postPeriodoCollection**

> PeriodoJsonld postPeriodoCollection(body)

Creates a Periodo resource.

Creates a Periodo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PeriodoApi();
let body = new SwaggerJsClient.PeriodoJsonld(); // PeriodoJsonld | The new Periodo resource

apiInstance.postPeriodoCollection(body, (error, data, response) => {
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
| **body** | [**PeriodoJsonld**](PeriodoJsonld.md) | The new Periodo resource |

### Return type

[**PeriodoJsonld**](PeriodoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putPeriodoItem"></a>

# **putPeriodoItem**

> PeriodoJsonld putPeriodoItem(body, id)

Replaces the Periodo resource.

Replaces the Periodo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PeriodoApi();
let body = new SwaggerJsClient.PeriodoJsonld(); // PeriodoJsonld | The updated Periodo resource
let id = "id_example"; // String | Resource identifier

apiInstance.putPeriodoItem(body, id, (error, data, response) => {
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
| **body** | [**PeriodoJsonld**](PeriodoJsonld.md) | The updated Periodo resource |
| **id**   | **String**                            | Resource identifier          |

### Return type

[**PeriodoJsonld**](PeriodoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
