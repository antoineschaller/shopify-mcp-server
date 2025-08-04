# @akson/shopify-mcp-server

A comprehensive Model Context Protocol (MCP) server for Shopify Admin API integration. This server provides 22 tools to interact with your Shopify store, enabling AI assistants to manage products, orders, customers, and more.

## Features

- **Products Management**: List, search, create, update, and manage products and variants
- **Orders Management**: View and update orders, fulfill orders, manage transactions
- **Customer Management**: Search and manage customer data
- **Inventory Management**: Track and update inventory levels
- **Analytics**: Access store analytics and reports
- **Collections**: Manage product collections
- **Discounts**: Create and manage discount codes
- **And more!**

## Installation

```bash
npm install -g @akson/shopify-mcp-server
```

## Usage

### With Environment Variables

```bash
export SHOPIFY_ACCESS_TOKEN=your-access-token
export SHOPIFY_DOMAIN=your-store.myshopify.com
shopify-mcp-server
```

### With Command Line Arguments

```bash
shopify-mcp-server --accessToken=your-access-token --domain=your-store.myshopify.com
```

### With Claude Desktop

1. Install the package globally:
   ```bash
   npm install -g @akson/shopify-mcp-server
   ```

2. Add to your Claude Desktop configuration:
   ```json
   {
     "mcpServers": {
       "shopify": {
         "command": "npx",
         "args": ["@akson/shopify-mcp-server"],
         "env": {
           "SHOPIFY_ACCESS_TOKEN": "your-access-token",
           "SHOPIFY_DOMAIN": "your-store.myshopify.com"
         }
       }
     }
   }
   ```

## Available Tools

### Product Management
- `list_products` - List all products with filters
- `get_product` - Get detailed product information
- `search_products` - Search products by title
- `create_product` - Create a new product
- `update_product` - Update product details
- `delete_product` - Delete a product
- `update_inventory` - Update inventory levels

### Order Management
- `list_orders` - List orders with filters
- `get_order` - Get detailed order information
- `update_order` - Update order details
- `fulfill_order` - Fulfill an order
- `cancel_order` - Cancel an order
- `create_order_note` - Add note to order

### Customer Management
- `list_customers` - List all customers
- `search_customers` - Search customers
- `get_customer` - Get customer details
- `create_customer` - Create new customer

### Analytics & Reporting
- `get_analytics` - Get store analytics
- `get_reports` - Access various reports

### Other Features
- `list_collections` - Manage collections
- `create_discount` - Create discount codes
- `list_locations` - View store locations

## Requirements

- Node.js >= 14.0.0
- Shopify Admin API access token
- Shopify store domain

## API Access

To use this server, you need:
1. A Shopify store
2. A private app or custom app with appropriate API permissions
3. An Admin API access token

## Security

- Never commit your access tokens to version control
- Use environment variables for sensitive data
- Ensure your API tokens have only the necessary permissions

## License

MIT

## Support

For issues and feature requests, please visit: https://github.com/akson-ai/shopify-mcp-server/issues