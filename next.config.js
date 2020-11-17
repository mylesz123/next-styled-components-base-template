const withPlugins = require('next-compose-plugins');
// https://github.com/cyrilwanner/next-optimized-images/issues/92
// so I can use images
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    optimizedImages,
    {
      mozjpeg: {
        quality: 90,
      },
      webp: {
        preset: 'default',
        quality: 90,
      },
    },
  ],
]);
