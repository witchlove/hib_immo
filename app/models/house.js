var House = DS.Model.extend(
    {
        id: DS.attr('string'),
        description: DS.attr('string'),
        price: DS.attr('number')
    }
);

export default House;