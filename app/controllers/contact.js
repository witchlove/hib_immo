var ContactController = Ember.ObjectController.extend({
    actions:{
         sendmail: function(contact){
             $.post("http://secret-everglades-2606.herokuapp.com/newmail", { subject: this.get('model.subject'), body: this.get('model.question'), from: "test" });
             console.log(this.get('model.subject'));
             console.log("action is working" + contact.subject);
         }
     }
});

export default ContactController;
