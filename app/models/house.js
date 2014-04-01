var House = DS.Model.extend(
    {
        short_description: DS.attr('string'),
        description: DS.attr('string'),
        price: DS.attr('number'),
        location_url : DS.attr('string'),
        rooms : DS.attr('number'),
        images: DS.hasMany('Image',{async:true})



    }
);


House.FIXTURES = [
    {
        id: 1,
        short_description: 'Prachtige nieuwbouw woning !!!',
        description: 'Zeer ruime, verder af te werken HOB, winddicht Deze winddichte HOB is verder af te werken naar eigen smaak. Hoogwaardige materialen gebruikt en beschikbaar voor de afwerking (lijst van materialen beschikbaar op ons kantoor). De woning is volledig onderkelderd Gelijkvloers: Inkomhal met aparte WC, living, open keuken met aansluitende berging Eerste verdiep: hal met WC, 3 slaapkamers, badkamer Tweede verdiep: badkamer, slaapkamer en dressing Hier kan u rust vinden midden in het dorp van Rillaar en in de nabijheid van winkels, scholen, de bibliotheek en kinderopvang. Kom deze woning bezoeken en laat u verrassen door de ruimte die deze woning u te bieden heeft. Wij hebben een volledig dossier om u aan te tonen welke kosten reeds gemaakt zijn en wat het zou kosten om de woning volledig af te werken, dit dossier kan u inkijken op ons kantoor. Prijs exclusief BTW. ',
        price: 1000,
        location_url :"<iframe width=\"525\" height=\"450\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.be/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Diestsesteenweg+353,+Aarschot&amp;aq=0&amp;oq=dies&amp;sll=50.501079,4.466112&amp;sspn=2.309603,6.696167&amp;ie=UTF8&amp;hq=&amp;hnear=Diestsesteenweg+353,+3202+Aarschot&amp;t=m&amp;z=14&amp;ll=50.974154,4.896926&amp;output=embed\"></iframe><br /><small><a href=\"https://maps.google.be/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Diestsesteenweg+353,+Aarschot&amp;aq=0&amp;oq=dies&amp;sll=50.501079,4.466112&amp;sspn=2.309603,6.696167&amp;ie=UTF8&amp;hq=&amp;hnear=Diestsesteenweg+353,+3202+Aarschot&amp;t=m&amp;z=14&amp;ll=50.974154,4.896926\" style=\"color:#0000FF;text-align:left\">View Larger Map</a></small>",
        rooms: 2,
        images: [1,2,3,4,5,6,7,8]
    },
    {
        id: 2,
        short_description: 'Prachtige nieuwbouw woning !!!',
        description: 'Huis 2',
        price: 5000,
        location_url :"<iframe width=\"525\" height=\"450\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.be/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Diestsesteenweg+353,+Aarschot&amp;aq=0&amp;oq=dies&amp;sll=50.501079,4.466112&amp;sspn=2.309603,6.696167&amp;ie=UTF8&amp;hq=&amp;hnear=Diestsesteenweg+353,+3202+Aarschot&amp;t=m&amp;z=14&amp;ll=50.974154,4.896926&amp;output=embed\"></iframe><br /><small><a href=\"https://maps.google.be/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Diestsesteenweg+353,+Aarschot&amp;aq=0&amp;oq=dies&amp;sll=50.501079,4.466112&amp;sspn=2.309603,6.696167&amp;ie=UTF8&amp;hq=&amp;hnear=Diestsesteenweg+353,+3202+Aarschot&amp;t=m&amp;z=14&amp;ll=50.974154,4.896926\" style=\"color:#0000FF;text-align:left\">View Larger Map</a></small>",
        rooms: 4,
        images: [3,4,5,6,7,8]
    }
];

export default House;