var HouseView = Ember.View.extend({
    didInsertElement: function () {
        $(".fancybox").fancybox({
            openEffect: 'none',
            closeEffect: 'none'
        });
        $(".correct .active").tab('show');
    }
});

export default
HouseView;