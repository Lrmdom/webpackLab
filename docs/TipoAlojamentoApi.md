# SwaggerJsClient.TipoAlojamentoApi

All URIs are relative to _/_

| Method                                                                                | HTTP request                                        | Description                                           |
| ------------------------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| [**deleteTipoAlojamentoItem**](TipoAlojamentoApi.md#deleteTipoAlojamentoItem)         | **DELETE** /api/tipo_alojamentos/{idTipoAlojamento} | Removes the TipoAlojamento resource.                  |
| [**getTipoAlojamentoCollection**](TipoAlojamentoApi.md#getTipoAlojamentoCollection)   | **GET** /api/tipo_alojamentos                       | Retrieves the collection of TipoAlojamento resources. |
| [**getTipoAlojamentoItem**](TipoAlojamentoApi.md#getTipoAlojamentoItem)               | **GET** /api/tipo_alojamentos/{idTipoAlojamento}    | Retrieves a TipoAlojamento resource.                  |
| [**patchTipoAlojamentoItem**](TipoAlojamentoApi.md#patchTipoAlojamentoItem)           | **PATCH** /api/tipo_alojamentos/{idTipoAlojamento}  | Updates the TipoAlojamento resource.                  |
| [**postTipoAlojamentoCollection**](TipoAlojamentoApi.md#postTipoAlojamentoCollection) | **POST** /api/tipo_alojamentos                      | Creates a TipoAlojamento resource.                    |
| [**putTipoAlojamentoItem**](TipoAlojamentoApi.md#putTipoAlojamentoItem)               | **PUT** /api/tipo_alojamentos/{idTipoAlojamento}    | Replaces the TipoAlojamento resource.                 |

<a name="deleteTipoAlojamentoItem"></a>

# **deleteTipoAlojamentoItem**

> deleteTipoAlojamentoItem(idTipoAlojamento)

Removes the TipoAlojamento resource.

Removes the TipoAlojamento resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoAlojamentoApi();
let idTipoAlojamento = "idTipoAlojamento_example"; // String | Resource identifier

apiInstance.deleteTipoAlojamentoItem(
  idTipoAlojamento,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully.");
    }
  }
);
```

### Parameters

| Name                 | Type       | Description         | Notes |
| -------------------- | ---------- | ------------------- | ----- |
| **idTipoAlojamento** | **String** | Resource identifier |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getTipoAlojamentoCollection"></a>

# **getTipoAlojamentoCollection**

> InlineResponse20021 getTipoAlojamentoCollection(opts)

Retrieves the collection of TipoAlojamento resources.

Retrieves the collection of TipoAlojamento resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoAlojamentoApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getTipoAlojamentoCollection(opts, (error, data, response) => {
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

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getTipoAlojamentoItem"></a>

# **getTipoAlojamentoItem**

> TipoAlojamentoJsonld getTipoAlojamentoItem(idTipoAlojamento)

Retrieves a TipoAlojamento resource.

Retrieves a TipoAlojamento resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoAlojamentoApi();
let idTipoAlojamento = "idTipoAlojamento_example"; // String | Resource identifier

apiInstance.getTipoAlojamentoItem(idTipoAlojamento, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name                 | Type       | Description         | Notes |
| -------------------- | ---------- | ------------------- | ----- |
| **idTipoAlojamento** | **String** | Resource identifier |

### Return type

[**TipoAlojamentoJsonld**](TipoAlojamentoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchTipoAlojamentoItem"></a>

# **patchTipoAlojamentoItem**

> TipoAlojamentoJsonld patchTipoAlojamentoItem(body, idTipoAlojamento)

Updates the TipoAlojamento resource.

Updates the TipoAlojamento resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoAlojamentoApi();
let body = new SwaggerJsClient.TipoAlojamento(); // TipoAlojamento | The updated TipoAlojamento resource
let idTipoAlojamento = "idTipoAlojamento_example"; // String | Resource identifier

apiInstance.patchTipoAlojamentoItem(
  body,
  idTipoAlojamento,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  }
);
```

### Parameters

| Name                 | Type                                    | Description                         | Notes |
| -------------------- | --------------------------------------- | ----------------------------------- | ----- |
| **body**             | [**TipoAlojamento**](TipoAlojamento.md) | The updated TipoAlojamento resource |
| **idTipoAlojamento** | **String**                              | Resource identifier                 |

### Return type

[**TipoAlojamentoJsonld**](TipoAlojamentoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postTipoAlojamentoCollection"></a>

# **postTipoAlojamentoCollection**

> TipoAlojamentoJsonld postTipoAlojamentoCollection(body)

Creates a TipoAlojamento resource.

Creates a TipoAlojamento resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoAlojamentoApi();
let body = new SwaggerJsClient.TipoAlojamentoJsonld(); // TipoAlojamentoJsonld | The new TipoAlojamento resource

apiInstance.postTipoAlojamentoCollection(body, (error, data, response) => {
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
| **body** | [**TipoAlojamentoJsonld**](TipoAlojamentoJsonld.md) | The new TipoAlojamento resource |

### Return type

[**TipoAlojamentoJsonld**](TipoAlojamentoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putTipoAlojamentoItem"></a>

# **putTipoAlojamentoItem**

> TipoAlojamentoJsonld putTipoAlojamentoItem(body, idTipoAlojamento)

Replaces the TipoAlojamento resource.

Replaces the TipoAlojamento resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoAlojamentoApi();
let body = new SwaggerJsClient.TipoAlojamentoJsonld(); // TipoAlojamentoJsonld | The updated TipoAlojamento resource
let idTipoAlojamento = "idTipoAlojamento_example"; // String | Resource identifier

apiInstance.putTipoAlojamentoItem(
  body,
  idTipoAlojamento,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  }
);
```

### Parameters

| Name                 | Type                                                | Description                         | Notes |
| -------------------- | --------------------------------------------------- | ----------------------------------- | ----- |
| **body**             | [**TipoAlojamentoJsonld**](TipoAlojamentoJsonld.md) | The updated TipoAlojamento resource |
| **idTipoAlojamento** | **String**                                          | Resource identifier                 |

### Return type

[**TipoAlojamentoJsonld**](TipoAlojamentoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
