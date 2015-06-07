export default
Ember.Route.extend({
    model: function () {
        return ['red', 'yellow', 'blue'];
    },
    beforeModel: function () {
        //this.transitionTo('houses');
    }
});
