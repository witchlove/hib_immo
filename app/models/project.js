var Project = DS.Model.extend(
    {
        projectName: DS.attr('String'),
        projectDescription: DS.attr('String'),
        projectLocation: DS.attr('String'),
        projectProperties: DS.hasMany('ProjectProperty', {async: true})
    }
);

Project.FIXTURES = [
    {
        id: 1,
        projectName: "Nieuwbouwproject te Scherpenheuvel op een boogscheut van de Basiliek",
        projectDescription: '<p>Deze nieuwbouwappartementen zijn mooi afgewerkt en zijn voorzien van alle comfort. Er zijn verschillende appartementen beschikbaar.</p> <p>Er is de mogelijkheid om ondergrondse parkeerplaatsen bij te kopen en een berging.</p><p> Voor uw comfort is er een lift aanwezig die zelfs toegang biedt tot de ondergrondse garage.</p><p> De appartementen zijn nog niet afgewerkt, maar zullen afgewerkt worden na ondertekening van de verkoopovereenkomst. De prijs is exclusief vloer slaapkamers en keuken, TENZIJ u een overeenkomst tekent voor eind september, dan is er een standaard, maar zeer mooi afgewerkte keuken inbegrepen en de vloer van de slaapkamers ook.</p><p> Aarzel dus niet langer en vraag vandaag nog uw bezoek aan dit prachtige complex.</p>',
        projectLocation: 'Scherpenheuvel',
        projectProperties: [1]
    }
]

export default
Project;