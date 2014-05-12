var Image = DS.Model.extend(
    {
        url: DS.attr('string')
    }
);

Image.FIXTURES = [
    {
        id: 1,
        url: 'assets/images/project_peeters/peeters_001.jpg'
    },
    {
        id: 2,
        url: 'assets/images/project_peeters/peeters_002.jpg'
    },
    {
        id: 3,
        url: 'assets/images/project_peeters/peeters_003.jpg'
    },
    {
        id: 4,
        url: 'assets/images/project_peeters/peeters_004.jpg'
    },
    {
        id: 5,
        url: 'assets/images/project_peeters/peeters_005.jpg'
    },
    {
        id: 6,
        url: 'assets/images/project_peeters/peeters_006.jpg'
    },
    {
        id: 7,
        url: 'assets/images/project_peeters/peeters_007.jpg'
    },
    {
        id: 8,
        url: 'assets/images/project_peeters/peeters_008.jpg'
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
    },
    {
        id: 14,
        url: 'assets/images/project_kriekebeek/project_krieberg_midden_1.JPG'
    },
    {
        id: 15,
        url: 'assets/images/project_kriekebeek/project_krieberg_midden_2.JPG'
    },
    {
        id: 16,
        url: 'assets/images/project_kriekebeek/project_krieberg_midden_3.JPG'
    },
    {
        id: 17,
        url: 'assets/images/project_kriekebeek/project_krieberg_midden_4.JPG'
    },
    {
        id: 18,
        url: 'assets/images/project_kriekebeek/project_krieberg_midden_5.JPG'
    },
    {
        id: 19,
        url: 'assets/images/project_kriekebeek/project_krieberg_midden_6.JPG'
    },
    {
        id: 20,
        url: 'assets/images/project_kriekebeek/project_krieberg_midden_7.JPG'
    },
    {
        id: 21,
        url: 'assets/images/project_kriekebeek/project_krieberg_midden_8.JPG'
    },
    {
        id: 22,
        url: 'assets/images/project_kriekebeek/project_krieberg_midden_9.JPG'
    },
    {
        id: 23,
        url: 'assets/images/project_kriekebeek/project_krieberg_midden_10.JPG'
    },
    {
        id: 24,
        url: 'assets/images/project_kriekebeek/project_krieberg_midden_11.JPG'
    },
    {
        id: 25,
        url: 'assets/images/project_kriekebeek/project_krieberg_midden_12.JPG'
    },
    {
        id: 26,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_links_0.JPG'
    },
    {
        id: 27,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_links_1.JPG'
    },
    {
        id: 28,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_links_2.JPG'
    },
    {
        id: 29,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_links_3.JPG'
    },
    {
        id: 30,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_links_4.JPG'
    },
    {
        id: 31,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_links_5.JPG'
    },
    {
        id: 32,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_links_6.JPG'
    },
    {
        id: 33,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_links_7.JPG'
    },
    {
        id: 34,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_links_8.JPG'
    },
    {
        id: 35,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_links_9.JPG'
    },
    {
        id: 36,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_links_10.JPG'
    },
    {
        id: 37,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_links_11.JPG'
    },
    {
        id: 38,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_links_12.JPG'
    },
    {
        id: 39,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_links_13.JPG'
    },
    {
        id: 40,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_rechts_0.JPG'
    },
    {
        id: 41,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_rechts_1.JPG'
    },
    {
        id: 42,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_rechts_2.JPG'
    },
    {
        id: 43,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_rechts_3.JPG'
    },
    {
        id: 44,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_rechts_4.JPG'
    },
    {
        id: 45,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_rechts_5.JPG'
    },
    {
        id: 46,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_rechts_6.JPG'
    },
    {
        id: 47,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_rechts_7.JPG'
    },
    {
        id: 48,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_rechts_8.JPG'
    },
    {
        id: 49,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_rechts_9.JPG'
    },
    {
        id: 50,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_rechts_10.JPG'
    },
    {
        id: 51,
        url: 'assets/images/project_kriekebeek/project_kriebestraat_rechts_11.JPG'
    }

];

export default
Image;
