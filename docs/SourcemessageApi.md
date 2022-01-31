# SwaggerJsClient.SourcemessageApi

All URIs are relative to _/_

| Method                                                                             | HTTP request                        | Description                                          |
| ---------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------------- |
| [**deleteSourcemessageItem**](SourcemessageApi.md#deleteSourcemessageItem)         | **DELETE** /api/sourcemessages/{id} | Removes the Sourcemessage resource.                  |
| [**getSourcemessageCollection**](SourcemessageApi.md#getSourcemessageCollection)   | **GET** /api/sourcemessages         | Retrieves the collection of Sourcemessage resources. |
| [**getSourcemessageItem**](SourcemessageApi.md#getSourcemessageItem)               | **GET** /api/sourcemessages/{id}    | Retrieves a Sourcemessage resource.                  |
| [**patchSourcemessageItem**](SourcemessageApi.md#patchSourcemessageItem)           | **PATCH** /api/sourcemessages/{id}  | Updates the Sourcemessage resource.                  |
| [**postSourcemessageCollection**](SourcemessageApi.md#postSourcemessageCollection) | **POST** /api/sourcemessages        | Creates a Sourcemessage resource.                    |
| [**putSourcemessageItem**](SourcemessageApi.md#putSourcemessageItem)               | **PUT** /api/sourcemessages/{id}    | Replaces the Sourcemessage resource.                 |

<a name="deleteSourcemessageItem"></a>

# **deleteSourcemessageItem**

> deleteSourcemessageItem(id)

Removes the Sourcemessage resource.

Removes the Sourcemessage resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.SourcemessageApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteSourcemessageItem(id, (error, data, response) => {
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

<a name="getSourcemessageCollection"></a>

# **getSourcemessageCollection**

> InlineResponse20020 getSourcemessageCollection(opts)

Retrieves the collection of Sourcemessage resources.

Retrieves the collection of Sourcemessage resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.SourcemessageApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getSourcemessageCollection(opts, (error, data, response) => {
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

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getSourcemessageItem"></a>

# **getSourcemessageItem**

> SourcemessageJsonld getSourcemessageItem(id)

Retrieves a Sourcemessage resource.

Retrieves a Sourcemessage resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.SourcemessageApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getSourcemessageItem(id, (error, data, response) => {
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

[**SourcemessageJsonld**](SourcemessageJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchSourcemessageItem"></a>

# **patchSourcemessageItem**

> SourcemessageJsonld patchSourcemessageItem(body, id)

Updates the Sourcemessage resource.

Updates the Sourcemessage resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.SourcemessageApi();
let body = new SwaggerJsClient.Sourcemessage(); // Sourcemessage | The updated Sourcemessage resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchSourcemessageItem(body, id, (error, data, response) => {
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
| **body** | [**Sourcemessage**](Sourcemessage.md) | The updated Sourcemessage resource |
| **id**   | **String**                            | Resource identifier                |

### Return type

[**SourcemessageJsonld**](SourcemessageJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postSourcemessageCollection"></a>

# **postSourcemessageCollection**

> SourcemessageJsonld postSourcemessageCollection(body)

Creates a Sourcemessage resource.

Creates a Sourcemessage resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.SourcemessageApi();
let body = new SwaggerJsClient.SourcemessageJsonld(); // SourcemessageJsonld | The new Sourcemessage resource

apiInstance.postSourcemessageCollection(body, (error, data, response) => {
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
| **body** | [**SourcemessageJsonld**](SourcemessageJsonld.md) | The new Sourcemessage resource |

### Return type

[**SourcemessageJsonld**](SourcemessageJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putSourcemessageItem"></a>

# **putSourcemessageItem**

> SourcemessageJsonld putSourcemessageItem(body, id)

Replaces the Sourcemessage resource.

Replaces the Sourcemessage resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.SourcemessageApi();
let body = new SwaggerJsClient.SourcemessageJsonld(); // SourcemessageJsonld | The updated Sourcemessage resource
let id = "id_example"; // String | Resource identifier

apiInstance.putSourcemessageItem(body, id, (error, data, response) => {
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
| **body** | [**SourcemessageJsonld**](SourcemessageJsonld.md) | The updated Sourcemessage resource |
| **id**   | **String**                                        | Resource identifier                |

### Return type

[**SourcemessageJsonld**](SourcemessageJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
