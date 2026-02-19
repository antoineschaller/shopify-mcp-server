# MCP Shopify — Tools Reference

All 23 tools available in this server. All tools are **read-only**.

## Product Management

### 1. list_products
List products from your store with optional filters.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `limit` | No | Number of products (default: 10) |
| `product_type` | No | Filter by product type |
| `vendor` | No | Filter by vendor |
| `status` | No | Filter by status: `active`, `archived`, `draft` |
| `collection_id` | No | Filter by collection ID |

### 2. get_product
Get detailed information about a specific product.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `product_id` | Yes | The product ID |

### 3. search_products
Search products by title.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `query` | Yes | Search query |
| `limit` | No | Number of results (default: 10) |

### 4. get_product_variants
Get all variants for a specific product.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `product_id` | Yes | The product ID |

### 5. get_inventory_levels
Get inventory levels.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `location_id` | No | Filter by location ID |
| `limit` | No | Number of items (default: 10) |

### 6. get_product_metafields
Get metafields for a product.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `product_id` | Yes | The product ID |

## Order Management

### 7. list_orders
List orders with optional filters.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `limit` | No | Number of orders (default: 10) |
| `status` | No | `open`, `closed`, `cancelled`, `any` |
| `financial_status` | No | `authorized`, `pending`, `paid`, `partially_paid`, `refunded`, `voided`, `partially_refunded`, `unpaid` |
| `fulfillment_status` | No | `shipped`, `partial`, `unshipped`, `unfulfilled`, `fulfilled` |
| `created_at_min` | No | Orders created after this date (ISO 8601) |
| `created_at_max` | No | Orders created before this date (ISO 8601) |

### 8. get_order
Get detailed information about a specific order.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `order_id` | Yes | The order ID |

### 9. get_order_transactions
Get transactions for a specific order.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `order_id` | Yes | The order ID |

## Customer Management

### 10. list_customers
List customers.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `limit` | No | Number of customers (default: 10) |
| `created_at_min` | No | Customers created after this date |
| `created_at_max` | No | Customers created before this date |

### 11. get_customer
Get detailed customer information.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `customer_id` | Yes | The customer ID |

### 12. search_customers
Search customers by name, email, or phone.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `query` | Yes | Search query |
| `limit` | No | Number of results (default: 10) |

### 13. get_customer_orders
Get all orders for a specific customer.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `customer_id` | Yes | The customer ID |
| `limit` | No | Number of orders (default: 10) |

## Analytics & Reports

### 14. get_shop_info
Get general information about the shop. No parameters.

### 15. get_sales_summary
Get sales summary and statistics.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `date_from` | No | Start date (ISO 8601) |
| `date_to` | No | End date (ISO 8601) |

### 16. get_best_sellers
Analyze best-selling products.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `limit` | No | Number of top products (default: 10) |
| `days` | No | Number of days to analyze (default: 30) |

### 17. get_locations
Get all shop locations. No parameters.

## Collections

### 18. list_collections
List all collections (smart and custom).

| Parameter | Required | Description |
|-----------|----------|-------------|
| `limit` | No | Number of collections (default: 10) |
| `collection_type` | No | `smart` or `custom` |

### 19. get_collection_products
Get all products in a specific collection.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `collection_id` | Yes | The collection ID |
| `limit` | No | Number of products (default: 10) |

## Discounts

### 20. list_discounts
List all discount codes / price rules.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `limit` | No | Number of discounts (default: 10) |

### 21. get_discount
Get details about a specific discount.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `discount_id` | Yes | The discount ID |

## Fulfillment

### 22. list_fulfillment_services
List all fulfillment services. No parameters.

### 23. get_shipping_zones
Get all shipping zones and rates. No parameters.
