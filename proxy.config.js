const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8000/api/militares',
    }
  ];

module.exports = proxy;