var ContactformController = Ember.ObjectController.extend({
    actions:{
        submit: function () {
            //$.post("http://secret-everglades-2606.herokuapp.com/newmail", { subject: this.get('model.subject'), body: this.get('model.question'), from: "test" });
             console.log(this.get('model.subject'));

        }
     }
});

export default
ContactformController;
