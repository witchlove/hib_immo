var InfoFormController = Ember.ObjectController.extend(Ember.Validations.Mixin, {
    actions: {
        sendMail: function () {

            var valid = true;

            //TODO Bert fix validations
            /*
             if(this.get('model.name') === '' || this.get('model.name') === undefined ){
             valid=false;
             }
             */

            if (valid) {
                //$.post("http://0.0.0.0:5000/newmail",
                $.post("http://secret-everglades-2606.herokuapp.com/newmail",
                    {
                        subject: 'vraag voor info ',
                        body: this.get('model.question'),
                        from: this.get('model.mail'),
                        phone: this.get('model.phone'),
                        emaildest: 'info@hib-immo.be'
                    });

                window.history.back();
            }
        },
        cancel: function () {
            window.history.back();
        }
    }
});

export default
InfoFormController;
