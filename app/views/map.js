var MapView = Ember.View.extend({
    layoutName: 'map',
    didInsertElement: function () {
        var mapOptions = {
            center: new google.maps.LatLng(-34.397, 150.644),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(this.$("#map").get(0), mapOptions);
        this.set('map', map);
    },
    redrawMap: function () {
        var newLoc = new google.maps.LatLng(this.get('latitude'), this.get('longitude'));
        this.get('map').setCenter(newLoc)
    }.observes('latitude', 'longitude')

});

export default
MapView;