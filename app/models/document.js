var Document = DS.Model.extend({
    url: DS.attr(),
    description: DS.attr(),
    icon: DS.attr()
});

Document.FIXTURES = [
    {
        id: 1,
        url: 'assets/images/project_peeters/RUP.pdf',
        description: "ruimtelijk uitvoeringsplan",
        icon: 'assets/images/pdf.png'
    },
    {
        id: 2,
        url: 'assets/images/project_peeters/Bodemattest.pdf',
        description: "bodemattest",
        icon: 'assets/images/pdf.png'
    },
    {
        id: 3,
        url: 'assets/images/project_peeters/Gewestplan.pdf',
        description: "gewestplan",
        icon: 'assets/images/pdf.png'
    },
    {
        id: 4,
        url: 'assets/images/project_peeters/Watertoets.pdf',
        description: "watertoets",
        icon: 'assets/images/pdf.png'
    }

];

export default
Document;