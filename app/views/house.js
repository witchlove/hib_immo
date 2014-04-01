var HouseView = Ember.View.extend({
    didInsertElement: function () {
        $(".fancybox").fancybox({
            openEffect: 'none',
            closeEffect: 'none'
        });
    }
});

export default HouseView;