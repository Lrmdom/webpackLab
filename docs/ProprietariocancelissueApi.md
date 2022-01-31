# SwaggerJsClient.ProprietariocancelissueApi

All URIs are relative to _/_

| Method                                                                                                           | HTTP request                                  | Description                                                    |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------- |
| [**deleteProprietariocancelissueItem**](ProprietariocancelissueApi.md#deleteProprietariocancelissueItem)         | **DELETE** /api/proprietariocancelissues/{id} | Removes the Proprietariocancelissue resource.                  |
| [**getProprietariocancelissueCollection**](ProprietariocancelissueApi.md#getProprietariocancelissueCollection)   | **GET** /api/proprietariocancelissues         | Retrieves the collection of Proprietariocancelissue resources. |
| [**getProprietariocancelissueItem**](ProprietariocancelissueApi.md#getProprietariocancelissueItem)               | **GET** /api/proprietariocancelissues/{id}    | Retrieves a Proprietariocancelissue resource.                  |
| [**patchProprietariocancelissueItem**](ProprietariocancelissueApi.md#patchProprietariocancelissueItem)           | **PATCH** /api/proprietariocancelissues/{id}  | Updates the Proprietariocancelissue resource.                  |
| [**postProprietariocancelissueCollection**](ProprietariocancelissueApi.md#postProprietariocancelissueCollection) | **POST** /api/proprietariocancelissues        | Creates a Proprietariocancelissue resource.                    |
| [**putProprietariocancelissueItem**](ProprietariocancelissueApi.md#putProprietariocancelissueItem)               | **PUT** /api/proprietariocancelissues/{id}    | Replaces the Proprietariocancelissue resource.                 |

<a name="deleteProprietariocancelissueItem"></a>

# **deleteProprietariocancelissueItem**

> deleteProprietariocancelissueItem(id)

Removes the Proprietariocancelissue resource.

Removes the Proprietariocancelissue resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ProprietariocancelissueApi();
let id = "id_example"; // String | Resource identifier

apiInstance.deleteProprietariocancelissueItem(id, (error, data, response) => {
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

<a name="getProprietariocancelissueCollection"></a>

# **getProprietariocancelissueCollection**

> InlineResponse20015 getProprietariocancelissueCollection(opts)

Retrieves the collection of Proprietariocancelissue resources.

Retrieves the collection of Proprietariocancelissue resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ProprietariocancelissueApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getProprietariocancelissueCollection(
  opts,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  }
);
```

### Parameters

| Name     | Type       | Description                | Notes                     |
| -------- | ---------- | -------------------------- | ------------------------- |
| **page** | **Number** | The collection page number | [optional] [default to 1] |

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getProprietariocancelissueItem"></a>

# **getProprietariocancelissueItem**

> ProprietariocancelissueJsonld getProprietariocancelissueItem(id)

Retrieves a Proprietariocancelissue resource.

Retrieves a Proprietariocancelissue resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ProprietariocancelissueApi();
let id = "id_example"; // String | Resource identifier

apiInstance.getProprietariocancelissueItem(id, (error, data, response) => {
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

[**ProprietariocancelissueJsonld**](ProprietariocancelissueJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchProprietariocancelissueItem"></a>

# **patchProprietariocancelissueItem**

> ProprietariocancelissueJsonld patchProprietariocancelissueItem(body, id)

Updates the Proprietariocancelissue resource.

Updates the Proprietariocancelissue resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ProprietariocancelissueApi();
let body = new SwaggerJsClient.Proprietariocancelissue(); // Proprietariocancelissue | The updated Proprietariocancelissue resource
let id = "id_example"; // String | Resource identifier

apiInstance.patchProprietariocancelissueItem(
  body,
  id,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  }
);
```

### Parameters

| Name     | Type                                                      | Description                                  | Notes |
| -------- | --------------------------------------------------------- | -------------------------------------------- | ----- |
| **body** | [**Proprietariocancelissue**](Proprietariocancelissue.md) | The updated Proprietariocancelissue resource |
| **id**   | **String**                                                | Resource identifier                          |

### Return type

[**ProprietariocancelissueJsonld**](ProprietariocancelissueJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postProprietariocancelissueCollection"></a>

# **postProprietariocancelissueCollection**

> ProprietariocancelissueJsonld postProprietariocancelissueCollection(body)

Creates a Proprietariocancelissue resource.

Creates a Proprietariocancelissue resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ProprietariocancelissueApi();
let body = new SwaggerJsClient.ProprietariocancelissueJsonld(); // ProprietariocancelissueJsonld | The new Proprietariocancelissue resource

apiInstance.postProprietariocancelissueCollection(
  body,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  }
);
```

### Parameters

| Name     | Type                                                                  | Description                              | Notes |
| -------- | --------------------------------------------------------------------- | ---------------------------------------- | ----- |
| **body** | [**ProprietariocancelissueJsonld**](ProprietariocancelissueJsonld.md) | The new Proprietariocancelissue resource |

### Return type

[**ProprietariocancelissueJsonld**](ProprietariocancelissueJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putProprietariocancelissueItem"></a>

# **putProprietariocancelissueItem**

> ProprietariocancelissueJsonld putProprietariocancelissueItem(body, id)

Replaces the Proprietariocancelissue resource.

Replaces the Proprietariocancelissue resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ProprietariocancelissueApi();
let body = new SwaggerJsClient.ProprietariocancelissueJsonld(); // ProprietariocancelissueJsonld | The updated Proprietariocancelissue resource
let id = "id_example"; // String | Resource identifier

apiInstance.putProprietariocancelissueItem(
  body,
  id,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  }
);
```

### Parameters

| Name     | Type                                                                  | Description                                  | Notes |
| -------- | --------------------------------------------------------------------- | -------------------------------------------- | ----- |
| **body** | [**ProprietariocancelissueJsonld**](ProprietariocancelissueJsonld.md) | The updated Proprietariocancelissue resource |
| **id**   | **String**                                                            | Resource identifier                          |

### Return type

[**ProprietariocancelissueJsonld**](ProprietariocancelissueJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
