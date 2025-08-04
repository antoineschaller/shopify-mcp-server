// Simple test to verify the package structure
console.log('Testing @akson/mcp-shopify package...\n');

// Check package.json
try {
  const pkg = await import('./package.json', { assert: { type: 'json' } });
  console.log('✓ Package name:', pkg.default.name);
  console.log('✓ Package version:', pkg.default.version);
} catch (error) {
  console.error('✗ Failed to load package.json:', error.message);
  process.exit(1);
}

// Check if main file exists
try {
  const fs = await import('fs');
  if (fs.existsSync('./index.js')) {
    console.log('✓ Main file (index.js) exists');
  } else {
    console.error('✗ Main file (index.js) not found');
    process.exit(1);
  }
} catch (error) {
  console.error('✗ Failed to check main file:', error.message);
  process.exit(1);
}

// Check if bin file exists
try {
  const fs = await import('fs');
  if (fs.existsSync('./bin/shopify-mcp-server.js')) {
    console.log('✓ Bin file exists');
  } else {
    console.error('✗ Bin file not found');
    process.exit(1);
  }
} catch (error) {
  console.error('✗ Failed to check bin file:', error.message);
  process.exit(1);
}

console.log('\n✅ All tests passed! Package is ready for publishing.');