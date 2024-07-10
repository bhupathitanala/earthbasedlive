// console.log('setupProxy.js is loaded');
const { createProxyMiddleware } = require('http-proxy-middleware');

// console.log('Setting up API proxy');
module.exports = function(app) {

  // Logging middleware
  app.use('/api', (req, res, next) => {
    // console.log(`API proxy is calling: ${req.method} ${req.url}`);
    next();
  });

  // Proxy middleware
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://3.7.47.11:3001',
      changeOrigin: true,
      secure: false,
    })
  );

  // Proxy for image URLs
  app.use(
    ['/productimages','/mainimages','/hoverimages','/categoryimages','/subcategoryimages','/brandimages','/blogimages','/challengeimages','/profileimages'],
    createProxyMiddleware({
      target: 'http://3.7.47.11:3001', // Replace with the actual image server URL
      changeOrigin: true,
      secure: false,
    })
  );
};