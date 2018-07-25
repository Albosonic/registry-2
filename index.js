var oc = require('oc');
var gs = require('oc-gs-storage-adapter');

var configuration = {
  verbosity: 0,
  baseUrl: 'https://another-mock-reg.appspot.com/',
  port: 3000,
  tempDir: './temp/',
  refreshInterval: 600,
  pollingInterval: 5,
  storage: {
    adapter: gs,
    options: {
      projectId: 'another-mock-reg',
      bucket: 'staging.another-mock-reg.appspot.com',
      path: '//staging.another-mock-reg.appspot.com/',
      componentsDir: 'components',
    }
  },
  env: { name: 'production' }
};

var registry = new oc.Registry(configuration);

registry.start(function(err, app){
  if(err){
    console.log('Registry not started: ', err);
    process.exit(1);
  }
});