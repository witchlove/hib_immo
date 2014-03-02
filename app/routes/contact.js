import Contact from 'appkit/models/contact';

var ContactRoute = Ember.Route.extend({

    model: function() {
            var contact = this.store.createRecord('contact');
            return contact;
        }
});

export default ContactRoute;

