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

                var message = "email : " + this.get('model.mail') + "\n" +
                    "Tel : " + this.get('model.phone') + "\n" +
                    "Vraag : " + this.get('model.question');

                $.post("http://secret-everglades-2606.herokuapp.com/newmail",
                    //$.post("http://0.0.0.0:5000/newmail",
                    {
                        name: this.get('model.name'),
                        body: this.get('model.question'),
                        from: this.get('model.mail'),
                        phone: this.get('model.phone'),
                        emaildest: 'bert.huygens@gmail.com'
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
