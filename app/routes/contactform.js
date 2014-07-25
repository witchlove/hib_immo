import Contact from 'appkit/models/contact';

var ContactformRoute = Ember.Route.extend({

    model: function () {
        var contact = this.store.createRecord('contact');
        return contact;
    }
});

export default
ContactformRoute;

