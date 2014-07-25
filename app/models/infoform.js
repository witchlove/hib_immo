var InfoForm = DS.Model.extend({
        subject: DS.attr('String'),
        question: DS.attr('String'),
        from: DS.attr('String'),
        name: DS.attr('String'),
        firstName: DS.attr('String'),
        phone: DS.attr('String'),
        mail: DS.attr('String')
    }
);

export default
InfoForm;