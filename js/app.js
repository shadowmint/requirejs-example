require.config({
    baseUrl: '/js/',
    paths: {
    }
});

require(['foo/foo'], function() {
  console.log('loaded');
});
