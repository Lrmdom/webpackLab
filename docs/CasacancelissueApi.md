# SwaggerJsClient.CasacancelissueApi

All URIs are relative to _/_

| Method                                                                                   | HTTP request                          | Description                                            |
| ---------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------ |
| [**deleteCasacancelissueItem**](CasacancelissueApi.md#deleteCasacancelissueItem)         | **DELETE** /api/casacancelissues/{id} | Removes the Casacancelissue resource.                  |
| [**getCasacancelissueCollection**](CasacancelissueApi.md#getCasacancelissueCollection)   | **GET** /api/casacancelissues         | Retrieves the collection of Casacancelissue resources. |
| [**getCasacancelissueItem**](CasacancelissueApi.md#getCasacancelissueItem)               | **GET** /api/casacancelissues/{id}    | Retrieves a Casacancelissue resource.                  |
| [**patchCasacancelissueItem**](CasacancelissueApi.md#patchCasacancelissueItem)           | **PATCH** /api/casacancelissues/{id}  | Updates the Casacancelissue resource.                  |
| [**postCasacancelissueCollection**](CasacancelissueApi.md#postCasacancelissueCollection) | **POST** /api/casacancelissues        | Creates a Casacancelissue resource.                    |
| [**putCasacancelissueItem**](CasacancelissueApi.md#putCasacancelissueItem)               | **PUT** /api/casacancelissues/{id}    | Replaces the Casacancelissue resource.                 |

<a name="deleteCasacancelissueItem"></a>

# **deleteCasacancelissueItem**

> deleteCasacancelissueItem(id)

Removes the Casacancelissue resource.

Removes the Casacancelissue resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CasacancelissueApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteCasacancelissueItem(id, (error, data, response) => {
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

<a name="getCasacancelissueCollection"></a>

# **getCasacancelissueCollection**

> InlineResponse2001 getCasacancelissueCollection(opts)

Retrieves the collection of Casacancelissue resources.

Retrieves the collection of Casacancelissue resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CasacancelissueApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getCasacancelissueCollection(opts, (error, data, response) => {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getCasacancelissueItem"></a>

# **getCasacancelissueItem**

> CasacancelissueJsonld getCasacancelissueItem(id)

Retrieves a Casacancelissue resource.

Retrieves a Casacancelissue resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CasacancelissueApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getCasacancelissueItem(id, (error, data, response) => {
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

[**CasacancelissueJsonld**](CasacancelissueJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchCasacancelissueItem"></a>

# **patchCasacancelissueItem**

> CasacancelissueJsonld patchCasacancelissueItem(body, id)

Updates the Casacancelissue resource.

Updates the Casacancelissue resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CasacancelissueApi();
let body = new SwaggerJsClient.Casacancelissue(); // Casacancelissue | The updated Casacancelissue resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchCasacancelissueItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                      | Description                          | Notes |
| -------- | ----------------------------------------- | ------------------------------------ | ----- |
| **body** | [**Casacancelissue**](Casacancelissue.md) | The updated Casacancelissue resource |
| **id**   | **String**                                | Resource identifier                  |

### Return type

[**CasacancelissueJsonld**](CasacancelissueJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postCasacancelissueCollection"></a>

# **postCasacancelissueCollection**

> CasacancelissueJsonld postCasacancelissueCollection(body)

Creates a Casacancelissue resource.

Creates a Casacancelissue resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CasacancelissueApi();
let body = new SwaggerJsClient.CasacancelissueJsonld(); // CasacancelissueJsonld | The new Casacancelissue resource

apiInstance.postCasacancelissueCollection(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                                  | Description                      | Notes |
| -------- | ----------------------------------------------------- | -------------------------------- | ----- |
| **body** | [**CasacancelissueJsonld**](CasacancelissueJsonld.md) | The new Casacancelissue resource |

### Return type

[**CasacancelissueJsonld**](CasacancelissueJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putCasacancelissueItem"></a>

# **putCasacancelissueItem**

> CasacancelissueJsonld putCasacancelissueItem(body, id)

Replaces the Casacancelissue resource.

Replaces the Casacancelissue resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CasacancelissueApi();
let body = new SwaggerJsClient.CasacancelissueJsonld(); // CasacancelissueJsonld | The updated Casacancelissue resource
let id = "id_example"; // String | Resource identifier

apiInstance.putCasacancelissueItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                                  | Description                          | Notes |
| -------- | ----------------------------------------------------- | ------------------------------------ | ----- |
| **body** | [**CasacancelissueJsonld**](CasacancelissueJsonld.md) | The updated Casacancelissue resource |
| **id**   | **String**                                            | Resource identifier                  |

### Return type

[**CasacancelissueJsonld**](CasacancelissueJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
