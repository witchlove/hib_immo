var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function () {
    this.route("contact");
    this.route("about", { path: "/about" });
    this.route('houses');
    this.route('house', { path: '/house/:house_id' });
    this.route('project', {path: '/project/:project_id'});
    this.route('infoform');
    this.route('sale');
    this.route('promotion');
});

Router.reopen({
    didTransition: function (infos) {
        this._super(infos);
        if (window._gaq === undefined) {
            return;
        }
        Ember.run.next(function () {
            _gaq.push(['_trackPageview', window.location.hash.substr(1)]);
        });
    }

});

export default
Router;
