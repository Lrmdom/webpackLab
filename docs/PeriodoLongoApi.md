# SwaggerJsClient.PeriodoLongoApi

All URIs are relative to _/_

| Method                                                                          | HTTP request                        | Description                                         |
| ------------------------------------------------------------------------------- | ----------------------------------- | --------------------------------------------------- |
| [**deletePeriodoLongoItem**](PeriodoLongoApi.md#deletePeriodoLongoItem)         | **DELETE** /api/periodo_longos/{id} | Removes the PeriodoLongo resource.                  |
| [**getPeriodoLongoCollection**](PeriodoLongoApi.md#getPeriodoLongoCollection)   | **GET** /api/periodo_longos         | Retrieves the collection of PeriodoLongo resources. |
| [**getPeriodoLongoItem**](PeriodoLongoApi.md#getPeriodoLongoItem)               | **GET** /api/periodo_longos/{id}    | Retrieves a PeriodoLongo resource.                  |
| [**patchPeriodoLongoItem**](PeriodoLongoApi.md#patchPeriodoLongoItem)           | **PATCH** /api/periodo_longos/{id}  | Updates the PeriodoLongo resource.                  |
| [**postPeriodoLongoCollection**](PeriodoLongoApi.md#postPeriodoLongoCollection) | **POST** /api/periodo_longos        | Creates a PeriodoLongo resource.                    |
| [**putPeriodoLongoItem**](PeriodoLongoApi.md#putPeriodoLongoItem)               | **PUT** /api/periodo_longos/{id}    | Replaces the PeriodoLongo resource.                 |

<a name="deletePeriodoLongoItem"></a>

# **deletePeriodoLongoItem**

> deletePeriodoLongoItem(id)

Removes the PeriodoLongo resource.

Removes the PeriodoLongo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PeriodoLongoApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deletePeriodoLongoItem(id, (error, data, response) => {
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

<a name="getPeriodoLongoCollection"></a>

# **getPeriodoLongoCollection**

> InlineResponse20011 getPeriodoLongoCollection(opts)

Retrieves the collection of PeriodoLongo resources.

Retrieves the collection of PeriodoLongo resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PeriodoLongoApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getPeriodoLongoCollection(opts, (error, data, response) => {
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

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getPeriodoLongoItem"></a>

# **getPeriodoLongoItem**

> PeriodoLongoJsonld getPeriodoLongoItem(id)

Retrieves a PeriodoLongo resource.

Retrieves a PeriodoLongo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PeriodoLongoApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getPeriodoLongoItem(id, (error, data, response) => {
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

[**PeriodoLongoJsonld**](PeriodoLongoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchPeriodoLongoItem"></a>

# **patchPeriodoLongoItem**

> PeriodoLongoJsonld patchPeriodoLongoItem(body, id)

Updates the PeriodoLongo resource.

Updates the PeriodoLongo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PeriodoLongoApi();
let body = new SwaggerJsClient.PeriodoLongo(); // PeriodoLongo | The updated PeriodoLongo resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchPeriodoLongoItem(body, id, (error, data, response) => {
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
| **body** | [**PeriodoLongo**](PeriodoLongo.md) | The updated PeriodoLongo resource |
| **id**   | **String**                          | Resource identifier               |

### Return type

[**PeriodoLongoJsonld**](PeriodoLongoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postPeriodoLongoCollection"></a>

# **postPeriodoLongoCollection**

> PeriodoLongoJsonld postPeriodoLongoCollection(body)

Creates a PeriodoLongo resource.

Creates a PeriodoLongo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PeriodoLongoApi();
let body = new SwaggerJsClient.PeriodoLongoJsonld(); // PeriodoLongoJsonld | The new PeriodoLongo resource

apiInstance.postPeriodoLongoCollection(body, (error, data, response) => {
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
| **body** | [**PeriodoLongoJsonld**](PeriodoLongoJsonld.md) | The new PeriodoLongo resource |

### Return type

[**PeriodoLongoJsonld**](PeriodoLongoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putPeriodoLongoItem"></a>

# **putPeriodoLongoItem**

> PeriodoLongoJsonld putPeriodoLongoItem(body, id)

Replaces the PeriodoLongo resource.

Replaces the PeriodoLongo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PeriodoLongoApi();
let body = new SwaggerJsClient.PeriodoLongoJsonld(); // PeriodoLongoJsonld | The updated PeriodoLongo resource
let id = "id_example"; // String | Resource identifier

apiInstance.putPeriodoLongoItem(body, id, (error, data, response) => {
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
| **body** | [**PeriodoLongoJsonld**](PeriodoLongoJsonld.md) | The updated PeriodoLongo resource |
| **id**   | **String**                                      | Resource identifier               |

### Return type

[**PeriodoLongoJsonld**](PeriodoLongoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
