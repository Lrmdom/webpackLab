# SwaggerJsClient.CasaApi

All URIs are relative to _/_

| Method                                                  | HTTP request                    | Description                                 |
| ------------------------------------------------------- | ------------------------------- | ------------------------------------------- |
| [**deleteCasaItem**](CasaApi.md#deleteCasaItem)         | **DELETE** /api/casas/{codCasa} | Removes the Casa resource.                  |
| [**getCasaCollection**](CasaApi.md#getCasaCollection)   | **GET** /api/casas              | Retrieves the collection of Casa resources. |
| [**getCasaItem**](CasaApi.md#getCasaItem)               | **GET** /api/casas/{codCasa}    | Retrieves a Casa resource.                  |
| [**patchCasaItem**](CasaApi.md#patchCasaItem)           | **PATCH** /api/casas/{codCasa}  | Updates the Casa resource.                  |
| [**postCasaCollection**](CasaApi.md#postCasaCollection) | **POST** /api/casas             | Creates a Casa resource.                    |
| [**putCasaItem**](CasaApi.md#putCasaItem)               | **PUT** /api/casas/{codCasa}    | Replaces the Casa resource.                 |

<a name="deleteCasaItem"></a>

# **deleteCasaItem**

> deleteCasaItem(codCasa)

Removes the Casa resource.

Removes the Casa resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CasaApi();
let codCasa = "codCasa_example"; // String | Resource identifier

apiInstance.deleteCasaItem(codCasa, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
});
```

### Parameters

| Name        | Type       | Description         | Notes |
| ----------- | ---------- | ------------------- | ----- |
| **codCasa** | **String** | Resource identifier |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getCasaCollection"></a>

# **getCasaCollection**

> InlineResponse2002 getCasaCollection(opts)

Retrieves the collection of Casa resources.

Retrieves the collection of Casa resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CasaApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getCasaCollection(opts, (error, data, response) => {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getCasaItem"></a>

# **getCasaItem**

> CasaJsonld getCasaItem(codCasa)

Retrieves a Casa resource.

Retrieves a Casa resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CasaApi();
let codCasa = "codCasa_example"; // String | Resource identifier

apiInstance.getCasaItem(codCasa, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name        | Type       | Description         | Notes |
| ----------- | ---------- | ------------------- | ----- |
| **codCasa** | **String** | Resource identifier |

### Return type

[**CasaJsonld**](CasaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchCasaItem"></a>

# **patchCasaItem**

> CasaJsonld patchCasaItem(body, codCasa)

Updates the Casa resource.

Updates the Casa resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CasaApi();
let body = new SwaggerJsClient.Casa(); // Casa | The updated Casa resource
let codCasa = "codCasa_example"; // String | Resource identifier

apiInstance.patchCasaItem(body, codCasa, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name        | Type                | Description               | Notes |
| ----------- | ------------------- | ------------------------- | ----- |
| **body**    | [**Casa**](Casa.md) | The updated Casa resource |
| **codCasa** | **String**          | Resource identifier       |

### Return type

[**CasaJsonld**](CasaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postCasaCollection"></a>

# **postCasaCollection**

> CasaJsonld postCasaCollection(body)

Creates a Casa resource.

Creates a Casa resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CasaApi();
let body = new SwaggerJsClient.CasaJsonld(); // CasaJsonld | The new Casa resource

apiInstance.postCasaCollection(body, (error, data, response) => {
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
| **body** | [**CasaJsonld**](CasaJsonld.md) | The new Casa resource |

### Return type

[**CasaJsonld**](CasaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putCasaItem"></a>

# **putCasaItem**

> CasaJsonld putCasaItem(body, codCasa)

Replaces the Casa resource.

Replaces the Casa resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CasaApi();
let body = new SwaggerJsClient.CasaJsonld(); // CasaJsonld | The updated Casa resource
let codCasa = "codCasa_example"; // String | Resource identifier

apiInstance.putCasaItem(body, codCasa, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name        | Type                            | Description               | Notes |
| ----------- | ------------------------------- | ------------------------- | ----- |
| **body**    | [**CasaJsonld**](CasaJsonld.md) | The updated Casa resource |
| **codCasa** | **String**                      | Resource identifier       |

### Return type

[**CasaJsonld**](CasaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
