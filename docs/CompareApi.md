# SwaggerJsClient.CompareApi

All URIs are relative to _/_

| Method                                                           | HTTP request                  | Description                                    |
| ---------------------------------------------------------------- | ----------------------------- | ---------------------------------------------- |
| [**deleteCompareItem**](CompareApi.md#deleteCompareItem)         | **DELETE** /api/compares/{id} | Removes the Compare resource.                  |
| [**getCompareCollection**](CompareApi.md#getCompareCollection)   | **GET** /api/compares         | Retrieves the collection of Compare resources. |
| [**getCompareItem**](CompareApi.md#getCompareItem)               | **GET** /api/compares/{id}    | Retrieves a Compare resource.                  |
| [**patchCompareItem**](CompareApi.md#patchCompareItem)           | **PATCH** /api/compares/{id}  | Updates the Compare resource.                  |
| [**postCompareCollection**](CompareApi.md#postCompareCollection) | **POST** /api/compares        | Creates a Compare resource.                    |
| [**putCompareItem**](CompareApi.md#putCompareItem)               | **PUT** /api/compares/{id}    | Replaces the Compare resource.                 |

<a name="deleteCompareItem"></a>

# **deleteCompareItem**

> deleteCompareItem(id)

Removes the Compare resource.

Removes the Compare resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CompareApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteCompareItem(id, (error, data, response) => {
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

<a name="getCompareCollection"></a>

# **getCompareCollection**

> InlineResponse2004 getCompareCollection(opts)

Retrieves the collection of Compare resources.

Retrieves the collection of Compare resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CompareApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getCompareCollection(opts, (error, data, response) => {
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

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getCompareItem"></a>

# **getCompareItem**

> CompareJsonld getCompareItem(id)

Retrieves a Compare resource.

Retrieves a Compare resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CompareApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getCompareItem(id, (error, data, response) => {
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

[**CompareJsonld**](CompareJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchCompareItem"></a>

# **patchCompareItem**

> CompareJsonld patchCompareItem(body, id)

Updates the Compare resource.

Updates the Compare resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CompareApi();
let body = new SwaggerJsClient.Compare(); // Compare | The updated Compare resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchCompareItem(body, id, (error, data, response) => {
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
| **body** | [**Compare**](Compare.md) | The updated Compare resource |
| **id**   | **String**                | Resource identifier          |

### Return type

[**CompareJsonld**](CompareJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postCompareCollection"></a>

# **postCompareCollection**

> CompareJsonld postCompareCollection(body)

Creates a Compare resource.

Creates a Compare resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CompareApi();
let body = new SwaggerJsClient.CompareJsonld(); // CompareJsonld | The new Compare resource

apiInstance.postCompareCollection(body, (error, data, response) => {
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
| **body** | [**CompareJsonld**](CompareJsonld.md) | The new Compare resource |

### Return type

[**CompareJsonld**](CompareJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putCompareItem"></a>

# **putCompareItem**

> CompareJsonld putCompareItem(body, id)

Replaces the Compare resource.

Replaces the Compare resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.CompareApi();
let body = new SwaggerJsClient.CompareJsonld(); // CompareJsonld | The updated Compare resource
let id = "id_example"; // String | Resource identifier

apiInstance.putCompareItem(body, id, (error, data, response) => {
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
| **body** | [**CompareJsonld**](CompareJsonld.md) | The updated Compare resource |
| **id**   | **String**                            | Resource identifier          |

### Return type

[**CompareJsonld**](CompareJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
