var ProjectProperty = DS.Model.extend(
    {
        projectPropertyDescription: DS.attr('String'),
        projectPropertyPrice: DS.attr('String'),
        projectPropertyVarious: DS.attr('String')
    }
);

ProjectProperty.FIXTURES = [
    {
        id: 1,
        projectPropertyDescription: "Gelijkvloers met 2 slaapkamers",
        projectPropertyPrice: '238.000 EUR',
        projectPropertyVarious: 'ingang 2'
    }
]

export default
ProjectProperty;