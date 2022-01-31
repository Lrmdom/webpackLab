# SwaggerJsClient.TipoPagamentoApi

All URIs are relative to _/_

| Method                                                                             | HTTP request                         | Description                                          |
| ---------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------------- |
| [**deleteTipoPagamentoItem**](TipoPagamentoApi.md#deleteTipoPagamentoItem)         | **DELETE** /api/tipo_pagamentos/{id} | Removes the TipoPagamento resource.                  |
| [**getTipoPagamentoCollection**](TipoPagamentoApi.md#getTipoPagamentoCollection)   | **GET** /api/tipo_pagamentos         | Retrieves the collection of TipoPagamento resources. |
| [**getTipoPagamentoItem**](TipoPagamentoApi.md#getTipoPagamentoItem)               | **GET** /api/tipo_pagamentos/{id}    | Retrieves a TipoPagamento resource.                  |
| [**patchTipoPagamentoItem**](TipoPagamentoApi.md#patchTipoPagamentoItem)           | **PATCH** /api/tipo_pagamentos/{id}  | Updates the TipoPagamento resource.                  |
| [**postTipoPagamentoCollection**](TipoPagamentoApi.md#postTipoPagamentoCollection) | **POST** /api/tipo_pagamentos        | Creates a TipoPagamento resource.                    |
| [**putTipoPagamentoItem**](TipoPagamentoApi.md#putTipoPagamentoItem)               | **PUT** /api/tipo_pagamentos/{id}    | Replaces the TipoPagamento resource.                 |

<a name="deleteTipoPagamentoItem"></a>

# **deleteTipoPagamentoItem**

> deleteTipoPagamentoItem(id)

Removes the TipoPagamento resource.

Removes the TipoPagamento resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoPagamentoApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteTipoPagamentoItem(id, (error, data, response) => {
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

<a name="getTipoPagamentoCollection"></a>

# **getTipoPagamentoCollection**

> InlineResponse20022 getTipoPagamentoCollection(opts)

Retrieves the collection of TipoPagamento resources.

Retrieves the collection of TipoPagamento resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoPagamentoApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getTipoPagamentoCollection(opts, (error, data, response) => {
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

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getTipoPagamentoItem"></a>

# **getTipoPagamentoItem**

> TipoPagamentoJsonld getTipoPagamentoItem(id)

Retrieves a TipoPagamento resource.

Retrieves a TipoPagamento resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoPagamentoApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getTipoPagamentoItem(id, (error, data, response) => {
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

[**TipoPagamentoJsonld**](TipoPagamentoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchTipoPagamentoItem"></a>

# **patchTipoPagamentoItem**

> TipoPagamentoJsonld patchTipoPagamentoItem(body, id)

Updates the TipoPagamento resource.

Updates the TipoPagamento resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoPagamentoApi();
let body = new SwaggerJsClient.TipoPagamento(); // TipoPagamento | The updated TipoPagamento resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchTipoPagamentoItem(body, id, (error, data, response) => {
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
| **body** | [**TipoPagamento**](TipoPagamento.md) | The updated TipoPagamento resource |
| **id**   | **String**                            | Resource identifier                |

### Return type

[**TipoPagamentoJsonld**](TipoPagamentoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postTipoPagamentoCollection"></a>

# **postTipoPagamentoCollection**

> TipoPagamentoJsonld postTipoPagamentoCollection(body)

Creates a TipoPagamento resource.

Creates a TipoPagamento resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoPagamentoApi();
let body = new SwaggerJsClient.TipoPagamentoJsonld(); // TipoPagamentoJsonld | The new TipoPagamento resource

apiInstance.postTipoPagamentoCollection(body, (error, data, response) => {
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
| **body** | [**TipoPagamentoJsonld**](TipoPagamentoJsonld.md) | The new TipoPagamento resource |

### Return type

[**TipoPagamentoJsonld**](TipoPagamentoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putTipoPagamentoItem"></a>

# **putTipoPagamentoItem**

> TipoPagamentoJsonld putTipoPagamentoItem(body, id)

Replaces the TipoPagamento resource.

Replaces the TipoPagamento resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.TipoPagamentoApi();
let body = new SwaggerJsClient.TipoPagamentoJsonld(); // TipoPagamentoJsonld | The updated TipoPagamento resource
let id = "id_example"; // String | Resource identifier

apiInstance.putTipoPagamentoItem(body, id, (error, data, response) => {
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
| **body** | [**TipoPagamentoJsonld**](TipoPagamentoJsonld.md) | The updated TipoPagamento resource |
| **id**   | **String**                                        | Resource identifier                |

### Return type

[**TipoPagamentoJsonld**](TipoPagamentoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
