var HousesView = Ember.View.extend({
    didInsertElement: function(){
        $('#example').dataTable( {
            "bPaginate": true,
            "bLengthChange": false,
            "bFilter": true,
            "bSort": true,
            "bInfo": false,
            "bAutoWidth": false
        });

        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 1000000,
            values: [ 25000, 1000000 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "E" + ui.values[ 0 ] + " - E " + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "euro" + $( "#slider-range" ).slider( "values", 0 ) +
            " - " + $( "#slider-range" ).slider( "values", 1 ) );
        $( "#slider-rooms" ).slider({
            range: true,
            min: 0,
            max: 10,
            values: [ 0, 10 ],
            slide: function( event, ui ) {
                $( "#rooms" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
            }
        });
        $( "#rooms" ).val($( "#slider-rooms" ).slider( "values", 0 ) +
            " - $" + $( "#slider-rooms" ).slider( "values", 1 ) );
    }
});

export default HousesView;
