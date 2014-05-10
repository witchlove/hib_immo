var Image = DS.Model.extend(
    {
       url: DS.attr('string')
    }
);

Image.FIXTURES = [
    {
        id:1,
        url:'assets/images/project_peeters/peeters_001.jpg'
    },
    {
        id:2,
        url:'assets/images/project_peeters/peeters_002.jpg'
    },
    {
        id:3,
        url:'assets/images/project_peeters/peeters_003.jpg'
    },
    {
        id:4,
        url:'assets/images/project_peeters/peeters_004.jpg'
    },
    {
        id:5,
        url:'assets/images/project_peeters/peeters_005.jpg'
    },
    {
        id:6,
        url:'assets/images/project_peeters/peeters_006.jpg'
    },
    {
        id:7,
        url:'assets/images/project_peeters/peeters_007.jpg'
    },
    {
        id:8,
        url:'assets/images/project_peeters/peeters_008.jpg'
    },
    {
        id: 9,
        url: 'assets/images/project_lagha/gelijkvloers.jpg'
    },
    {
        id: 10,
        url: 'assets/images/project_lagha/voorkant.jpg'
    },
    {
        id: 11,
        url: 'assets/images/project_lagha/Voorkant1.jpg'
    },
    {
        id: 12,
        url: 'assets/images/project_lagha/app2.jpg'
    },
    {
        id: 13,
        url: 'assets/images/project_lagha/app3.jpg'
    }
];

export default Image;
