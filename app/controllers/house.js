var HouseController = Ember.ObjectController.extend(Ember.GoogleAnalyticsTrackingMixin, {
    actions: {
        fiche: function () {
            window.console.log('fiche');
            this.trackEvent('tab', 'click', 'technische fiche');
        },
        documents: function () {
            window.console.log('docs');
            this.trackEvent('tab', 'click', 'documenten', '5');
        },
        map: function () {
            window.console.log('map');
            this.trackEvent('tab', 'click', 'ligging');
        },
        description: function () {
            window.console.log('description');
            this.trackEvent('tab', 'click', 'omschrijving');
        }
    }
});

export default HouseController;
