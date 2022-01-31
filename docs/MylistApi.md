# SwaggerJsClient.MylistApi

All URIs are relative to _/_

| Method                                                        | HTTP request                 | Description                                   |
| ------------------------------------------------------------- | ---------------------------- | --------------------------------------------- |
| [**deleteMylistItem**](MylistApi.md#deleteMylistItem)         | **DELETE** /api/mylists/{id} | Removes the Mylist resource.                  |
| [**getMylistCollection**](MylistApi.md#getMylistCollection)   | **GET** /api/mylists         | Retrieves the collection of Mylist resources. |
| [**getMylistItem**](MylistApi.md#getMylistItem)               | **GET** /api/mylists/{id}    | Retrieves a Mylist resource.                  |
| [**patchMylistItem**](MylistApi.md#patchMylistItem)           | **PATCH** /api/mylists/{id}  | Updates the Mylist resource.                  |
| [**postMylistCollection**](MylistApi.md#postMylistCollection) | **POST** /api/mylists        | Creates a Mylist resource.                    |
| [**putMylistItem**](MylistApi.md#putMylistItem)               | **PUT** /api/mylists/{id}    | Replaces the Mylist resource.                 |

<a name="deleteMylistItem"></a>

# **deleteMylistItem**

> deleteMylistItem(id)

Removes the Mylist resource.

Removes the Mylist resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.MylistApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteMylistItem(id, (error, data, response) => {
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

<a name="getMylistCollection"></a>

# **getMylistCollection**

> InlineResponse20010 getMylistCollection(opts)

Retrieves the collection of Mylist resources.

Retrieves the collection of Mylist resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.MylistApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getMylistCollection(opts, (error, data, response) => {
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

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getMylistItem"></a>

# **getMylistItem**

> MylistJsonld getMylistItem(id)

Retrieves a Mylist resource.

Retrieves a Mylist resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.MylistApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getMylistItem(id, (error, data, response) => {
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

[**MylistJsonld**](MylistJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchMylistItem"></a>

# **patchMylistItem**

> MylistJsonld patchMylistItem(body, id)

Updates the Mylist resource.

Updates the Mylist resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.MylistApi();
let body = new SwaggerJsClient.Mylist(); // Mylist | The updated Mylist resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchMylistItem(body, id, (error, data, response) => {
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
| **body** | [**Mylist**](Mylist.md) | The updated Mylist resource |
| **id**   | **String**              | Resource identifier         |

### Return type

[**MylistJsonld**](MylistJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postMylistCollection"></a>

# **postMylistCollection**

> MylistJsonld postMylistCollection(body)

Creates a Mylist resource.

Creates a Mylist resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.MylistApi();
let body = new SwaggerJsClient.MylistJsonld(); // MylistJsonld | The new Mylist resource

apiInstance.postMylistCollection(body, (error, data, response) => {
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
| **body** | [**MylistJsonld**](MylistJsonld.md) | The new Mylist resource |

### Return type

[**MylistJsonld**](MylistJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putMylistItem"></a>

# **putMylistItem**

> MylistJsonld putMylistItem(body, id)

Replaces the Mylist resource.

Replaces the Mylist resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.MylistApi();
let body = new SwaggerJsClient.MylistJsonld(); // MylistJsonld | The updated Mylist resource
let id = "id_example"; // String | Resource identifier

apiInstance.putMylistItem(body, id, (error, data, response) => {
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
| **body** | [**MylistJsonld**](MylistJsonld.md) | The updated Mylist resource |
| **id**   | **String**                          | Resource identifier         |

### Return type

[**MylistJsonld**](MylistJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
