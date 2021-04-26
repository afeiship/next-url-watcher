(function () {
  const NxUrlWatcher = require('../src');

  describe('NxUrlWatcher.methods', function () {
    test('init', function () {
      var wather = new NxUrlWatcher();

      wather.watch((old, current) => {
        console.log(old, current);
      });
    });
  });
})();
