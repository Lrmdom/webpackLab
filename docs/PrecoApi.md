# SwaggerJsClient.PrecoApi

All URIs are relative to _/_

| Method                                                     | HTTP request                | Description                                  |
| ---------------------------------------------------------- | --------------------------- | -------------------------------------------- |
| [**deletePrecoItem**](PrecoApi.md#deletePrecoItem)         | **DELETE** /api/precos/{id} | Removes the Preco resource.                  |
| [**getPrecoCollection**](PrecoApi.md#getPrecoCollection)   | **GET** /api/precos         | Retrieves the collection of Preco resources. |
| [**getPrecoItem**](PrecoApi.md#getPrecoItem)               | **GET** /api/precos/{id}    | Retrieves a Preco resource.                  |
| [**patchPrecoItem**](PrecoApi.md#patchPrecoItem)           | **PATCH** /api/precos/{id}  | Updates the Preco resource.                  |
| [**postPrecoCollection**](PrecoApi.md#postPrecoCollection) | **POST** /api/precos        | Creates a Preco resource.                    |
| [**putPrecoItem**](PrecoApi.md#putPrecoItem)               | **PUT** /api/precos/{id}    | Replaces the Preco resource.                 |

<a name="deletePrecoItem"></a>

# **deletePrecoItem**

> deletePrecoItem(id)

Removes the Preco resource.

Removes the Preco resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PrecoApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deletePrecoItem(id, (error, data, response) => {
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

<a name="getPrecoCollection"></a>

# **getPrecoCollection**

> InlineResponse20013 getPrecoCollection(opts)

Retrieves the collection of Preco resources.

Retrieves the collection of Preco resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PrecoApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getPrecoCollection(opts, (error, data, response) => {
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

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getPrecoItem"></a>

# **getPrecoItem**

> PrecoJsonld getPrecoItem(id)

Retrieves a Preco resource.

Retrieves a Preco resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PrecoApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getPrecoItem(id, (error, data, response) => {
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

[**PrecoJsonld**](PrecoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchPrecoItem"></a>

# **patchPrecoItem**

> PrecoJsonld patchPrecoItem(body, id)

Updates the Preco resource.

Updates the Preco resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PrecoApi();
let body = new SwaggerJsClient.Preco(); // Preco | The updated Preco resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchPrecoItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                  | Description                | Notes |
| -------- | --------------------- | -------------------------- | ----- |
| **body** | [**Preco**](Preco.md) | The updated Preco resource |
| **id**   | **String**            | Resource identifier        |

### Return type

[**PrecoJsonld**](PrecoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postPrecoCollection"></a>

# **postPrecoCollection**

> PrecoJsonld postPrecoCollection(body)

Creates a Preco resource.

Creates a Preco resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PrecoApi();
let body = new SwaggerJsClient.PrecoJsonld(); // PrecoJsonld | The new Preco resource

apiInstance.postPrecoCollection(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                              | Description            | Notes |
| -------- | --------------------------------- | ---------------------- | ----- |
| **body** | [**PrecoJsonld**](PrecoJsonld.md) | The new Preco resource |

### Return type

[**PrecoJsonld**](PrecoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putPrecoItem"></a>

# **putPrecoItem**

> PrecoJsonld putPrecoItem(body, id)

Replaces the Preco resource.

Replaces the Preco resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PrecoApi();
let body = new SwaggerJsClient.PrecoJsonld(); // PrecoJsonld | The updated Preco resource
let id = "id_example"; // String | Resource identifier

apiInstance.putPrecoItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                              | Description                | Notes |
| -------- | --------------------------------- | -------------------------- | ----- |
| **body** | [**PrecoJsonld**](PrecoJsonld.md) | The updated Preco resource |
| **id**   | **String**                        | Resource identifier        |

### Return type

[**PrecoJsonld**](PrecoJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
