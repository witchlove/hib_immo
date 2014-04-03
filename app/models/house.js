var House = DS.Model.extend(
    {
        short_description: DS.attr('string'),
        description: DS.attr('string'),
        price: DS.attr('number'),
        location_url: DS.attr('string'),
        rooms: DS.attr('number'),
        floors:DS.attr('number'),
        bathrooms: DS.attr('number'),
        toilets : DS.attr('number'),
        kitchens: DS.attr('number'),
        images: DS.hasMany('Image', {async: true}),
        destination: DS.attr(),
        KI: DS.attr(),
        salesOption: DS.attr(),
        buildingPermit: DS.attr(),
        landDevelopment: DS.attr(),
        buildingViolation: DS.attr(),
        epc : DS.attr(),
        documents : DS.hasMany('Document', {async : true}),

    }
);


House.FIXTURES = [
    {
        id: 1,
        short_description: 'Prachtige nieuwbouw woning',
        description: '<bold>Prijs 270000,00 euro exclusief BTW.</bold><br><p>Zeer ruime, verder af te werken HOB, winddicht Deze winddichte HOB is verder af te werken naar eigen smaak. Hoogwaardige materialen gebruikt en beschikbaar voor de afwerking (lijst van materialen beschikbaar op ons kantoor).De woning is volledig onderkelderd</p> <p>Gelijkvloers: Inkomhal met aparte WC, living, open keuken met aansluitende berging</p> <p>Eerste verdiep: hal met WC, 3 slaapkamers, badkamer</p><p>Tweede verdiep: badkamer, slaapkamer en dressing</p> <p>Hier kan u rust vinden midden in het dorp van Rillaar en in de nabijheid van winkels, scholen, de bibliotheek en kinderopvang. Kom deze woning bezoeken en laat u verrassen door de ruimte die deze woning u te bieden heeft. Wij hebben een volledig dossier om u aan te tonen welke kosten reeds gemaakt zijn en wat het zou kosten om de woning volledig af te werken, dit dossier kan u inkijken op ons kantoor.',
        price: "270000 excl btw",
        location_url: "<iframe width=\"425\" height=\"350\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Motteveld+30,+Aarschot,+Belgium&amp;aq=0&amp;oq=m&amp;sll=50.501079,4.466112&amp;sspn=2.442388,6.696167&amp;ie=UTF8&amp;hq=&amp;hnear=Motteveld+30,+3202+Aarschot,+Belgium&amp;t=m&amp;z=14&amp;ll=50.976087,4.89834&amp;output=embed\"></iframe><br /><small><a href=\"https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Motteveld+30,+Aarschot,+Belgium&amp;aq=0&amp;oq=m&amp;sll=50.501079,4.466112&amp;sspn=2.442388,6.696167&amp;ie=UTF8&amp;hq=&amp;hnear=Motteveld+30,+3202+Aarschot,+Belgium&amp;t=m&amp;z=14&amp;ll=50.976087,4.89834\" style=\"color:#0000FF;text-align:left\">View Larger Map</a></small>",
        rooms: 4,
        bathrooms:1,
        toilets:3,
        kitchens:1,
        floors:2,
        images: [1, 2, 3, 4, 5, 6, 7, 8],
        destination : "woongebied",
        KI: "NVT",
        salesOption: "Nee",
        buildingPermit: "Ok",
        landDevelopment: "Onbekend",
        buildingViolation:"Nee" ,
        epc: "NVT op woning zonder verwarming",
        documents:[]
    },
    {
        id: 2,
        short_description: 'Prachtige nieuwbouw woning !!!',
        description: 'Huis 2',
        price: 5000,
        location_url: "<iframe width=\"525\" height=\"450\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.be/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Diestsesteenweg+353,+Aarschot&amp;aq=0&amp;oq=dies&amp;sll=50.501079,4.466112&amp;sspn=2.309603,6.696167&amp;ie=UTF8&amp;hq=&amp;hnear=Diestsesteenweg+353,+3202+Aarschot&amp;t=m&amp;z=14&amp;ll=50.974154,4.896926&amp;output=embed\"></iframe><br /><small><a href=\"https://maps.google.be/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Diestsesteenweg+353,+Aarschot&amp;aq=0&amp;oq=dies&amp;sll=50.501079,4.466112&amp;sspn=2.309603,6.696167&amp;ie=UTF8&amp;hq=&amp;hnear=Diestsesteenweg+353,+3202+Aarschot&amp;t=m&amp;z=14&amp;ll=50.974154,4.896926\" style=\"color:#0000FF;text-align:left\">View Larger Map</a></small>",
        rooms: 4,
        images: [3, 4, 5, 6, 7, 8]
    }
];

export default House;