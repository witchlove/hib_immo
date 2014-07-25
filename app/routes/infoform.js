import InfoForm from 'appkit/models/infoform';

var InfoFormRoute = Ember.Route.extend({

    model: function () {
        var infoform = this.store.createRecord('infoform');
        return infoform;
    }
});

export default
InfoFormRoute;
