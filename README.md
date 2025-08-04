# MCP Shopify

A comprehensive Model Context Protocol (MCP) server for Shopify Admin API integration. This server provides 22 tools to interact with your Shopify store, enabling AI assistants like Claude to manage products, orders, customers, inventory, analytics, and more through natural language.

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

### Global Installation (Recommended)

```bash
npm install -g @akson/mcp-shopify
```

### Local Installation

```bash
npm install @akson/mcp-shopify
```

## Usage

### With Environment Variables

```bash
export SHOPIFY_ACCESS_TOKEN=your-access-token
export SHOPIFY_DOMAIN=your-store.myshopify.com
mcp-shopify
```

### With Command Line Arguments

```bash
mcp-shopify --accessToken=your-access-token --domain=your-store.myshopify.com
```

### With Claude Desktop

1. Install the package globally:
   ```bash
   npm install -g @akson/mcp-shopify
   ```

2. Find your Claude Desktop configuration file:
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
   - Linux: `~/.config/Claude/claude_desktop_config.json`

3. Add the Shopify MCP server to your configuration:
   ```json
   {
     "mcpServers": {
       "shopify": {
         "command": "npx",
         "args": ["@akson/mcp-shopify"],
         "env": {
           "SHOPIFY_ACCESS_TOKEN": "your-access-token",
           "SHOPIFY_DOMAIN": "your-store.myshopify.com"
         }
       }
     }
   }
   ```

4. Restart Claude Desktop to load the new server

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

## Getting Started

### 1. Create a Shopify App

1. Go to your Shopify admin panel
2. Navigate to Settings → Apps and sales channels → Develop apps
3. Create a new app or use an existing one
4. Configure Admin API scopes (read/write for products, orders, customers, etc.)
5. Install the app to your store
6. Copy the Admin API access token

### 2. Configure the Server

Set your credentials using one of these methods:

**Environment Variables (Recommended):**
```bash
export SHOPIFY_ACCESS_TOKEN="your-access-token"
export SHOPIFY_DOMAIN="your-store.myshopify.com"
```

**Command Line Arguments:**
```bash
mcp-shopify --accessToken="your-token" --domain="your-store.myshopify.com"
```

## Security

- **Never commit access tokens** to version control
- Use environment variables for sensitive data
- Store tokens securely (e.g., in password managers or secure vaults)
- Ensure API tokens have only the necessary permissions
- Regularly rotate access tokens
- Monitor API usage through Shopify admin

## Examples

Once configured in Claude Desktop, you can ask Claude to:

- "Show me my top 10 best-selling products"
- "Update the price of product SKU123 to $29.99"
- "List all pending orders from the last week"
- "Create a new product collection for summer items"
- "Check inventory levels for products running low"
- "Generate a sales report for this month"
- "Find all customers from New York"
- "Apply a 20% discount code for the next week"

## Troubleshooting

### Common Issues

1. **"SHOPIFY_ACCESS_TOKEN and SHOPIFY_DOMAIN are required"**
   - Ensure environment variables are set correctly
   - Check that your shell configuration loads the variables

2. **"401 Unauthorized" errors**
   - Verify your access token is correct
   - Check that your app has the required API permissions
   - Ensure the token hasn't expired

3. **"Server not found" in Claude Desktop**
   - Verify the package is installed globally: `npm list -g @akson/mcp-shopify`
   - Check the configuration file path is correct
   - Restart Claude Desktop after configuration changes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Support

For issues and feature requests, please visit: https://github.com/antoineschaller/mcp-shopify/issues

## Changelog

### v1.0.0
- Initial release with 22 comprehensive Shopify tools
- Full ES module support
- Command line and environment variable configuration
- Claude Desktop integration