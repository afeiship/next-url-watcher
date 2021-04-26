(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { interval: 200 };

  var NxUrlWatcher = nx.declare('nx.UrlWatcher', {
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(null, defaults, inOptions);
        this.last = location.href;
        this.current = location.href;
      },
      watch: function (inCallback) {
        var self = this;
        var timer = setInterval(function () {
          self.current = location.href;
          if (self.last !== self.current) {
            self.last = self.current;
            inCallback(self.last, self.current);
          }
        }, this.options.interval);

        return {
          destroy: function () {
            clearInterval(timer);
          }
        };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxUrlWatcher;
  }
})();
