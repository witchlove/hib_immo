var Image = DS.Model.extend(
    {
        url: DS.attr('string')
    }
);

Image.FIXTURES = [
    {
        id: 1,
        url: 'assets/images/project_dekeyzer/dekeyzer_buiten1.JPG'
    },
    {
        id: 2,
        url: 'assets/images/project_dekeyzer/dekeyzer_buiten2.JPG'
    },
    {
        id: 3,
        url: 'assets/images/project_dekeyzer/dekeyzer_buiten3.JPG'
    },
    {
        id: 4,
        url: 'assets/images/project_dekeyzer/dekeyzer_buiten4.JPG'
    },
    {
        id: 5,
        url: 'assets/images/project_dekeyzer/dekeyzer_buiten5.JPG'
    },
    {
        id: 6,
        url: 'assets/images/project_dekeyzer/dekeyzer_buiten6.JPG'
    },
    {
        id: 7,
        url: 'assets/images/project_dekeyzer/dekeyzer_buiten7.JPG'
    },
    {
        id: 8,
        url: 'assets/images/project_dekeyzer/dekeyzer_buiten8.JPG'
    },
    {
        id: 9,
        url: 'assets/images/project_dekeyzer/dekeyzer_buiten9.JPG'
    },
    {
        id: 10,
        url: 'assets/images/project_dekeyzer/dekeyzer_living1.JPG'
    },
    {
        id: 11,
        url: 'assets/images/project_dekeyzer/dekeyzer_living2.JPG'
    },
    {
        id: 12,
        url: 'assets/images/project_dekeyzer/dekeyzer_living3.JPG'
    },
    {
        id: 13,
        url: 'assets/images/project_dekeyzer/dekeyzer_keuken1.JPG'
    },
    {
        id: 14,
        url: 'assets/images/project_dekeyzer/dekeyzer_keuken2.JPG'
    },
    {
        id: 15,
        url: 'assets/images/project_dekeyzer/dekeyzer_keuken3.JPG'
    },
    {
        id: 16,
        url: 'assets/images/project_dekeyzer/dekeyzer_slaapkamer1.JPG'
    },
    {
        id: 17,
        url: 'assets/images/project_dekeyzer/dekeyzer_slaapkamer2.JPG'
    },
    {
        id: 18,
        url: 'assets/images/project_dekeyzer/dekeyzer_slaapkamer3.JPG'
    },
    {
        id: 19,
        url: 'assets/images/project_dekeyzer/dekeyzer_slaapkamer4.JPG'
    },
    {
        id: 20,
        url: 'assets/images/project_dekeyzer/dekeyzer_slaapkamer5.JPG'
    },
    {
        id: 21,
        url: 'assets/images/project_dekeyzer/dekeyzer_slaapkamer6.JPG'
    },
    {
        id: 22,
        url: 'assets/images/project_dekeyzer/dekeyzer_badkamer1.JPG'
    },
    {
        id: 23,
        url: 'assets/images/project_dekeyzer/dekeyzer_badkamer2.JPG'
    },
    {
        id: 24,
        url: 'assets/images/project_dekeyzer/dekeyzer_toilet.JPG'
    },
    {
        id: 25,
        url: 'assets/images/project_dekeyzer/dekeyzer_gang1.JPG'
    },
    {
        id: 26,
        url: 'assets/images/project_dekeyzer/dekeyzer_zolder1.JPG'
    },
    {
        id: 27,
        url: 'assets/images/project_dekeyzer/dekeyzer_bureau1.JPG'
    },
    {
        id: 28,
        url: 'assets/images/project_schellens/schellens_01.JPG'
    },
    {
        id: 29,
        url: 'assets/images/project_schellens/schellens_02.JPG'
    },
    {
        id: 30,
        url: 'assets/images/project_schellens/schellens_03.JPG'
    },
    {
        id: 31,
        url: 'assets/images/project_schellens/schellens_04.JPG'
    },
    {
        id: 32,
        url: 'assets/images/project_schellens/schellens_05.JPG'
    },
    {
        id: 33,
        url: 'assets/images/project_schellens/schellens_06.JPG'
    },
    {
        id: 34,
        url: 'assets/images/project_schellens/schellens_07.JPG'
    },
    {
        id: 35,
        url: 'assets/images/project_schellens/schellens_08.JPG'
    },
    {
        id: 36,
        url: 'assets/images/project_schellens/schellens_09.JPG'
    },
    {
        id: 37,
        url: 'assets/images/project_schellens/schellens_10.JPG'
    },
    {
        id: 38,
        url: 'assets/images/project_schellens/schellens_11.JPG'
    },
    {
        id: 39,
        url: 'assets/images/project_schellens/schellens_12.JPG'
    },
    {
        id: 40,
        url: 'assets/images/project_schellens/schellens_13.JPG'
    },
    {
        id: 41,
        url: 'assets/images/project_deckers/deckers_01.JPG'
    },
    {
        id: 42,
        url: 'assets/images/project_deckers/deckers_02.JPG'
    },
    {
        id: 43,
        url: 'assets/images/project_deckers/deckers_03.JPG'
    },
    {
        id: 44,
        url: 'assets/images/project_deckers/deckers_04.JPG'
    },
    {
        id: 45,
        url: 'assets/images/project_deckers/deckers_05.JPG'
    },
    {
        id: 46,
        url: 'assets/images/project_deckers/deckers_06.JPG'
    },
    {
        id: 47,
        url: 'assets/images/project_deckers/deckers_07.JPG'
    },
    {
        id: 48,
        url: 'assets/images/project_deckers/deckers_08.JPG'
    },
    {
        id: 49,
        url: 'assets/images/project_deckers/deckers_09.JPG'
    },
    {
        id: 50,
        url: 'assets/images/project_deckers/deckers_10.JPG'
    },
    {
        id: 51,
        url: 'assets/images/project_deckers/deckers_11.JPG'
    },
    {
        id: 52,
        url: 'assets/images/project_deckers/deckers_12.JPG'
    },
    {
        id: 53,
        url: 'assets/images/project_deckers/deckers_13.JPG'
    },
    {
        id: 54,
        url: 'assets/images/project_deckers/deckers_14.JPG'
    },
    {
        id: 55,
        url: 'assets/images/project_covast_kanaalstraat/kanaalstraat01.jpg'
    },
    {
        id: 56,
        url: 'assets/images/project_covast_kanaalstraat/kanaalstraat02.jpg'
    },
    {
        id: 57,
        url: 'assets/images/project_covast_kanaalstraat/kanaalstraat03.jpg'
    },
    {
        id: 58,
        url: 'assets/images/project_covast_veemarkt/veemarkt01.JPG'
    },
    {
        id: 59,
        url: 'assets/images/project_covast_veemarkt/veemarkt02.JPG'
    },
    {
        id: 60,
        url: 'assets/images/project_covast_veemarkt/veemarkt03.JPG'
    },
    {
        id: 61,
        url: 'assets/images/project_covast_veemarkt/veemarkt04.JPG'
    },
    {
        id: 62,
        url: 'assets/images/project_covast_veemarkt/veemarkt05.JPG'
    },
    {
        id: 63,
        url: 'assets/images/project_covast_veemarkt/veemarkt06.JPG'
    },
    {
        id: 64,
        url: 'assets/images/project_covast_veemarkt/veemarkt07.JPG'
    },
    {
        id: 65,
        url: 'assets/images/project_covast_veemarkt/veemarkt08.JPG'
    },
    {
        id: 66,
        url: 'assets/images/project_covast_cleynaertstraat/cleynaertstraat01.jpg'
    },
    {
        id: 67,
        url: 'assets/images/project_covast_cleynaertstraat/cleynaertstraat02.jpg'
    },
    {
        id: 68,
        url: 'assets/images/project_covast_cleynaertstraat/cleynaertstraat03.jpg'
    },
    {
        id: 69,
        url: 'assets/images/project_covast_cleynaertstraat/cleynaertstraat04.jpg'
    },
    {
        id: 70,
        url: 'assets/images/project_covast_cleynaertstraat/cleynaertstraat05.jpg'
    },
    {
        id: 71,
        url: 'assets/images/project_covast_cleynaertstraat/cleynaertstraat06.jpg'
    },
    {
        id: 72,
        url: 'assets/images/project_covast_cleynaertstraat/cleynaertstraat07.jpg'
    },
    {
        id: 73,
        url: 'assets/images/project_covast_cleynaertstraat/cleynaertstraat08.jpg'
    },
    {
        id: 74,
        url: 'assets/images/project_covast_cleynaertstraat/cleynaertstraat09.jpg'
    },
    {
        id: 75,
        url: 'assets/images/project_kleinvleminkstraat/kleinvleminkstraat01.jpg'
    },
    {
        id: 76,
        url: 'assets/images/project_kleinvleminkstraat/kleinvleminkstraat02.jpg'
    },
    {
        id: 77,
        url: 'assets/images/project_kleinvleminkstraat/kleinvleminkstraat03.jpg'
    },
    {
        id: 78,
        url: 'assets/images/project_kleinvleminkstraat/kleinvleminkstraat04.jpg'
    },
    {
        id: 79,
        url: 'assets/images/project_kleinvleminkstraat/kleinvleminkstraat05.jpg'
    },
    {
        id: 80,
        url: 'assets/images/project_kleinvleminkstraat/kleinvleminkstraat06.jpg'
    },
    {
        id: 81,
        url: 'assets/images/project_kleinvleminkstraat/kleinvleminkstraat07.jpg'
    },
    {
        id: 82,
        url: 'assets/images/project_kleinvleminkstraat/kleinvleminkstraat08.jpg'
    },
    {
        id: 83,
        url: 'assets/images/project_kleinvleminkstraat/kleinvleminkstraat09.jpg'
    },
    {
        id: 84,
        url: 'assets/images/project_kleinvleminkstraat/kleinvleminkstraat10.jpg'
    },
    {
        id: 85,
        url: 'assets/images/project_kleinvleminkstraat/kleinvleminkstraat11.jpg'
    },
    {
        id: 86,
        url: 'assets/images/project_kleinvleminkstraat/kleinvleminkstraat12.jpg'
    },
    {
        id: 87,
        url: 'assets/images/project_kleinvleminkstraat/kleinvleminkstraat13.jpg'
    },
    {
        id: 88,
        url: 'assets/images/project_kleinvleminkstraat/kleinvleminkstraat14.jpg'
    },
    {
        id: 89,
        url: 'assets/images/project_vanaeken/vanaeken001.jpg'
    },
    {
        id: 90,
        url: 'assets/images/project_vanaeken/vanaeken002.jpg'
    },
    {
        id: 91,
        url: 'assets/images/project_vanaeken/vanaeken003.jpg'
    },
    {
        id: 92,
        url: 'assets/images/project_vanaeken/vanaeken004.jpg'
    },
    {
        id: 93,
        url: 'assets/images/project_vanaeken/vanaeken005.jpg'
    },
    {
        id: 94,
        url: 'assets/images/project_vanaeken/vanaeken006.jpg'
    },
    {
        id: 95,
        url: 'assets/images/project_vanaeken/vanaeken007.jpg'
    },
    {
        id: 96,
        url: 'assets/images/project_vanaeken/vanaeken008.jpg'
    },
    {
        id: 97,
        url: 'assets/images/project_vanaeken/vanaeken009.jpg'
    },
    {
        id: 98,
        url: 'assets/images/project_vanaeken/vanaeken010.jpg'
    },
    {
        id: 99,
        url: 'assets/images/project_vanaeken/vanaeken011.jpg'
    },
    {
        id: 100,
        url: 'assets/images/project_vanaeken/vanaeken012.jpg'
    },
    {
        id: 101,
        url: 'assets/images/project_vanaeken/vanaeken013.jpg'
    },
    {
        id: 102,
        url: 'assets/images/project_vanaeken/vanaeken014.jpg'
    },
    {
        id: 103,
        url: 'assets/images/project_vanaeken/vanaeken015.jpg'
    }
];

export default
Image;

