# SwaggerJsClient.VisitaApi

All URIs are relative to _/_

| Method                                                        | HTTP request                 | Description                                   |
| ------------------------------------------------------------- | ---------------------------- | --------------------------------------------- |
| [**deleteVisitaItem**](VisitaApi.md#deleteVisitaItem)         | **DELETE** /api/visitas/{id} | Removes the Visita resource.                  |
| [**getVisitaCollection**](VisitaApi.md#getVisitaCollection)   | **GET** /api/visitas         | Retrieves the collection of Visita resources. |
| [**getVisitaItem**](VisitaApi.md#getVisitaItem)               | **GET** /api/visitas/{id}    | Retrieves a Visita resource.                  |
| [**patchVisitaItem**](VisitaApi.md#patchVisitaItem)           | **PATCH** /api/visitas/{id}  | Updates the Visita resource.                  |
| [**postVisitaCollection**](VisitaApi.md#postVisitaCollection) | **POST** /api/visitas        | Creates a Visita resource.                    |
| [**putVisitaItem**](VisitaApi.md#putVisitaItem)               | **PUT** /api/visitas/{id}    | Replaces the Visita resource.                 |

<a name="deleteVisitaItem"></a>

# **deleteVisitaItem**

> deleteVisitaItem(id)

Removes the Visita resource.

Removes the Visita resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.VisitaApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteVisitaItem(id, (error, data, response) => {
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

<a name="getVisitaCollection"></a>

# **getVisitaCollection**

> InlineResponse20024 getVisitaCollection(opts)

Retrieves the collection of Visita resources.

Retrieves the collection of Visita resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.VisitaApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getVisitaCollection(opts, (error, data, response) => {
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

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getVisitaItem"></a>

# **getVisitaItem**

> VisitaJsonld getVisitaItem(id)

Retrieves a Visita resource.

Retrieves a Visita resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.VisitaApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getVisitaItem(id, (error, data, response) => {
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

[**VisitaJsonld**](VisitaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchVisitaItem"></a>

# **patchVisitaItem**

> VisitaJsonld patchVisitaItem(body, id)

Updates the Visita resource.

Updates the Visita resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.VisitaApi();
let body = new SwaggerJsClient.Visita(); // Visita | The updated Visita resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchVisitaItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                    | Description                 | Notes |
| -------- | ----------------------- | --------------------------- | ----- |
| **body** | [**Visita**](Visita.md) | The updated Visita resource |
| **id**   | **String**              | Resource identifier         |

### Return type

[**VisitaJsonld**](VisitaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postVisitaCollection"></a>

# **postVisitaCollection**

> VisitaJsonld postVisitaCollection(body)

Creates a Visita resource.

Creates a Visita resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.VisitaApi();
let body = new SwaggerJsClient.VisitaJsonld(); // VisitaJsonld | The new Visita resource

apiInstance.postVisitaCollection(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                | Description             | Notes |
| -------- | ----------------------------------- | ----------------------- | ----- |
| **body** | [**VisitaJsonld**](VisitaJsonld.md) | The new Visita resource |

### Return type

[**VisitaJsonld**](VisitaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putVisitaItem"></a>

# **putVisitaItem**

> VisitaJsonld putVisitaItem(body, id)

Replaces the Visita resource.

Replaces the Visita resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.VisitaApi();
let body = new SwaggerJsClient.VisitaJsonld(); // VisitaJsonld | The updated Visita resource
let id = "id_example"; // String | Resource identifier

apiInstance.putVisitaItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                | Description                 | Notes |
| -------- | ----------------------------------- | --------------------------- | ----- |
| **body** | [**VisitaJsonld**](VisitaJsonld.md) | The updated Visita resource |
| **id**   | **String**                          | Resource identifier         |

### Return type

[**VisitaJsonld**](VisitaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
