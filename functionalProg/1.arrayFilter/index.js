/***
#filter es un metodo inmutable, es decir no modifica el arreglo con el cual itera, si no que genera uno nuevo, con los datos filtrados
***/
const numeros = [1,2,3,4,5,6,7,8,9]

const arrayData = [
    {
        "_id": "63617295cb4c78f0a95b2d5d",
        "index": 0,
        "guid": "61c6836a-75ee-424c-adab-df1310cc61a6",
        "isActive": false,
        "balance": "$1,758.06",
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "eyeColor": "blue",
        "name": "Sutton Rasmussen",
        "gender": "male",
        "company": "JETSILK",
        "email": "suttonrasmussen@jetsilk.com",
        "phone": "+1 (881) 509-2431",
        "address": "874 Orange Street, Worcester, Northern Mariana Islands, 4828",
        "about": "Ipsum sit do voluptate duis nisi adipisicing quis dolore duis cupidatat. Ipsum id esse commodo commodo fugiat adipisicing velit tempor. Esse exercitation sunt velit duis excepteur amet labore laborum deserunt proident do duis elit aute. Tempor ut aute consequat magna aliqua ex esse esse laboris ipsum cillum aliqua aute tempor.\r\n",
        "registered": "2014-01-29T03:09:13 +03:00",
        "latitude": 4.334974,
        "longitude": -49.68014,
        "tags": [
            "pariatur",
            "sunt",
            "Lorem",
            "anim",
            "dolor",
            "labore",
            "veniam"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Bishop Osborne"
            },
            {
                "id": 1,
                "name": "Kris Orr"
            },
            {
                "id": 2,
                "name": "Kane Fischer"
            }
        ],
        "greeting": "Hello, Sutton Rasmussen! You have 5 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "63617295b4378b1ae1edfefb",
        "index": 1,
        "guid": "cdccf9ed-c96e-4e42-99c9-0c2f4142ca01",
        "isActive": false,
        "balance": "$3,728.35",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "green",
        "name": "Casey Jones",
        "gender": "female",
        "company": "ENTOGROK",
        "email": "caseyjones@entogrok.com",
        "phone": "+1 (902) 589-3315",
        "address": "251 Sackman Street, Brookfield, District Of Columbia, 1124",
        "about": "Tempor esse Lorem ipsum pariatur amet est exercitation duis non id. Officia ea deserunt sint duis consectetur. Sit anim Lorem occaecat eu eu ad deserunt.\r\n",
        "registered": "2017-05-10T06:31:29 +03:00",
        "latitude": 34.525526,
        "longitude": 17.548786,
        "tags": [
            "ad",
            "veniam",
            "dolore",
            "cupidatat",
            "tempor",
            "et",
            "tempor"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Althea Mclean"
            },
            {
                "id": 1,
                "name": "Cantu Frank"
            },
            {
                "id": 2,
                "name": "Alexandria Russo"
            }
        ],
        "greeting": "Hello, Casey Jones! You have 8 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "636172950c9a4ac1a42ce43b",
        "index": 2,
        "guid": "66f97812-7996-4944-9885-07a74d705dd0",
        "isActive": false,
        "balance": "$3,595.88",
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "eyeColor": "brown",
        "name": "Jolene Mcintyre",
        "gender": "female",
        "company": "GEEKWAGON",
        "email": "jolenemcintyre@geekwagon.com",
        "phone": "+1 (869) 533-2390",
        "address": "853 Denton Place, Springdale, Mississippi, 7026",
        "about": "Labore culpa duis velit velit ullamco minim ipsum est excepteur eu id fugiat laborum. Excepteur eu tempor cillum eiusmod qui excepteur. Deserunt ea ad sunt est ut occaecat non reprehenderit nostrud aute cillum veniam in. Consequat veniam exercitation adipisicing qui eu irure voluptate ea aliqua ipsum sunt voluptate nulla. Ut elit enim quis eiusmod labore minim incididunt irure est esse est exercitation. Dolor exercitation deserunt ex pariatur cillum laborum est.\r\n",
        "registered": "2022-04-26T03:00:49 +04:00",
        "latitude": 73.686103,
        "longitude": -4.887784,
        "tags": [
            "cupidatat",
            "proident",
            "Lorem",
            "tempor",
            "magna",
            "commodo",
            "irure"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Amelia Travis"
            },
            {
                "id": 1,
                "name": "Hansen Sexton"
            },
            {
                "id": 2,
                "name": "Marquita Koch"
            }
        ],
        "greeting": "Hello, Jolene Mcintyre! You have 4 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "636172956b6701dd7eb19d61",
        "index": 3,
        "guid": "5982a49e-d5e4-4f6f-b789-a6308e9f8425",
        "isActive": true,
        "balance": "$3,001.45",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "eyeColor": "brown",
        "name": "Farley Ochoa",
        "gender": "male",
        "company": "SINGAVERA",
        "email": "farleyochoa@singavera.com",
        "phone": "+1 (901) 575-2201",
        "address": "757 Amboy Street, Ripley, North Carolina, 826",
        "about": "Consectetur aute ullamco nisi sit adipisicing. Eiusmod nulla nulla excepteur mollit aliquip qui id dolore cupidatat anim labore. Non culpa dolore aute minim adipisicing incididunt esse sit elit. Ad qui enim et ullamco et amet esse. Ullamco commodo aliqua qui qui duis ut ut fugiat eiusmod magna eu quis elit nulla. Irure veniam reprehenderit anim ullamco aute culpa adipisicing dolor. Voluptate esse et mollit pariatur pariatur irure mollit sunt dolore eiusmod quis.\r\n",
        "registered": "2022-08-29T11:11:02 +04:00",
        "latitude": -66.488142,
        "longitude": -67.107345,
        "tags": [
            "tempor",
            "fugiat",
            "nulla",
            "elit",
            "nisi",
            "reprehenderit",
            "ex"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Mclaughlin Herrera"
            },
            {
                "id": 1,
                "name": "Kim Pollard"
            },
            {
                "id": 2,
                "name": "Montgomery Bender"
            }
        ],
        "greeting": "Hello, Farley Ochoa! You have 9 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "63617295266607fc7e00669a",
        "index": 4,
        "guid": "a8ca5696-76a7-4f19-97b1-508e5e8ac655",
        "isActive": true,
        "balance": "$2,241.59",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "eyeColor": "green",
        "name": "Kimberley Medina",
        "gender": "female",
        "company": "NSPIRE",
        "email": "kimberleymedina@nspire.com",
        "phone": "+1 (993) 502-2581",
        "address": "906 Homecrest Avenue, Orovada, Minnesota, 8063",
        "about": "Minim deserunt culpa esse et sit nulla fugiat duis mollit elit magna. Ut et minim magna pariatur nostrud. Sunt officia elit Lorem nisi irure exercitation consequat. Qui nulla ipsum qui excepteur est. Reprehenderit consectetur voluptate excepteur nisi ex adipisicing. Dolore sint officia consequat cupidatat do.\r\n",
        "registered": "2016-09-23T08:16:27 +03:00",
        "latitude": -54.551492,
        "longitude": -99.271893,
        "tags": [
            "cillum",
            "aliquip",
            "commodo",
            "enim",
            "ex",
            "eiusmod",
            "incididunt"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Frederick Perry"
            },
            {
                "id": 1,
                "name": "Marks Pugh"
            },
            {
                "id": 2,
                "name": "Teri Norman"
            }
        ],
        "greeting": "Hello, Kimberley Medina! You have 7 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "636172954c94b2c3b46c8f5c",
        "index": 5,
        "guid": "7fc696d2-5b43-47a3-b992-dfa6caa343c4",
        "isActive": true,
        "balance": "$3,265.74",
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "eyeColor": "blue",
        "name": "Leola Clark",
        "gender": "female",
        "company": "SONGLINES",
        "email": "leolaclark@songlines.com",
        "phone": "+1 (837) 402-3239",
        "address": "640 Chauncey Street, Belleview, Illinois, 8937",
        "about": "Ad eiusmod do ipsum incididunt aliqua sit non laborum amet magna laborum aliquip non et. Excepteur dolore in reprehenderit ad fugiat dolore anim cupidatat sint irure consectetur do aute. Nulla ipsum ad labore esse sint fugiat exercitation. Sit id ullamco laborum commodo elit nisi sunt ut sint veniam minim elit adipisicing sit. Lorem sunt eiusmod elit aliquip irure ut ex Lorem aliquip deserunt et.\r\n",
        "registered": "2017-11-30T11:57:33 +03:00",
        "latitude": -45.581307,
        "longitude": 166.080268,
        "tags": [
            "labore",
            "aute",
            "exercitation",
            "qui",
            "ad",
            "occaecat",
            "laboris"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Tameka Lane"
            },
            {
                "id": 1,
                "name": "Briana Phillips"
            },
            {
                "id": 2,
                "name": "Janine Carrillo"
            }
        ],
        "greeting": "Hello, Leola Clark! You have 8 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "63617295d05ba1ed6bdf00fc",
        "index": 6,
        "guid": "e7529bd5-9bac-48c1-8fd7-b2496b5309e6",
        "isActive": false,
        "balance": "$2,475.75",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "eyeColor": "green",
        "name": "Steele Morales",
        "gender": "male",
        "company": "ZEDALIS",
        "email": "steelemorales@zedalis.com",
        "phone": "+1 (938) 593-3276",
        "address": "261 Noble Street, Iola, Oklahoma, 1631",
        "about": "Mollit elit culpa enim aliqua minim minim ad. Consequat adipisicing do sunt consectetur pariatur proident voluptate deserunt ipsum voluptate aute sunt. Cillum nisi ut magna velit elit adipisicing.\r\n",
        "registered": "2019-01-05T06:05:01 +03:00",
        "latitude": 30.720225,
        "longitude": -147.841424,
        "tags": [
            "reprehenderit",
            "Lorem",
            "elit",
            "ex",
            "sunt",
            "cillum",
            "commodo"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Janelle Herring"
            },
            {
                "id": 1,
                "name": "Prince Perez"
            },
            {
                "id": 2,
                "name": "Mckee Ashley"
            }
        ],
        "greeting": "Hello, Steele Morales! You have 8 unread messages.",
        "favoriteFruit": "banana"
    }
]

 const numerosFiltados = numeros.filter(x => x < 5)

const less30 = arrayData.filter(x => x.age < 30)
console.log(less30)