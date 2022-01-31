# SwaggerJsClient.FeedbackApi

All URIs are relative to _/_

| Method                                                              | HTTP request                  | Description                                     |
| ------------------------------------------------------------------- | ----------------------------- | ----------------------------------------------- |
| [**deleteFeedbackItem**](FeedbackApi.md#deleteFeedbackItem)         | **DELETE** /api/feedback/{id} | Removes the Feedback resource.                  |
| [**getFeedbackCollection**](FeedbackApi.md#getFeedbackCollection)   | **GET** /api/feedback         | Retrieves the collection of Feedback resources. |
| [**getFeedbackItem**](FeedbackApi.md#getFeedbackItem)               | **GET** /api/feedback/{id}    | Retrieves a Feedback resource.                  |
| [**patchFeedbackItem**](FeedbackApi.md#patchFeedbackItem)           | **PATCH** /api/feedback/{id}  | Updates the Feedback resource.                  |
| [**postFeedbackCollection**](FeedbackApi.md#postFeedbackCollection) | **POST** /api/feedback        | Creates a Feedback resource.                    |
| [**putFeedbackItem**](FeedbackApi.md#putFeedbackItem)               | **PUT** /api/feedback/{id}    | Replaces the Feedback resource.                 |

<a name="deleteFeedbackItem"></a>

# **deleteFeedbackItem**

> deleteFeedbackItem(id)

Removes the Feedback resource.

Removes the Feedback resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.FeedbackApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteFeedbackItem(id, (error, data, response) => {
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

<a name="getFeedbackCollection"></a>

# **getFeedbackCollection**

> InlineResponse2007 getFeedbackCollection(opts)

Retrieves the collection of Feedback resources.

Retrieves the collection of Feedback resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.FeedbackApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getFeedbackCollection(opts, (error, data, response) => {
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

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getFeedbackItem"></a>

# **getFeedbackItem**

> FeedbackJsonld getFeedbackItem(id)

Retrieves a Feedback resource.

Retrieves a Feedback resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.FeedbackApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getFeedbackItem(id, (error, data, response) => {
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

[**FeedbackJsonld**](FeedbackJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchFeedbackItem"></a>

# **patchFeedbackItem**

> FeedbackJsonld patchFeedbackItem(body, id)

Updates the Feedback resource.

Updates the Feedback resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.FeedbackApi();
let body = new SwaggerJsClient.Feedback(); // Feedback | The updated Feedback resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchFeedbackItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                        | Description                   | Notes |
| -------- | --------------------------- | ----------------------------- | ----- |
| **body** | [**Feedback**](Feedback.md) | The updated Feedback resource |
| **id**   | **String**                  | Resource identifier           |

### Return type

[**FeedbackJsonld**](FeedbackJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postFeedbackCollection"></a>

# **postFeedbackCollection**

> FeedbackJsonld postFeedbackCollection(body)

Creates a Feedback resource.

Creates a Feedback resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.FeedbackApi();
let body = new SwaggerJsClient.FeedbackJsonld(); // FeedbackJsonld | The new Feedback resource

apiInstance.postFeedbackCollection(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                    | Description               | Notes |
| -------- | --------------------------------------- | ------------------------- | ----- |
| **body** | [**FeedbackJsonld**](FeedbackJsonld.md) | The new Feedback resource |

### Return type

[**FeedbackJsonld**](FeedbackJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putFeedbackItem"></a>

# **putFeedbackItem**

> FeedbackJsonld putFeedbackItem(body, id)

Replaces the Feedback resource.

Replaces the Feedback resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.FeedbackApi();
let body = new SwaggerJsClient.FeedbackJsonld(); // FeedbackJsonld | The updated Feedback resource
let id = "id_example"; // String | Resource identifier

apiInstance.putFeedbackItem(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                    | Description                   | Notes |
| -------- | --------------------------------------- | ----------------------------- | ----- |
| **body** | [**FeedbackJsonld**](FeedbackJsonld.md) | The updated Feedback resource |
| **id**   | **String**                              | Resource identifier           |

### Return type

[**FeedbackJsonld**](FeedbackJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
