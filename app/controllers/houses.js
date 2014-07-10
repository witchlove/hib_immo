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
    }
});

export default
HousesController;