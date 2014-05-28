require.config({
    baseUrl: '/js/',
    paths: {
      'obscure': '../lib/obscure/obscure'
    }
});

require(['foo/foo'], function() {
  console.log('loaded');
});
