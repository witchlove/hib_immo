var IndexView = Ember.View.extend({
    didInsertElement: function(){

        if($.cookie('show_promo') !== 'no'){
            $(".group1").colorbox({rel:'group1'});
            this.$(".group1").click();
            $.cookie('show_promo','no');
        }
    }
});

export default IndexView;
