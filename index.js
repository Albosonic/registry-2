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
      projectId: 'rl-mock-reg',
      bucket: 'rl-mock-reg-bucket',
      path: '//rl-mock-reg-bucket',
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