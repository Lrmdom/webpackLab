# SwaggerJsClient.FeedbackcomentApi

All URIs are relative to _/_

| Method                                                                                | HTTP request                         | Description                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------- |
| [**deleteFeedbackcomentItem**](FeedbackcomentApi.md#deleteFeedbackcomentItem)         | **DELETE** /api/feedbackcoments/{id} | Removes the Feedbackcoment resource.                  |
| [**getFeedbackcomentCollection**](FeedbackcomentApi.md#getFeedbackcomentCollection)   | **GET** /api/feedbackcoments         | Retrieves the collection of Feedbackcoment resources. |
| [**getFeedbackcomentItem**](FeedbackcomentApi.md#getFeedbackcomentItem)               | **GET** /api/feedbackcoments/{id}    | Retrieves a Feedbackcoment resource.                  |
| [**patchFeedbackcomentItem**](FeedbackcomentApi.md#patchFeedbackcomentItem)           | **PATCH** /api/feedbackcoments/{id}  | Updates the Feedbackcoment resource.                  |
| [**postFeedbackcomentCollection**](FeedbackcomentApi.md#postFeedbackcomentCollection) | **POST** /api/feedbackcoments        | Creates a Feedbackcoment resource.                    |
| [**putFeedbackcomentItem**](FeedbackcomentApi.md#putFeedbackcomentItem)               | **PUT** /api/feedbackcoments/{id}    | Replaces the Feedbackcoment resource.                 |

<a name="deleteFeedbackcomentItem"></a>

# **deleteFeedbackcomentItem**

> deleteFeedbackcomentItem(id)

Removes the Feedbackcoment resource.

Removes the Feedbackcoment resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.FeedbackcomentApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteFeedbackcomentItem(id, (error, data, response) => {
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

<a name="getFeedbackcomentCollection"></a>

# **getFeedbackcomentCollection**

> InlineResponse2008 getFeedbackcomentCollection(opts)

Retrieves the collection of Feedbackcoment resources.

Retrieves the collection of Feedbackcoment resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.FeedbackcomentApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getFeedbackcomentCollection(opts, (error, data, response) => {
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

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getFeedbackcomentItem"></a>

# **getFeedbackcomentItem**

> FeedbackcomentJsonld getFeedbackcomentItem(id)

Retrieves a Feedbackcoment resource.

Retrieves a Feedbackcoment resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.FeedbackcomentApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getFeedbackcomentItem(id, (error, data, response) => {
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

[**FeedbackcomentJsonld**](FeedbackcomentJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchFeedbackcomentItem"></a>

# **patchFeedbackcomentItem**

> FeedbackcomentJsonld patchFeedbackcomentItem(body, id)

Updates the Feedbackcoment resource.

Updates the Feedbackcoment resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.FeedbackcomentApi();
let body = new SwaggerJsClient.Feedbackcoment(); // Feedbackcoment | The updated Feedbackcoment resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchFeedbackcomentItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                    | Description                         | Notes |
| -------- | --------------------------------------- | ----------------------------------- | ----- |
| **body** | [**Feedbackcoment**](Feedbackcoment.md) | The updated Feedbackcoment resource |
| **id**   | **String**                              | Resource identifier                 |

### Return type

[**FeedbackcomentJsonld**](FeedbackcomentJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postFeedbackcomentCollection"></a>

# **postFeedbackcomentCollection**

> FeedbackcomentJsonld postFeedbackcomentCollection(body)

Creates a Feedbackcoment resource.

Creates a Feedbackcoment resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.FeedbackcomentApi();
let body = new SwaggerJsClient.FeedbackcomentJsonld(); // FeedbackcomentJsonld | The new Feedbackcoment resource

apiInstance.postFeedbackcomentCollection(body, (error, data, response) => {
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
| **body** | [**FeedbackcomentJsonld**](FeedbackcomentJsonld.md) | The new Feedbackcoment resource |

### Return type

[**FeedbackcomentJsonld**](FeedbackcomentJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putFeedbackcomentItem"></a>

# **putFeedbackcomentItem**

> FeedbackcomentJsonld putFeedbackcomentItem(body, id)

Replaces the Feedbackcoment resource.

Replaces the Feedbackcoment resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.FeedbackcomentApi();
let body = new SwaggerJsClient.FeedbackcomentJsonld(); // FeedbackcomentJsonld | The updated Feedbackcoment resource
let id = "id_example"; // String | Resource identifier

apiInstance.putFeedbackcomentItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                                | Description                         | Notes |
| -------- | --------------------------------------------------- | ----------------------------------- | ----- |
| **body** | [**FeedbackcomentJsonld**](FeedbackcomentJsonld.md) | The updated Feedbackcoment resource |
| **id**   | **String**                                          | Resource identifier                 |

### Return type

[**FeedbackcomentJsonld**](FeedbackcomentJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
