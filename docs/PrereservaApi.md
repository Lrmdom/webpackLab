# SwaggerJsClient.PrereservaApi

All URIs are relative to _/_

| Method                                                                    | HTTP request                              | Description                                       |
| ------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------- |
| [**deletePrereservaItem**](PrereservaApi.md#deletePrereservaItem)         | **DELETE** /api/prereservas/{nPrereserva} | Removes the Prereserva resource.                  |
| [**getPrereservaCollection**](PrereservaApi.md#getPrereservaCollection)   | **GET** /api/prereservas                  | Retrieves the collection of Prereserva resources. |
| [**getPrereservaItem**](PrereservaApi.md#getPrereservaItem)               | **GET** /api/prereservas/{nPrereserva}    | Retrieves a Prereserva resource.                  |
| [**patchPrereservaItem**](PrereservaApi.md#patchPrereservaItem)           | **PATCH** /api/prereservas/{nPrereserva}  | Updates the Prereserva resource.                  |
| [**postPrereservaCollection**](PrereservaApi.md#postPrereservaCollection) | **POST** /api/prereservas                 | Creates a Prereserva resource.                    |
| [**putPrereservaItem**](PrereservaApi.md#putPrereservaItem)               | **PUT** /api/prereservas/{nPrereserva}    | Replaces the Prereserva resource.                 |

<a name="deletePrereservaItem"></a>

# **deletePrereservaItem**

> deletePrereservaItem(nPrereserva)

Removes the Prereserva resource.

Removes the Prereserva resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PrereservaApi();
let nPrereserva = "nPrereserva_example"; // String | Resource identifier

apiInstance.deletePrereservaItem(nPrereserva, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully.");
  }
});
```

### Parameters

| Name            | Type       | Description         | Notes |
| --------------- | ---------- | ------------------- | ----- |
| **nPrereserva** | **String** | Resource identifier |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getPrereservaCollection"></a>

# **getPrereservaCollection**

> InlineResponse20014 getPrereservaCollection(opts)

Retrieves the collection of Prereserva resources.

Retrieves the collection of Prereserva resources.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PrereservaApi();
let opts = {
  page: 1, // Number | The collection page number
};
apiInstance.getPrereservaCollection(opts, (error, data, response) => {
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

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="getPrereservaItem"></a>

# **getPrereservaItem**

> PrereservaJsonld getPrereservaItem(nPrereserva)

Retrieves a Prereserva resource.

Retrieves a Prereserva resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PrereservaApi();
let nPrereserva = "nPrereserva_example"; // String | Resource identifier

apiInstance.getPrereservaItem(nPrereserva, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name            | Type       | Description         | Notes |
| --------------- | ---------- | ------------------- | ----- |
| **nPrereserva** | **String** | Resource identifier |

### Return type

[**PrereservaJsonld**](PrereservaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/ld+json, application/json, text/html

<a name="patchPrereservaItem"></a>

# **patchPrereservaItem**

> PrereservaJsonld patchPrereservaItem(body, nPrereserva)

Updates the Prereserva resource.

Updates the Prereserva resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PrereservaApi();
let body = new SwaggerJsClient.Prereserva(); // Prereserva | The updated Prereserva resource
let nPrereserva = "nPrereserva_example"; // String | Resource identifier

apiInstance.patchPrereservaItem(body, nPrereserva, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name            | Type                            | Description                     | Notes |
| --------------- | ------------------------------- | ------------------------------- | ----- |
| **body**        | [**Prereserva**](Prereserva.md) | The updated Prereserva resource |
| **nPrereserva** | **String**                      | Resource identifier             |

### Return type

[**PrereservaJsonld**](PrereservaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/merge-patch+json
- **Accept**: application/ld+json, application/json, text/html

<a name="postPrereservaCollection"></a>

# **postPrereservaCollection**

> PrereservaJsonld postPrereservaCollection(body)

Creates a Prereserva resource.

Creates a Prereserva resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PrereservaApi();
let body = new SwaggerJsClient.PrereservaJsonld(); // PrereservaJsonld | The new Prereserva resource

apiInstance.postPrereservaCollection(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                        | Description                 | Notes |
| -------- | ------------------------------------------- | --------------------------- | ----- |
| **body** | [**PrereservaJsonld**](PrereservaJsonld.md) | The new Prereserva resource |

### Return type

[**PrereservaJsonld**](PrereservaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html

<a name="putPrereservaItem"></a>

# **putPrereservaItem**

> PrereservaJsonld putPrereservaItem(body, nPrereserva)

Replaces the Prereserva resource.

Replaces the Prereserva resource.

### Example

```javascript
import { SwaggerJsClient } from "swagger-js-client";

let apiInstance = new SwaggerJsClient.PrereservaApi();
let body = new SwaggerJsClient.PrereservaJsonld(); // PrereservaJsonld | The updated Prereserva resource
let nPrereserva = "nPrereserva_example"; // String | Resource identifier

apiInstance.putPrereservaItem(body, nPrereserva, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name            | Type                                        | Description                     | Notes |
| --------------- | ------------------------------------------- | ------------------------------- | ----- |
| **body**        | [**PrereservaJsonld**](PrereservaJsonld.md) | The updated Prereserva resource |
| **nPrereserva** | **String**                                  | Resource identifier             |

### Return type

[**PrereservaJsonld**](PrereservaJsonld.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/ld+json, application/json, text/html
- **Accept**: application/ld+json, application/json, text/html
