var HouseView = Ember.View.extend({
    didInsertElement: function () {
        $(".fancybox").fancybox({
            openEffect: 'none',
            closeEffect: 'none'
        });
        $(".correct .active").tab('show');
        //$('#tabs a:first').tab('show');
        //$('#tabs a[href="#Omschrijving"]').tab('show');
    }
});

export default
HouseView;