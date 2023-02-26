const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: 'http://fmtok8s-frontend.default.35.204.218.48.sslip.io',
      changeOrigin: true,
      pathRewrite: {
        '^/api/': '/', // remove base path
      },
    })
  );
};