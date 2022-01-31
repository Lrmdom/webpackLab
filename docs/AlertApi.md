# SwaggerJsClient.AlertApi

All URIs are relative to _/_

| Method                                                     | HTTP request                | Description                                  |
| ---------------------------------------------------------- | --------------------------- | -------------------------------------------- |
| [**deleteAlertItem**](AlertApi.md#deleteAlertItem)         | **DELETE** /api/alerts/{id} | Removes the Alert resource.                  |
| [**getAlertCollection**](AlertApi.md#getAlertCollection)   | **GET** /api/alerts         | Retrieves the collection of Alert resources. |
| [**getAlertItem**](AlertApi.md#getAlertItem)               | **GET** /api/alerts/{id}    | Retrieves a Alert resource.                  |
| [**patchAlertItem**](AlertApi.md#patchAlertItem)           | **PATCH** /api/alerts/{id}  | Updates the Alert resource.                  |
| [**postAlertCollection**](AlertApi.md#postAlertCollection) | **POST** /api/alerts        | Creates a Alert resource.                    |
| [**putAlertItem**](AlertApi.md#putAlertItem)               | **PUT** /api/alerts/{id}    | Replaces the Alert resource.                 |

<a name="deleteAlertItem"></a>

# **deleteAlertItem**

> deleteAlertItem(id)

Removes the Alert resource.

Removes the Alert resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.AlertApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteAlertItem(id, (error, data, response) => {
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

<a name="getAlertCollection"></a>

# **getAlertCollection**

> InlineResponse200 getAlertCollection(opts)

Retrieves the collection of Alert resources.

Retrieves the collection of Alert resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.AlertApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getAlertCollection(opts, (error, data, response) => {
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getAlertItem"></a>

# **getAlertItem**

> AlertJsonld getAlertItem(id)

Retrieves a Alert resource.

Retrieves a Alert resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.AlertApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getAlertItem(id, (error, data, response) => {
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

[**AlertJsonld**](AlertJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchAlertItem"></a>

# **patchAlertItem**

> AlertJsonld patchAlertItem(body, id)

Updates the Alert resource.

Updates the Alert resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.AlertApi();
let body = new SwaggerJsClient.Alert(); // Alert | The updated Alert resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchAlertItem(body, id, (error, data, response) => {
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
| **body** | [**Alert**](Alert.md) | The updated Alert resource |
| **id**   | **String**            | Resource identifier        |

### Return type

[**AlertJsonld**](AlertJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postAlertCollection"></a>

# **postAlertCollection**

> AlertJsonld postAlertCollection(body)

Creates a Alert resource.

Creates a Alert resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.AlertApi();
let body = new SwaggerJsClient.AlertJsonld(); // AlertJsonld | The new Alert resource

apiInstance.postAlertCollection(body, (error, data, response) => {
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
| **body** | [**AlertJsonld**](AlertJsonld.md) | The new Alert resource |

### Return type

[**AlertJsonld**](AlertJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putAlertItem"></a>

# **putAlertItem**

> AlertJsonld putAlertItem(body, id)

Replaces the Alert resource.

Replaces the Alert resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.AlertApi();
let body = new SwaggerJsClient.AlertJsonld(); // AlertJsonld | The updated Alert resource
let id = "id_example"; // String | Resource identifier

apiInstance.putAlertItem(body, id, (error, data, response) => {
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
| **body** | [**AlertJsonld**](AlertJsonld.md) | The updated Alert resource |
| **id**   | **String**                        | Resource identifier        |

### Return type

[**AlertJsonld**](AlertJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
