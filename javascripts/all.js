(function() {
  var GW;

  GW = (function() {

    function GW() {
      this.createEvents();
    }

    GW.prototype.createEvents = function() {
      var _self;
      _self = this;
      return $('body').find("[data-type='track']").click(function(e) {
        var _destination, _location, _name, _properties,
          _this = this;
        e.preventDefault();
        _name = $(this).data('name');
        _properties = $(this).data('properties');
        _destination = _properties.destination ? _properties.destination : "";
        _location = _properties.location ? _properties.location : "";
        _gaq.push(['_trackEvent', 'Social', "" + _name + ": " + _destination + " " + _location]);
        return mixpanel.track("" + _name + ": " + _destination + " " + _location, _properties, function() {
          return _self.setURL(_this.href);
        });
      });
    };

    GW.prototype.setURL = function(url) {
      var _this = this;
      setTimeout((function() {
        return location.href = url;
      }), 100);
    };

    return GW;

  })();

  window.gw = new GW();

}).call(this);
