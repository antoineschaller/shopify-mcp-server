# Shopify MCP Server - Complete Tools Reference

This document provides detailed information about all 22 tools available in the Shopify MCP Server.

## Product Management Tools

### 1. list_products
List all products in your store with optional filters.

**Parameters:**
- `limit` (optional): Number of products to return (default: 10, max: 250)
- `fields` (optional): Comma-separated list of fields to include
- `product_type` (optional): Filter by product type
- `vendor` (optional): Filter by vendor
- `status` (optional): Filter by status (active, archived, draft)

**Example Response:**
```json
{
  "products": [
    {
      "id": 123456789,
      "title": "T-Shirt",
      "handle": "t-shirt",
      "status": "active",
      "variants": [...],
      "images": [...]
    }
  ]
}
```

### 2. get_product
Get detailed information about a specific product.

**Parameters:**
- `product_id` (required): The ID of the product

### 3. search_products
Search for products by title.

**Parameters:**
- `query` (required): Search query
- `limit` (optional): Number of results (default: 10)

### 4. create_product
Create a new product in your store.

**Parameters:**
- `title` (required): Product title
- `body_html` (optional): Product description
- `vendor` (optional): Product vendor
- `product_type` (optional): Product type
- `tags` (optional): Comma-separated tags
- `price` (optional): Default price
- `sku` (optional): Default SKU
- `inventory_quantity` (optional): Initial inventory

### 5. update_product
Update an existing product.

**Parameters:**
- `product_id` (required): Product ID to update
- `title` (optional): New title
- `body_html` (optional): New description
- `vendor` (optional): New vendor
- `product_type` (optional): New product type
- `tags` (optional): New tags
- `status` (optional): New status

### 6. delete_product
Delete a product from your store.

**Parameters:**
- `product_id` (required): Product ID to delete

### 7. update_inventory
Update inventory levels for a specific variant.

**Parameters:**
- `inventory_item_id` (required): Inventory item ID
- `location_id` (required): Location ID
- `available` (required): New available quantity

## Order Management Tools

### 8. list_orders
List all orders with optional filters.

**Parameters:**
- `status` (optional): Order status (open, closed, cancelled, any)
- `financial_status` (optional): Payment status
- `fulfillment_status` (optional): Fulfillment status
- `created_at_min` (optional): Minimum creation date
- `created_at_max` (optional): Maximum creation date
- `limit` (optional): Number of orders (default: 10)

### 9. get_order
Get detailed information about a specific order.

**Parameters:**
- `order_id` (required): Order ID

### 10. update_order
Update order information.

**Parameters:**
- `order_id` (required): Order ID
- `note` (optional): Order note
- `tags` (optional): Order tags
- `email` (optional): Customer email
- `phone` (optional): Customer phone

### 11. fulfill_order
Create a fulfillment for an order.

**Parameters:**
- `order_id` (required): Order ID
- `tracking_number` (optional): Tracking number
- `tracking_company` (optional): Shipping company
- `notify_customer` (optional): Send notification (default: true)
- `line_items` (optional): Specific items to fulfill

### 12. cancel_order
Cancel an order.

**Parameters:**
- `order_id` (required): Order ID
- `reason` (optional): Cancellation reason
- `email` (optional): Send email notification
- `restock` (optional): Restock items (default: true)

### 13. create_order_note
Add a note to an order.

**Parameters:**
- `order_id` (required): Order ID
- `note` (required): Note content

## Customer Management Tools

### 14. list_customers
List all customers.

**Parameters:**
- `limit` (optional): Number of customers (default: 10)
- `created_at_min` (optional): Minimum creation date
- `created_at_max` (optional): Maximum creation date

### 15. search_customers
Search for customers.

**Parameters:**
- `query` (required): Search query (name, email, etc.)
- `limit` (optional): Number of results

### 16. get_customer
Get detailed customer information.

**Parameters:**
- `customer_id` (required): Customer ID

### 17. create_customer
Create a new customer.

**Parameters:**
- `email` (required): Customer email
- `first_name` (optional): First name
- `last_name` (optional): Last name
- `phone` (optional): Phone number
- `accepts_marketing` (optional): Marketing consent
- `tags` (optional): Customer tags

## Analytics & Reporting Tools

### 18. get_analytics
Get store analytics and metrics.

**Parameters:**
- `metric` (required): Metric type (sales, orders, customers, conversion_rate)
- `date_from` (optional): Start date
- `date_to` (optional): End date

### 19. get_reports
Access various store reports.

**Parameters:**
- `report_type` (required): Type of report
- `date_range` (optional): Date range for report

## Additional Tools

### 20. list_collections
List product collections.

**Parameters:**
- `limit` (optional): Number of collections
- `collection_type` (optional): Type (smart or custom)

### 21. create_discount
Create a discount code.

**Parameters:**
- `code` (required): Discount code
- `discount_type` (required): Type (percentage or fixed_amount)
- `value` (required): Discount value
- `starts_at` (optional): Start date
- `ends_at` (optional): End date
- `usage_limit` (optional): Total usage limit

### 22. list_locations
List store locations.

**Parameters:**
- None

## Error Handling

All tools return structured error responses:

```json
{
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE",
    "details": {}
  }
}
```

Common error codes:
- `UNAUTHORIZED`: Invalid or missing access token
- `NOT_FOUND`: Resource not found
- `BAD_REQUEST`: Invalid parameters
- `RATE_LIMITED`: API rate limit exceeded

## Rate Limiting

Shopify API has rate limits. The server automatically handles rate limiting with retries. Current limits:
- REST Admin API: 2 requests per second
- Shopify Plus: 4 requests per second

## Best Practices

1. **Batch Operations**: When possible, use filters to get multiple items in one request
2. **Field Selection**: Use the `fields` parameter to only get needed data
3. **Pagination**: Use `limit` and pagination for large datasets
4. **Caching**: Consider caching frequently accessed data
5. **Error Handling**: Always handle potential errors in your workflows

## API Versions

This server uses Shopify Admin API version 2023-10. To check for updates or migrate to newer versions, refer to Shopify's API versioning guide.