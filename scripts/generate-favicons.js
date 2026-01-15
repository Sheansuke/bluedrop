import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');
const svgPath = join(publicDir, 'favicon.svg');

async function generateFavicons() {
  // Read the SVG file
  const svgContent = readFileSync(svgPath, 'utf-8');

  // Generate PNG files at different sizes
  const sizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 180, name: 'apple-touch-icon.png' },
  ];

  console.log('Generating favicon files from SVG...');

  for (const { size, name } of sizes) {
    try {
      const resvgInstance = new Resvg(svgContent, {
        fitTo: {
          mode: 'width',
          value: size,
        },
      });
      
      const pngData = resvgInstance.render();
      const outputPath = join(publicDir, name);
      writeFileSync(outputPath, pngData.asPng());
      console.log(`✓ Generated ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`Error generating ${name}:`, error.message);
    }
  }

  // Generate ICO file from the 32x32 PNG
  try {
    const resvg32 = new Resvg(svgContent, {
      fitTo: {
        mode: 'width',
        value: 32,
      },
    });
    const png32 = resvg32.render();
    
    const icoPath = join(publicDir, 'favicon.ico');
    
    // Convert PNG to ICO format using sharp
    // Sharp can output ICO format directly
    await sharp(png32.asPng())
      .resize(32, 32)
      .toFormat('ico')
      .toFile(icoPath);
    
    console.log('✓ Generated favicon.ico (32x32)');
  } catch (error) {
    console.error('Error generating favicon.ico:', error.message);
    // Fallback: if ICO generation fails, at least copy the 32x32 PNG
    try {
      const resvg32 = new Resvg(svgContent, {
        fitTo: {
          mode: 'width',
          value: 32,
        },
      });
      const png32 = resvg32.render();
      const icoPath = join(publicDir, 'favicon.ico');
      writeFileSync(icoPath, png32.asPng());
      console.log('✓ Generated favicon.ico (fallback: PNG format)');
    } catch (fallbackError) {
      console.error('Fallback ICO generation also failed:', fallbackError.message);
    }
  }

  console.log('\nFavicon generation complete!');
}

generateFavicons().catch(console.error);