# SwaggerJsClient.DestinoApi

All URIs are relative to _/_

| Method                                                           | HTTP request                         | Description                                    |
| ---------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------- |
| [**deleteDestinoItem**](DestinoApi.md#deleteDestinoItem)         | **DELETE** /api/destinos/{idDestino} | Removes the Destino resource.                  |
| [**getDestinoCollection**](DestinoApi.md#getDestinoCollection)   | **GET** /api/destinos                | Retrieves the collection of Destino resources. |
| [**getDestinoItem**](DestinoApi.md#getDestinoItem)               | **GET** /api/destinos/{idDestino}    | Retrieves a Destino resource.                  |
| [**patchDestinoItem**](DestinoApi.md#patchDestinoItem)           | **PATCH** /api/destinos/{idDestino}  | Updates the Destino resource.                  |
| [**postDestinoCollection**](DestinoApi.md#postDestinoCollection) | **POST** /api/destinos               | Creates a Destino resource.                    |
| [**putDestinoItem**](DestinoApi.md#putDestinoItem)               | **PUT** /api/destinos/{idDestino}    | Replaces the Destino resource.                 |

<a name="deleteDestinoItem"></a>

# **deleteDestinoItem**

> deleteDestinoItem(idDestino)

Removes the Destino resource.

Removes the Destino resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.DestinoApi();
let idDestino = "idDestino_example"; // String | Resource identifier

apiInstance.deleteDestinoItem(idDestino, (error, data, response) => {
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
| **idDestino** | **String** | Resource identifier |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getDestinoCollection"></a>

# **getDestinoCollection**

> InlineResponse2005 getDestinoCollection(opts)

Retrieves the collection of Destino resources.

Retrieves the collection of Destino resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.DestinoApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getDestinoCollection(opts, (error, data, response) => {
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

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getDestinoItem"></a>

# **getDestinoItem**

> DestinoJsonld getDestinoItem(idDestino)

Retrieves a Destino resource.

Retrieves a Destino resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.DestinoApi();
let idDestino = "idDestino_example"; // String | Resource identifier

apiInstance.getDestinoItem(idDestino, (error, data, response) => {
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
| **idDestino** | **String** | Resource identifier |

### Return type

[**DestinoJsonld**](DestinoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchDestinoItem"></a>

# **patchDestinoItem**

> DestinoJsonld patchDestinoItem(body, idDestino)

Updates the Destino resource.

Updates the Destino resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.DestinoApi();
let body = new SwaggerJsClient.Destino(); // Destino | The updated Destino resource
let idDestino = "idDestino_example"; // String | Resource identifier

apiInstance.patchDestinoItem(body, idDestino, (error, data, response) => {
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
| **body**      | [**Destino**](Destino.md) | The updated Destino resource |
| **idDestino** | **String**                | Resource identifier          |

### Return type

[**DestinoJsonld**](DestinoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postDestinoCollection"></a>

# **postDestinoCollection**

> DestinoJsonld postDestinoCollection(body)

Creates a Destino resource.

Creates a Destino resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.DestinoApi();
let body = new SwaggerJsClient.DestinoJsonld(); // DestinoJsonld | The new Destino resource

apiInstance.postDestinoCollection(body, (error, data, response) => {
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
| **body** | [**DestinoJsonld**](DestinoJsonld.md) | The new Destino resource |

### Return type

[**DestinoJsonld**](DestinoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putDestinoItem"></a>

# **putDestinoItem**

> DestinoJsonld putDestinoItem(body, idDestino)

Replaces the Destino resource.

Replaces the Destino resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.DestinoApi();
let body = new SwaggerJsClient.DestinoJsonld(); // DestinoJsonld | The updated Destino resource
let idDestino = "idDestino_example"; // String | Resource identifier

apiInstance.putDestinoItem(body, idDestino, (error, data, response) => {
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
| **body**      | [**DestinoJsonld**](DestinoJsonld.md) | The updated Destino resource |
| **idDestino** | **String**                            | Resource identifier          |

### Return type

[**DestinoJsonld**](DestinoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
