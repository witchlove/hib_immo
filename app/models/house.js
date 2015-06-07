var House = DS.Model.extend(
    {
        short_description: DS.attr('string'),
        description: DS.attr('string'),
        price: DS.attr('number'),
        location_url: DS.attr('string'),
        rooms: DS.attr('number'),
        floors: DS.attr('number'),
        bathrooms: DS.attr('number'),
        toilets: DS.attr('number'),
        kitchens: DS.attr('number'),
        garages: DS.attr('number'),
        images: DS.hasMany('Image', {async: true}),
        destination: DS.attr(),
        KI: DS.attr(),
        buildingPermit: DS.attr(),
        landDevelopment: DS.attr(),
        buildingViolation: DS.attr(),
        watertest: DS.attr(),
        epc: DS.attr(),
        epc_nr: DS.attr(),
        for_rent: DS.attr('boolean'),
        for_sale: DS.attr('boolean'),
        salesOption: DS.attr(),
        has_action: DS.attr('boolean'),
        action_text: DS.attr('string'),
        hasDocs: DS.attr('boolean'),
        documents: DS.hasMany('Document', {async: true})

    }
);


House.FIXTURES = [
    {
        id: 15,
        short_description: 'Verzorgde landelijke woning met veel mogelijkheden Prijs : Vanaf 230000,00 €',
        description: '<p>Mooie, verzorgde woning met 3 slaapkamers, mogelijkheid tot vaste trap naar bovenverdieping en extra kamers te maken.</p><p>Ruime living met veel lichtinval met aansluitend de keuken en bureel of eventueel slaapkamer.</p><p>Grote berging en garage met elektrische garagepoort.</p><p>Al de deuren zijn voorzien van extra inbraakbeveiliging en de volledige woning is uitgerust met elektrische rolluiken, onder de woning is een kruipkelder, waar er gemakkelijk toegang is tot de leidingen.</p><p>Gezellige tuin met terras en tuinhuisje.</p><p>De woning is rolstoeltoegankelijk, in de ruime badkamer is een grote inloopdouche waar eventueel de mogelijkheid is om een bad te plaatsen.</p><p>Oprit autostrade (Scherpenheuvel-Zichem) op minder dan 5 km. Bushalte voor de deur en winkels, scholen, apotheek (Rillaar dorp) op ongeveer 3 km.</p><p>Mits kleine opfrissingswerken is dit een uniek pand en zeker een bezoekje waard voor starters.</p>',
        price: "Vanaf 230000,00 €",
        location_url: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.643609893245!2d4.910511599999998!3d50.985777800000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1438ccdaee42d%3A0x467c05506d78e03d!2sMaasstraat+141%2C+3272+Scherpenheuvel-Zichem%2C+Belgium!5e0!3m2!1sen!2s!4v1433662140703\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\"></iframe>",
        rooms: 3,
        bathrooms: 1,
        toilets: 1,
        kitchens: 1,
        garages: 1,
        floors: 0,
        images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
        destination: "woongebied",
        KI: "1.291 €",
        buildingPermit: "Ok",
        watertest: "Onroerend goed, niet gelegen in een overstromingsgebied",
        buildingViolation: "Nee",
        landDevelopment: "Nee",
        for_rent: false,
        for_sale: true,
        has_action: false,
        hasDocs: false,
        salesOption: "Nee",
        action_text: "Nieuw !!!!!",
        epc: " 449 kwh/m²",
        epc_nr: "20141113-0001700152-00000005-5",
        documents: []
    }
];

export default
House;