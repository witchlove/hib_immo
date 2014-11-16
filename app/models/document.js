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
    },
    {
        id: 5,
        url: 'assets/images/project_voorkens/documents/bodemattest.pdf',
        description: "bodemattest",
        icon: 'assets/images/pdf.png'
    },
    {
        id: 6,
        url: 'assets/images/project_voorkens/documents/epc.pdf',
        description: "epc",
        icon: 'assets/images/pdf.png'
    },
    {
        id: 7,
        url: 'assets/images/project_voorkens/documents/gewestplan.pdf',
        description: "gewestplan",
        icon: 'assets/images/pdf.png'
    },
    {
        id: 8,
        url: 'assets/images/project_voorkens/documents/kadaster.pdf',
        description: "kadaster",
        icon: 'assets/images/pdf.png'
    },
    {
        id: 9,
        url: 'assets/images/project_voorkens/documents/watertoets.pdf',
        description: "watertoets",
        icon: 'assets/images/pdf.png'
    }

];

export default
Document;