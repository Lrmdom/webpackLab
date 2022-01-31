# SwaggerJsClient.MessageApi

All URIs are relative to _/_

| Method                                                           | HTTP request                  | Description                                    |
| ---------------------------------------------------------------- | ----------------------------- | ---------------------------------------------- |
| [**deleteMessageItem**](MessageApi.md#deleteMessageItem)         | **DELETE** /api/messages/{id} | Removes the Message resource.                  |
| [**getMessageCollection**](MessageApi.md#getMessageCollection)   | **GET** /api/messages         | Retrieves the collection of Message resources. |
| [**getMessageItem**](MessageApi.md#getMessageItem)               | **GET** /api/messages/{id}    | Retrieves a Message resource.                  |
| [**patchMessageItem**](MessageApi.md#patchMessageItem)           | **PATCH** /api/messages/{id}  | Updates the Message resource.                  |
| [**postMessageCollection**](MessageApi.md#postMessageCollection) | **POST** /api/messages        | Creates a Message resource.                    |
| [**putMessageItem**](MessageApi.md#putMessageItem)               | **PUT** /api/messages/{id}    | Replaces the Message resource.                 |

<a name="deleteMessageItem"></a>

# **deleteMessageItem**

> deleteMessageItem(id)

Removes the Message resource.

Removes the Message resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.MessageApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteMessageItem(id, (error, data, response) => {
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

<a name="getMessageCollection"></a>

# **getMessageCollection**

> InlineResponse2009 getMessageCollection(opts)

Retrieves the collection of Message resources.

Retrieves the collection of Message resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.MessageApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getMessageCollection(opts, (error, data, response) => {
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

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getMessageItem"></a>

# **getMessageItem**

> MessageJsonld getMessageItem(id)

Retrieves a Message resource.

Retrieves a Message resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.MessageApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getMessageItem(id, (error, data, response) => {
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

[**MessageJsonld**](MessageJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchMessageItem"></a>

# **patchMessageItem**

> MessageJsonld patchMessageItem(body, id)

Updates the Message resource.

Updates the Message resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.MessageApi();
let body = new SwaggerJsClient.Message(); // Message | The updated Message resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchMessageItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                      | Description                  | Notes |
| -------- | ------------------------- | ---------------------------- | ----- |
| **body** | [**Message**](Message.md) | The updated Message resource |
| **id**   | **String**                | Resource identifier          |

### Return type

[**MessageJsonld**](MessageJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postMessageCollection"></a>

# **postMessageCollection**

> MessageJsonld postMessageCollection(body)

Creates a Message resource.

Creates a Message resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.MessageApi();
let body = new SwaggerJsClient.MessageJsonld(); // MessageJsonld | The new Message resource

apiInstance.postMessageCollection(body, (error, data, response) => {
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
| **body** | [**MessageJsonld**](MessageJsonld.md) | The new Message resource |

### Return type

[**MessageJsonld**](MessageJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putMessageItem"></a>

# **putMessageItem**

> MessageJsonld putMessageItem(body, id)

Replaces the Message resource.

Replaces the Message resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.MessageApi();
let body = new SwaggerJsClient.MessageJsonld(); // MessageJsonld | The updated Message resource
let id = "id_example"; // String | Resource identifier

apiInstance.putMessageItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                  | Description                  | Notes |
| -------- | ------------------------------------- | ---------------------------- | ----- |
| **body** | [**MessageJsonld**](MessageJsonld.md) | The updated Message resource |
| **id**   | **String**                            | Resource identifier          |

### Return type

[**MessageJsonld**](MessageJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
