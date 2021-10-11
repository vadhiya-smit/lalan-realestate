import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state : {
        signUpForm : {
            fullName : "",
            email : "",
            password : "",
        },
        isLogin : false ,
        user : {},
        otp : {},
        userRole : 0,
        agents : [
            {
                _id:1,
                "fullName" : "Steve Martin",
                "password": "111",
                "email":"[email protected]",
                "contact" : {
                    "phone":"(950) 491-570-180",
                    "mobile":"(+20) 220-145-6330",
                    "website":"modernhouse.com",
                    "fax":"(+44) 161-430-1620",
                },
                "desc": "Lorem ipsum dolor sit amet, consece adiet, consece adipisicing elit, sed do eiusmod tempor incididunt upisicing elit, sed do eiusmod tempor incididunt ut labore dolore.",
                "type" : "Buying Agent",
                "gallery" : {
                    "profile" : "/assets/images/agents/grid/1.png",
                    //singleImg : "/assets/images/agents/single/1.jpg"
                },
                "role" : 2,
                "isActive" : true,
                /* img : "/assets/images/agents/grid/1.png", */
                "socialLinks" : {
                    "facebook" : "#",
                    "twitter" : "#",
                    "linkedin" : "#",
                    "dribbble" : "#",
                    "googlePlus" : "#",
                    "pinterest" : "#",
                },
                agencyId : ""
            },
            {
                _id :2 ,
                "fullName" : "Mark Smith",
                "email":"[email protected]",
                "password" : "111",
                "desc": "Lorem ipsum dolor sit amet, consece et, consece adipisicing elit, sed do eiusmod tempor incididunt u adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.",
                "type" : "Selling Agent",
                "contact" : {
                    "phone":"(950) 491-570-180",
                    "mobile":"(+20) 220-145-6330",
                    "website":"modernhouse.com",
                    "fax":"(+44) 161-430-1620",
                },
                "gallery" : {
                    "profile" : "/assets/images/agents/grid/2.png"
                    /* gridImg : "/assets/images/agents/grid/2.png",
                    singleImg : "" */
                },
                "role" : 2,
                "isActive" : true,
                "socialLinks" : {
                    "facebook" : "#",
                    "twitter" : "#",
                    "linkedin" : "#",
                    "dribbble" : "#",
                    "googlePlus" : "#",
                    "pinterest" : "#",
                },
                "agencyId" : ""
            },
            {
                _id :3 ,
                "fullName" : "Ryan Printz",
                "type" : "Real Estate Broker",
                "email":"[email protected]",
                "password" : "111",
                "gallery" : {
                    "profile" : "/assets/images/agents/grid/3.png",
                    /* gridImg : "/assets/images/agents/grid/3.png",
                    singleImg : "" */
                },
                "desc": "Lorem ipsum dolor sit amet, conseet, consece adipisicing elit, sed do eiusmod tempor incididunt uce adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.",
                "socialLinks" : {
                    "facebook" : "#",
                    "twitter" : "#",
                    "linkedin" : "#",
                    "dribbble" : "#",
                    "googlePlus" : "#",
                    "pinterest" : "#",
                },
                "role" : 2,
                "isActive" : true,
                "contact" : {

                    "phone":"(950) 491-570-180",
                    "mobile":"(+20) 220-145-6330",
                    "website":"modernhouse.com",
                    "fax":"(+44) 161-430-1620",
                },
                "agencyId" : ""
            },
            {
                _id :4 ,
                "fullName" : "Adam Grason",
                "email":"[email protected]",
                "password" : "111",
                "type" : "Realty Specialist",
                
                "gallery" : {
                    "profile"  : "/assets/images/agents/grid/4.png",
                    /* gridImg : "/assets/images/agents/grid/4.png",
                    singleImg : "" */
                },
                "desc": "Lorem ipsum dolor sit amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut  et, consece adipisicing elit, sed do eiusmod tempor incididunt ulabore dolore.",
                "socialLinks" : {
                    "facebook" : "#",
                    "twitter" : "#",
                    "linkedin" : "#",
                    "dribbble" : "#",
                    "googlePlus" : "#",
                    "pinterest" : "#",
                },
                "role" : 2,
                "isActive" : true,
                "contact" : {
                    "phone":"(950) 491-570-180",
                    "mobile":"(+20) 220-145-6330",
                    "website":"modernhouse.com",
                    "fax":"(+44) 161-430-1620",
                },
                "agencyId" : ""
            },
            {
                _id :5 ,
                "fullName" : "Brian Slater",
                "email":"[email protected]",
                "password" : "111",
                "type" : "Sales Assistant",
                "gallery" : {
                    "profile" : "/assets/images/agents/grid/5.png",
                    /* gridImg : "/assets/images/agents/grid/5.png",
                    singleImg : "" */
                },
                "desc": "Lorem ipsum dolor sit amet, consece adipisicing elit, sed do eiusmo et, consece adipisicing elit, sed do eiusmod tempor incididunt ud tempor incididunt ut labore dolore.",
                "socialLinks" : {
                    "facebook" : "#",
                    "twitter" : "#",
                    "linkedin" : "#",
                    "dribbble" : "#",
                    "googlePlus" : "#",
                    "pinterest" : "#",
                    
                },
                "role" : 2,
                "isActive" : true,
                "contact" : {
                    "phone":"(950) 491-570-180",
                    "mobile":"(+20) 220-145-6330",
                    "website":"modernhouse.com",
                    "fax":"(+44) 161-430-1620",
                    
                },
                agencyId : ""
            },
            {
                _id :6 ,
                "fullName" : "Matt Peters",
                "email":"[email protected]",
                "password" : "111",
                "type" : "Assistant Broker",
                "role" : 2,
                "isActive" : true,
                "gallery" : {
                    profile : "/assets/images/agents/grid/6.png",
                    /* gridImg : "/assets/images/agents/grid/6.png",
                    singleImg : "" */
                },
                "desc": "Lorem ipsum dolor sitet, consece adipisicing elit, sed do eiusmod tempor incididunt u amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.",
                "socialLinks" : {
                    "facebook" : "#",
                    "twitter" : "#",
                    "linkedin" : "#",
                    "dribbble" : "#",
                    "googlePlus" : "#",
                    "pinterest" : "#",
                },
                "contact" : {
                    "phone":"(950) 491-570-180",
                    "mobile":"(+20) 220-145-6330",
                    "website":"modernhouse.com",
                    "fax":"(+44) 161-430-1620",
                },
                agencyId : ""
            },
        ],
        property : [
            {
                _id: 1,
                isApproved : true,
                isSold : false ,
                isFeatured : false,
                gallery : ["/assets/images/properties/1.jpg"],
                description : {
                    type : "Apartment",
                    status : "For Sale",
                    beds :   "2",
                    baths :  "1",
                    area :   "512",
                    rooms :  "2",
                    floors : "1",
                    garage : "0",
                    desc :   "Lorem ipsum dolor sitet, consece adipisicing elit, sed do eiusmod tempor incididunt u amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.Lorem ipsum dolor sitet, consece adipisicing elit, sed do eiusmod tempor incididunt u amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.",
                },
                address : {
                    street : "34 Long St",
                    country : "USA",
                    city : "Jersey",
                    state : "",
                    zip : "07305",
                    neighborhood : "",
                },
                floorPlans : [{
                    title : "floore 1",
                    description : {
                        size : "645",
                        rooms : "2",
                        baths : "2",
                    },
                    img : "/assets/images/property-single/1.png"
                }],
                agentId : 1,
                title : "Apartment in Long St.",
                location : "34 Long St, Jersey City, NJ 07305",
                price : "70000",
                label : "",
                features : [{
                    "_id": "615da476cd16efb01b50e211",
                    "feature": "Center Cooling"
                },
                {
                    "_id": "615da476cd16efb01b50e212",
                    "feature": "Balcony"
                },
                {
                    "_id": "615da476cd16efb01b50e213",
                    "feature": "Pet Friendly"
                },
                {
                    "_id": "615da476cd16efb01b50e214",
                    "feature": "Barbeque"
                },
                {
                    "_id": "615da476cd16efb01b50e215",
                    "feature": "Fire Alarm"
                },
                {
                    "_id": "615da476cd16efb01b50e216",
                    "feature": "Modern Kitchen"
                },
                {
                    "_id": "615da476cd16efb01b50e217",
                    "feature": "Storage"
                },
                {
                    "_id": "615da476cd16efb01b50e218",
                    "feature": "Dryer"
                },
                ]
                
            },
            {
                _id: 2,
                isApproved : true,
                isSold : false ,
                isFeatured : false,
                gallery : ["/assets/images/properties/2.jpg"],
                description : {
                    type : "Villa",
                    status : "For Sale",
                    beds :   "4",
                    baths :  "2",
                    area :   "645",
                    rooms :  "4",
                    floors : "2",
                    garage : "1",
                    desc :   "Lorem ipsum dolor sitet, consece adipisicing elit, sed do eiusmod tempor incididunt u amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.Lorem ipsum dolor sitet, consece adipisicing elit, sed do eiusmod tempor incididunt u amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.",
                },
               address : {
                    street : "34 Long St",
                    country : "USA",
                    city : "Jersey",
                    state : "",
                    zip : "07305",
                    neighborhood : "",
                },
                floorPlans : [{
                    title : "floore 1",
                    description : {
                        size : "645",
                        rooms : "2",
                        baths : "2",
                    },
                    img : "/assets/images/property-single/1.png"
                }],
                agentId : 2,
                title : "Villa in Chicago IL",
                location : "1445 N State Pkwy, Chicago, IL 60610",
                price : "235000",
                features : [{
                    "_id": "615da476cd16efb01b50e211",
                    "feature": "Center Cooling"
                },
                {
                    "_id": "615da476cd16efb01b50e212",
                    "feature": "Balcony"
                },
                {
                    "_id": "615da476cd16efb01b50e213",
                    "feature": "Pet Friendly"
                },
                {
                    "_id": "615da476cd16efb01b50e214",
                    "feature": "Barbeque"
                },
                
                {
                    "_id": "615da476cd16efb01b50e21b",
                    "feature": "Laundry"
                },
                {
                    "_id": "615da476cd16efb01b50e21c",
                    "feature": "Sauna"
                },
                {
                    "_id": "615da476cd16efb01b50e21d",
                    "feature": "Gym"
                },
                {
                    "_id": "615da476cd16efb01b50e21e",
                    "feature": "Elevator"
                },]
                
            },
        
            {
                _id: 3,
                isApproved : true,
                isSold : false ,
                isFeatured : false,
                gallery : ["/assets/images/properties/3.jpg"],
                description : {
                    type : "House",
                    status : "For Rent",
                    beds :   "3",
                    baths :  "2",
                    area :   "597",
                    rooms :  "3",
                    floors : "1",
                    garage : "1",
                    desc :   "Lorem ipsum dolor sitet, consece adipisicing elit, sed do eiusmod tempor incididunt u amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.Lorem ipsum dolor sitet, consece adipisicing elit, sed do eiusmod tempor incididunt u amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.",
                },
               address : {
                    street : "34 Long St",
                    country : "USA",
                    city : "Jersey",
                    state : "",
                    zip : "07305",
                    neighborhood : "",
                },
                floorPlans : [{
                    title : "floore 1",
                    description : {
                        size : "645",
                        rooms : "2",
                        baths : "2",
                    },
                    img : "/assets/images/property-single/1.png"
                }],
                agentId : 3,
                title : "2750 House in Urban St.",
                location : "2750 Urban Street Dr, Anderson, IN 46011",
                price : "1550",
                label : "month",
                features : [{
                    "_id": "615da476cd16efb01b50e211",
                    "feature": "Center Cooling"
                },
                {
                    "_id": "615da476cd16efb01b50e212",
                    "feature": "Balcony"
                },
                {
                    "_id": "615da476cd16efb01b50e213",
                    "feature": "Pet Friendly"
                },
                {
                    "_id": "615da476cd16efb01b50e214",
                    "feature": "Barbeque"
                },
                {
                    "_id": "615da476cd16efb01b50e215",
                    "feature": "Fire Alarm"
                },
                {
                    "_id": "615da476cd16efb01b50e216",
                    "feature": "Modern Kitchen"
                },
                {
                    "_id": "615da476cd16efb01b50e217",
                    "feature": "Storage"
                },
                
                {
                    "_id": "615da476cd16efb01b50e21e",
                    "feature": "Elevator"
                },]
            },
        
            {
                _id: 4,
                isApproved : true,
                isSold : false ,
                isFeatured : false,
                gallery : ["/assets/images/properties/4.jpg"],
                description : {
                    type : "House",
                    status : "For Rent",
                    beds :   "4",
                    baths :  "3",
                    area :   "645",
                    rooms :  "3",
                    floors : "2",
                    garage : "2",
                    desc :   "Lorem ipsum dolor sitet, consece adipisicing elit, sed do eiusmod tempor incididunt u amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.Lorem ipsum dolor sitet, consece adipisicing elit, sed do eiusmod tempor incididunt u amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.",
                },
               address : {
                    street : "34 Long St",
                    country : "USA",
                    city : "Jersey",
                    state : "",
                    zip : "07305",
                    neighborhood : "",
                },
                floorPlans : [{
                    title : "floore 1",
                    description : {
                        size : "645",
                        rooms : "2",
                        baths : "2",
                    },
                    img : "/assets/images/property-single/1.png"
                }],
                agentId :4,
                title : "House in Kent Street",
                location : "127 Kent Street, Sydney, NSW 2000",
                price : "20000",
                label : "month",
                features : [
                {
                    "_id": "615da476cd16efb01b50e218",
                    "feature": "Dryer"
                },
                {
                    "_id": "615da476cd16efb01b50e219",
                    "feature": "Heating"
                },
                {
                    "_id": "615da476cd16efb01b50e21a",
                    "feature": "Pool"
                },
                {
                    "_id": "615da476cd16efb01b50e21b",
                    "feature": "Laundry"
                },
                {
                    "_id": "615da476cd16efb01b50e21c",
                    "feature": "Sauna"
                },
                {
                    "_id": "615da476cd16efb01b50e21d",
                    "feature": "Gym"
                },
                {
                    "_id": "615da476cd16efb01b50e21e",
                    "feature": "Elevator"
                },]
                
            },
             {
                _id: 5,
                isApproved : true,
                isSold : false ,
                isFeatured : false,
                gallery : ["/assets/images/properties/5.jpg"],
                description : {
                    type : "Villa",
                    status : "For Rent",
                    beds :   "4",
                    baths :  "2",
                    area :   "645",
                    rooms :  "3",
                    floors : "1",
                    garage : "1",
                    desc :   "Lorem ipsum dolor sitet, consece adipisicing elit, sed do eiusmod tempor incididunt u amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.Lorem ipsum dolor sitet, consece adipisicing elit, sed do eiusmod tempor incididunt u amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.",
                },
               address : {
                    street : "34 Long St",
                    country : "USA",
                    city : "Jersey",
                    state : "",
                    zip : "07305",
                    neighborhood : "",
                },
                floorPlans : [{
                    title : "floore 1",
                    description : {
                        size : "645",
                        rooms : "2",
                        baths : "2",
                    },
                    img : "/assets/images/property-single/1.png"
                }],
                agentId : 5,
                title : "Villa in Oglesby Ave",
                location : "1035 Oglesby Ave, Chicago, IL 60617",
                price : "130000",
                label : "month",
                features : [{
                    "_id": "615da476cd16efb01b50e211",
                    "feature": "Center Cooling"
                },
                
                {
                    "_id": "615da476cd16efb01b50e21b",
                    "feature": "Laundry"
                },
                {
                    "_id": "615da476cd16efb01b50e21c",
                    "feature": "Sauna"
                },
                {
                    "_id": "615da476cd16efb01b50e21d",
                    "feature": "Gym"
                },
                {
                    "_id": "615da476cd16efb01b50e21e",
                    "feature": "Elevator"
                },]
            },
        ],
        agencies : [
            {
                _id:1,
                "isActive" : true,
                "gallery" : {
                    "profile" : "/assets/images/agency/1.png",
                },
                "role": 3,
                "title" : "Modern House",
                "location" : "153 Sandra Cir, Westfield, NJ 07090",
                "socialLinks" : {
                    "facebook" : "#",
                    "twitter" : "#",
                    "googlePlus" : "#",
                    "pinterest" : "#",
                    "linkedin" : "#",
                },
                "email" : "[email&#160;protected]",
                "contact" : {
                    "phone" : "(950) 491-570-180",
                    "website" : "modernhouse.com",
                    "mobile" : "(+20) 220-145-6330",
                    "fax" : "(+44) 161-430-1620",
                    "license":"RE511U0",
                    "taxNumber":"802442",
                    "languages":["English", "Arabic"],
                },
                "desc" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
                "agentId" : ""
            },
            {
                _id:2,
                "role" : 3,
                "isActive" : true,
                "gallery" : {
                     "profile" : "/assets/images/agency/2.png",
                },
                "title" : "Brokerage Group",
                "location" : "6524 Vista Del Mar, Playa, CA 90293",
                "socialLinks" : {
                    "facebook" : "#",
                    "twitter" : "#",
                    "googlePlus" : "#",
                    "pinterest" : "#",
                    "linkedin" : "#",
                },
                "contact" : {
                    "phone" : "(86) 521-654-002",
                    "website" : "modernhouse.com",
                    "mobile" : "(+20) 220-145-6330",
                    "fax" : "(+44) 161-430-1620",
                    "license":"RE511U0",
                    "taxNumber":"802442",
                    "languages":["English", "Arabic"]
                },
                "desc" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
                "email" : "test4@g.com",
                "agentId" : ""
            },
            {
                _id:3,
                "isActive" : true,
                "gallery" : {
                    "profile" : "/assets/images/agency/3.png",
                },
                "role": 3,
                
                "title" : "Rodeo Realty",
                "location" : "7539 Sunny Ln, Los Angeles, CA 90046",
                "socialLinks" : {
                    "facebook" : "#",
                    "twitter" : "#",
                    "googlePlus" : "#",
                    "pinterest" : "#",
                    "linkedin" : "#",
                },
                "details" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
                "email" : "test8@g.com",
                "contact" : {
                    "phone" : "(960) 211-894-130",
                    "website" : "modernhouse.com",
                    "mobile" : "(+20) 220-145-6330",
                    "fax" : "(+44) 161-430-1620",
                    "license":"RE511U0",
                    "taxNumber":"802442",
                    "languages":["English", "Arabic"],
                },
            },
            {
                "_id":4,
                "isActive" : true,
                "gallery" : {
                    "profile" : "/assets/images/agency/4.png",
                },
                "role": 3,
                "title" : "Platinum Properties",
                "location" : "4334 Country Hills, Plant City, FL 33563",
                "socialLinks" : {
                    "facebook" : "#",
                    "twitter" : "#",
                    "googlePlus" : "#",
                    "pinterest" : "#",
                    "linkedin" : "#",
                },
                "details" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
                "phone" : "(045) 921-023-254",
                "email" : "[email&#160;protected]",
                "website" : "modernhouse.com",

                "mobile" : "(+20) 220-145-6330",
                "fax" : "(+44) 161-430-1620",
                "license":"RE511U0",
                "taxNumber":"802442",
                "languages":["English", "Arabic"],
            },
        ],
        searchFields : {
            locations : [
                { id : 1, location : "Alabama"},
                { id : 2, location : "Alaska"},
                { id : 3, location : "California"},
                { id : 4, location : "Florida"},
                { id : 5, location : "Mississippi"},
                { id : 6, location : "Oregon"},
            ],

            types : [
                {id : 1, type : "Apartment"},
                {id : 2, type : "House"},
                {id : 3, type : "Office"},
                {id : 4, type : "Villa"},
            ],
            status:[
                { id : 1, status : "For Rent"},
                { id : 2, status : "For Sale"},
            ],
            beds :[
                { id : 1, bed : "1"},
                { id : 2, bed : "2"},
                { id : 3, bed : "3"},
                { id : 4, bed : "4"},
                { id : 5, bed : "5"},
                { id : 6, bed : "6"},
            ],
            baths :[
                { id : 1, bath : "1"},
                { id : 2, bath : "2"},
                { id : 3, bath : "3"},
                { id : 4, bath : "4"},
                { id : 5, bath : "5"},

            ],
        },
        temp : {
            _id: 1,
            src : "/assets/images/properties/3.jpg",
            status : "For Sale",
            isApproved : true,
            isSold: false,
            isFeatured : false,
            location : "34 Long St, Jersey City, NJ 07305",
            title : "Apartment in Long St.",
            price : "70,000",
            label :"monthly",
            gallery : [],
            descriptions : {
                type : "",
                status : "",
                beds : "2",
                baths : "1",
                area : "200 sq ft",
                rooms : "6",
                floors : "3",
                garage : "2",
                desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",

            },
            features :[
                { _id : "1", featuure : "feature-1" },
                { _id : "2", featuure : "feature-2" },
            ],
            address : {
                street : "",
                country : "",
                city : "",
                state : "",
                zip : "",
                neighborhood : "",
            },
            floorPlans : [
                {_id : 1,title : "floor 1", description : [{size : 654, rooms : 2, baths : 2}],img: "/assets/images/property-single/1.png"},
                {_id : 2,title : "floor 2", description : [{size : 567, rooms : 1, baths : 1}],img: "/assets/images/property-single/1.png"},
                {_id : 3,title : "floor 3", description : [{size : 632, rooms : 3, baths : 2}],img: "/assets/images/property-single/1.png"},
            ],
            reviews : [
                {_id : 1,name : "sd",email : "email", rating : "4", review: "lorem sad ewq asd sdf sdfre"},
                {_id : 2,name : "sd",email : "email", rating : "4", review: "lorem sad ewq asd sdf sdfre"},
                {_id : 3,name : "sd",email : "email", rating : "4", review: "lorem sad ewq asd sdf sdfre"},
            ],
            agent : "id",
            
        },
        temp2: {
            id:1,
            img : "/assets/images/agency/1.png",
            title : "Modern House",
            location : "153 Sandra Cir, Westfield, NJ 07090",
            totalProperty : 15,
            socialLinks : {
                facebook : "#",
                twitter : "#",
                googlePlus : "#",
                pinterest : "#",
                linkedin : "#",
            },
            details : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
            phone : "(950) 491-570-180",
            email : "[email&#160;protected]",
            website : "modernhouse.com",

            mobile : "(+20) 220-145-6330",
            fax : "(+44) 161-430-1620",
            license:"RE511U0",
            taxNumber:"802442",
            languages:["English", "Arabic"],

            property : [1,2,4]
        },
        
    },
    mutations : {
        setSignUpForm(state,data){
            state.signUpForm = {...data}
        },
        setOtp(state,otp){
            state.otp = otp
        },
        setIsLogin(state, value){
            state.isLogin = value
        },
        setUser(state,user){
            state.user = user
        },
        setUserRole(state,userRole){
            state.userRole = userRole
        }
    },
    getters :{
        userData(state){
            return state.user
        },
        getUserRole(state) {
            return state.userRole;
        }

    }
}) 

export default store