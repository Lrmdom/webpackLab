# SwaggerJsClient.ProprietarioApi

All URIs are relative to _/_

| Method                                                                          | HTTP request                           | Description                                         |
| ------------------------------------------------------------------------------- | -------------------------------------- | --------------------------------------------------- |
| [**deleteProprietarioItem**](ProprietarioApi.md#deleteProprietarioItem)         | **DELETE** /api/proprietarios/{propid} | Removes the Proprietario resource.                  |
| [**getProprietarioCollection**](ProprietarioApi.md#getProprietarioCollection)   | **GET** /api/proprietarios             | Retrieves the collection of Proprietario resources. |
| [**getProprietarioItem**](ProprietarioApi.md#getProprietarioItem)               | **GET** /api/proprietarios/{propid}    | Retrieves a Proprietario resource.                  |
| [**patchProprietarioItem**](ProprietarioApi.md#patchProprietarioItem)           | **PATCH** /api/proprietarios/{propid}  | Updates the Proprietario resource.                  |
| [**postProprietarioCollection**](ProprietarioApi.md#postProprietarioCollection) | **POST** /api/proprietarios            | Creates a Proprietario resource.                    |
| [**putProprietarioItem**](ProprietarioApi.md#putProprietarioItem)               | **PUT** /api/proprietarios/{propid}    | Replaces the Proprietario resource.                 |

<a name="deleteProprietarioItem"></a>

# **deleteProprietarioItem**

> deleteProprietarioItem(propid)

Removes the Proprietario resource.

Removes the Proprietario resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ProprietarioApi();
let propid = "propid_example"; // String | Resource identifier

apiInstance.deleteProprietarioItem(propid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
});
```

### Parameters

| Name       | Type       | Description         | Notes |
| ---------- | ---------- | ------------------- | ----- |
| **propid** | **String** | Resource identifier |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getProprietarioCollection"></a>

# **getProprietarioCollection**

> InlineResponse20016 getProprietarioCollection(opts)

Retrieves the collection of Proprietario resources.

Retrieves the collection of Proprietario resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ProprietarioApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getProprietarioCollection(opts, (error, data, response) => {
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

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getProprietarioItem"></a>

# **getProprietarioItem**

> ProprietarioJsonld getProprietarioItem(propid)

Retrieves a Proprietario resource.

Retrieves a Proprietario resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ProprietarioApi();
let propid = "propid_example"; // String | Resource identifier

apiInstance.getProprietarioItem(propid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name       | Type       | Description         | Notes |
| ---------- | ---------- | ------------------- | ----- |
| **propid** | **String** | Resource identifier |

### Return type

[**ProprietarioJsonld**](ProprietarioJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchProprietarioItem"></a>

# **patchProprietarioItem**

> ProprietarioJsonld patchProprietarioItem(body, propid)

Updates the Proprietario resource.

Updates the Proprietario resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ProprietarioApi();
let body = new SwaggerJsClient.Proprietario(); // Proprietario | The updated Proprietario resource
let propid = "propid_example"; // String | Resource identifier

apiInstance.patchProprietarioItem(body, propid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name       | Type                                | Description                       | Notes |
| ---------- | ----------------------------------- | --------------------------------- | ----- |
| **body**   | [**Proprietario**](Proprietario.md) | The updated Proprietario resource |
| **propid** | **String**                          | Resource identifier               |

### Return type

[**ProprietarioJsonld**](ProprietarioJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postProprietarioCollection"></a>

# **postProprietarioCollection**

> ProprietarioJsonld postProprietarioCollection(body)

Creates a Proprietario resource.

Creates a Proprietario resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ProprietarioApi();
let body = new SwaggerJsClient.ProprietarioJsonld(); // ProprietarioJsonld | The new Proprietario resource

apiInstance.postProprietarioCollection(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                            | Description                   | Notes |
| -------- | ----------------------------------------------- | ----------------------------- | ----- |
| **body** | [**ProprietarioJsonld**](ProprietarioJsonld.md) | The new Proprietario resource |

### Return type

[**ProprietarioJsonld**](ProprietarioJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putProprietarioItem"></a>

# **putProprietarioItem**

> ProprietarioJsonld putProprietarioItem(body, propid)

Replaces the Proprietario resource.

Replaces the Proprietario resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.ProprietarioApi();
let body = new SwaggerJsClient.ProprietarioJsonld(); // ProprietarioJsonld | The updated Proprietario resource
let propid = "propid_example"; // String | Resource identifier

apiInstance.putProprietarioItem(body, propid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name       | Type                                            | Description                       | Notes |
| ---------- | ----------------------------------------------- | --------------------------------- | ----- |
| **body**   | [**ProprietarioJsonld**](ProprietarioJsonld.md) | The updated Proprietario resource |
| **propid** | **String**                                      | Resource identifier               |

### Return type

[**ProprietarioJsonld**](ProprietarioJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
