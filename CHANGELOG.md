# Changelog

All notable changes to MCP Shopify will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] - 2024-08-04

### Fixed
- Removed ALL optional chaining operators throughout the codebase
- Fixed remaining Node.js v12 compatibility issues
- Ensured compatibility with Claude Desktop's Node.js environment

## [1.0.2] - 2024-08-04

### Fixed
- Fixed Node.js v12 compatibility by removing optional chaining operator
- Updated minimum Node.js version requirement to 12.0.0

## [1.0.1] - 2024-08-04

### Fixed
- Fixed bin command to match package name (`mcp-shopify` instead of `shopify-mcp-server`)
- Updated all documentation to use correct command name
- Fixed npx execution issue

## [1.0.0] - 2024-08-04

### Added
- Initial release of MCP Shopify
- 22 comprehensive tools for Shopify store management
- Product management tools (list, search, create, update, delete)
- Order management tools (list, update, fulfill, cancel)
- Customer management tools (list, search, create)
- Inventory management capabilities
- Analytics and reporting tools
- Collection management
- Discount code creation
- Location listing
- Full ES module support
- Environment variable configuration
- Command-line argument support
- Claude Desktop integration
- Comprehensive error handling
- Automatic rate limit handling
- Detailed documentation and examples

### Technical Details
- Built with Model Context Protocol (MCP) SDK
- Uses Shopify Admin API version 2023-10
- Supports Node.js 14.0.0 and higher
- Zero runtime dependencies (besides MCP SDK)

[1.0.0]: https://github.com/antoineschaller/shopify-mcp-server/releases/tag/v1.0.0