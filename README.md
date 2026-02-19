# MCP Shopify

A Model Context Protocol (MCP) server for Shopify Admin API integration. This server provides 23 read-only tools to interact with your Shopify store, enabling AI assistants like Claude to query products, orders, customers, inventory, analytics, and more through natural language.

## Features

- **Products**: List, search, get details, variants, metafields, inventory levels
- **Orders**: List, get details, view transactions
- **Customers**: List, search, get details, view order history
- **Analytics**: Shop info, sales summary, best sellers
- **Collections**: List collections, get collection products
- **Discounts**: List price rules, get discount details
- **Fulfillment**: List fulfillment services, shipping zones

## Authentication

### Option 1 — Client Credentials (Dev Dashboard apps, Jan 2026+)

For apps created in the Shopify Dev Dashboard after January 2026, static `shpat_` tokens are no longer issued. Instead, provide your client ID and secret — the server exchanges them for a short-lived token and auto-refreshes before expiry.

```bash
mcp-shopify --clientId=YOUR_CLIENT_ID --clientSecret=YOUR_CLIENT_SECRET --domain=your-store.myshopify.com
```

Or via environment variables:

```bash
export SHOPIFY_CLIENT_ID=your-client-id
export SHOPIFY_CLIENT_SECRET=your-client-secret
export SHOPIFY_DOMAIN=your-store.myshopify.com
mcp-shopify
```

### Option 2 — Static Access Token (legacy apps)

For older apps that still have a static `shpat_` token:

```bash
mcp-shopify --accessToken=shpat_xxxxx --domain=your-store.myshopify.com
```

Or via environment variables:

```bash
export SHOPIFY_ACCESS_TOKEN=shpat_xxxxx
export SHOPIFY_DOMAIN=your-store.myshopify.com
mcp-shopify
```

## Installation

### Global Installation

```bash
npm install -g @akson/mcp-shopify
```

### With Claude Desktop

Add to your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
  "mcpServers": {
    "shopify": {
      "command": "npx",
      "args": ["@akson/mcp-shopify"],
      "env": {
        "SHOPIFY_CLIENT_ID": "your-client-id",
        "SHOPIFY_CLIENT_SECRET": "your-client-secret",
        "SHOPIFY_DOMAIN": "your-store.myshopify.com"
      }
    }
  }
}
```

### With Claude Code

```bash
claude mcp add shopify-admin \
  -e SHOPIFY_CLIENT_ID=your-client-id \
  -e SHOPIFY_CLIENT_SECRET=your-client-secret \
  -e SHOPIFY_DOMAIN=your-store.myshopify.com \
  -- npx -y @akson/mcp-shopify
```

## Available Tools

### Product Management
- `list_products` — List products with filters (type, vendor, status, collection)
- `get_product` — Get detailed product information
- `search_products` — Search products by title
- `get_product_variants` — Get all variants for a product
- `get_inventory_levels` — Get inventory levels
- `get_product_metafields` — Get metafields for a product

### Order Management
- `list_orders` — List orders with filters (status, payment, fulfillment, date)
- `get_order` — Get detailed order information
- `get_order_transactions` — Get transactions for an order

### Customer Management
- `list_customers` — List customers
- `get_customer` — Get detailed customer information
- `search_customers` — Search customers by name, email, or phone
- `get_customer_orders` — Get all orders for a customer

### Analytics & Reports
- `get_shop_info` — Get general shop information
- `get_sales_summary` — Get sales summary and statistics
- `get_best_sellers` — Analyze best-selling products
- `get_locations` — Get all shop locations

### Collections
- `list_collections` — List all collections (smart and custom)
- `get_collection_products` — Get products in a collection

### Discounts
- `list_discounts` — List all discount/price rules
- `get_discount` — Get details about a specific discount

### Fulfillment
- `list_fulfillment_services` — List fulfillment services
- `get_shipping_zones` — Get shipping zones and rates

## API Version

This server uses Shopify Admin API version `2026-01` by default. Override with `--apiVersion` or `SHOPIFY_API_VERSION`.

## Requirements

- Node.js >= 18.0.0
- A Shopify store with a custom app configured with appropriate Admin API scopes

## Security

- Never commit access tokens or client secrets to version control
- Use environment variables for sensitive data
- Regularly rotate credentials
- Configure only the API scopes you need

## License

MIT
