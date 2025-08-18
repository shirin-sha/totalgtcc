/* eslint-disable */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

(async () => {
	try {
		const targetWidth = 535;
		const targetHeight = 180;
		const srcPath = path.resolve('public/assets/img/logowhite300.png');
		const outPath = path.resolve('public/assets/img/logowhite-535x180.png');

		// Load source
		const image = sharp(srcPath).png();
		const metadata = await image.metadata();

		// Resize to fit within target, preserving aspect ratio
		const resizedBuffer = await image
			.resize({ width: targetWidth, height: targetHeight, fit: 'inside', withoutEnlargement: false })
			.toBuffer();

		const resizedMeta = await sharp(resizedBuffer).metadata();

		// Create blue-transparent padding canvas? We need transparent background (white logo on transparent)
		const canvas = sharp({
			create: {
				width: targetWidth,
				height: targetHeight,
				channels: 4,
				background: { r: 0, g: 0, b: 0, alpha: 0 }
			}
		});

		const composite = await canvas
			.composite([{ input: resizedBuffer, gravity: 'center' }])
			.png()
			.toFile(outPath);

		console.log('Generated', outPath, `(${targetWidth}x${targetHeight})`);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
})(); 