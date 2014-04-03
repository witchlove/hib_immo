var Document = DS.Model.extend({
    url : DS.attr(),
    description : DS.attr(),
    icon : DS.attr()
});

Document.FIXTURES = [
    {
        id :1,
        url :'assets/images/project_peeters/grondplan.pdf',
        description : "grondplan",
        icon :'assets/images/pdf.png'
    }
];

export default Document;