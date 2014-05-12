var HousesController = Ember.ObjectController.extend(Ember.GoogleAnalyticsTrackingMixin, {
    selected: '',
    tabs: ['Te Koop', 'Te Huur'],
    actions: {
        tekoop: function () {
            this.trackEvent('tab', 'click', 'te koop');
        },
        tehuur: function () {
            this.trackEvent('tab', 'click', 'te huur');
        }
    },
    didInsertElement: function () {
        alert('testing');

    }

});

export default
HousesController;