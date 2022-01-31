# SwaggerJsClient.TipoApi

All URIs are relative to _/_

| Method                                                  | HTTP request                   | Description                                 |
| ------------------------------------------------------- | ------------------------------ | ------------------------------------------- |
| [**deleteTipoItem**](TipoApi.md#deleteTipoItem)         | **DELETE** /api/tipos/{idTipo} | Removes the Tipo resource.                  |
| [**getTipoCollection**](TipoApi.md#getTipoCollection)   | **GET** /api/tipos             | Retrieves the collection of Tipo resources. |
| [**getTipoItem**](TipoApi.md#getTipoItem)               | **GET** /api/tipos/{idTipo}    | Retrieves a Tipo resource.                  |
| [**patchTipoItem**](TipoApi.md#patchTipoItem)           | **PATCH** /api/tipos/{idTipo}  | Updates the Tipo resource.                  |
| [**postTipoCollection**](TipoApi.md#postTipoCollection) | **POST** /api/tipos            | Creates a Tipo resource.                    |
| [**putTipoItem**](TipoApi.md#putTipoItem)               | **PUT** /api/tipos/{idTipo}    | Replaces the Tipo resource.                 |

<a name="deleteTipoItem"></a>

# **deleteTipoItem**

> deleteTipoItem(idTipo)

Removes the Tipo resource.

Removes the Tipo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoApi();
let idTipo = "idTipo_example"; // String | Resource identifier

apiInstance.deleteTipoItem(idTipo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
});
```

### Parameters

| Name       | Type       | Description         | Notes |
| ---------- | ---------- | ------------------- | ----- |
| **idTipo** | **String** | Resource identifier |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getTipoCollection"></a>

# **getTipoCollection**

> InlineResponse20023 getTipoCollection(opts)

Retrieves the collection of Tipo resources.

Retrieves the collection of Tipo resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getTipoCollection(opts, (error, data, response) => {
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

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getTipoItem"></a>

# **getTipoItem**

> TipoJsonld getTipoItem(idTipo)

Retrieves a Tipo resource.

Retrieves a Tipo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoApi();
let idTipo = "idTipo_example"; // String | Resource identifier

apiInstance.getTipoItem(idTipo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name       | Type       | Description         | Notes |
| ---------- | ---------- | ------------------- | ----- |
| **idTipo** | **String** | Resource identifier |

### Return type

[**TipoJsonld**](TipoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchTipoItem"></a>

# **patchTipoItem**

> TipoJsonld patchTipoItem(body, idTipo)

Updates the Tipo resource.

Updates the Tipo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoApi();
let body = new SwaggerJsClient.Tipo(); // Tipo | The updated Tipo resource
let idTipo = "idTipo_example"; // String | Resource identifier

apiInstance.patchTipoItem(body, idTipo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name       | Type                | Description               | Notes |
| ---------- | ------------------- | ------------------------- | ----- |
| **body**   | [**Tipo**](Tipo.md) | The updated Tipo resource |
| **idTipo** | **String**          | Resource identifier       |

### Return type

[**TipoJsonld**](TipoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postTipoCollection"></a>

# **postTipoCollection**

> TipoJsonld postTipoCollection(body)

Creates a Tipo resource.

Creates a Tipo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoApi();
let body = new SwaggerJsClient.TipoJsonld(); // TipoJsonld | The new Tipo resource

apiInstance.postTipoCollection(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                            | Description           | Notes |
| -------- | ------------------------------- | --------------------- | ----- |
| **body** | [**TipoJsonld**](TipoJsonld.md) | The new Tipo resource |

### Return type

[**TipoJsonld**](TipoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putTipoItem"></a>

# **putTipoItem**

> TipoJsonld putTipoItem(body, idTipo)

Replaces the Tipo resource.

Replaces the Tipo resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoApi();
let body = new SwaggerJsClient.TipoJsonld(); // TipoJsonld | The updated Tipo resource
let idTipo = "idTipo_example"; // String | Resource identifier

apiInstance.putTipoItem(body, idTipo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name       | Type                            | Description               | Notes |
| ---------- | ------------------------------- | ------------------------- | ----- |
| **body**   | [**TipoJsonld**](TipoJsonld.md) | The updated Tipo resource |
| **idTipo** | **String**                      | Resource identifier       |

### Return type

[**TipoJsonld**](TipoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
