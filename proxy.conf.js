const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8080',
      pathRewrite: {'^/api' : '/api'}
    }
  ];
  module.exports = proxy;