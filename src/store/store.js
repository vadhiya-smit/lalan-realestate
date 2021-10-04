import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state : {
        agents : [
            {
                id:1,
                fullName : 'Steve Martin',
                type : 'Buying Agent',
                media : {
                    gridImg : '/assets/images/agents/grid/1.png',
                    singleImg : '/assets/images/agents/single/1.jpg'
                },
                /* img : '/assets/images/agents/grid/1.png', */
                desc: 'Lorem ipsum dolor sit amet, consece adiet, consece adipisicing elit, sed do eiusmod tempor incididunt upisicing elit, sed do eiusmod tempor incididunt ut labore dolore.',
                socialLinks : {
                    facebook : '#',
                    twitter : '#',
                    linkedin : '#',
                    dribbble : '#',
                    googlePlus : "#",
                    pinterest : "#",
                },
                phone:'(950) 491-570-180',
                email:'[email protected]',
                mobile:'(+20) 220-145-6330',
                website:'modernhouse.com',
                fax:'(+44) 161-430-1620',
            },
            {
                id :2 ,
                fullName : 'Mark Smith',
                type : 'Selling Agent',
                media : {
                    gridImg : '/assets/images/agents/grid/2.png',
                    singleImg : ''
                },
                desc: 'Lorem ipsum dolor sit amet, consece et, consece adipisicing elit, sed do eiusmod tempor incididunt u adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.',
                socialLinks : {
                    facebook : '#',
                    twitter : '#',
                    linkedin : '#',
                    dribbble : '#',
                    googlePlus : "#",
                    pinterest : "#",
                },
                phone:'(950) 491-570-180',
                email:'[email protected]',
                mobile:'(+20) 220-145-6330',
                website:'modernhouse.com',
                fax:'(+44) 161-430-1620',
            },
            {
                id :3 ,
                fullName : 'Ryan Printz',
                type : 'Real Estate Broker',
                media : {
                    gridImg : '/assets/images/agents/grid/3.png',
                    singleImg : ''
                },
                desc: 'Lorem ipsum dolor sit amet, conseet, consece adipisicing elit, sed do eiusmod tempor incididunt uce adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.',
                socialLinks : {
                    facebook : '#',
                    twitter : '#',
                    linkedin : '#',
                    dribbble : '#',
                    googlePlus : "#",
                    pinterest : "#",
                },
                phone:'(950) 491-570-180',
                email:'[email protected]',
                mobile:'(+20) 220-145-6330',
                website:'modernhouse.com',
                fax:'(+44) 161-430-1620',
            },
            {
                id :4 ,
                fullName : 'Adam Grason',
                type : 'Realty Specialist',
                media : {
                    gridImg : '/assets/images/agents/grid/4.png',
                    singleImg : ''
                },
                desc: 'Lorem ipsum dolor sit amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut  et, consece adipisicing elit, sed do eiusmod tempor incididunt ulabore dolore.',
                socialLinks : {
                    facebook : '#',
                    twitter : '#',
                    linkedin : '#',
                    dribbble : '#',
                    googlePlus : "#",
                    pinterest : "#",
                },
                phone:'(950) 491-570-180',
                email:'[email protected]',
                mobile:'(+20) 220-145-6330',
                website:'modernhouse.com',
                fax:'(+44) 161-430-1620',
            },
            {
                id :5 ,
                fullName : 'Brian Slater',
                type : 'Sales Assistant',
                media : {
                    gridImg : '/assets/images/agents/grid/5.png',
                    singleImg : ''
                },
                desc: 'Lorem ipsum dolor sit amet, consece adipisicing elit, sed do eiusmo et, consece adipisicing elit, sed do eiusmod tempor incididunt ud tempor incididunt ut labore dolore.',
                socialLinks : {
                    facebook : '#',
                    twitter : '#',
                    linkedin : '#',
                    dribbble : '#',
                    googlePlus : "#",
                    pinterest : "#",
                    
                },
                phone:'(950) 491-570-180',
                email:'[email protected]',
                mobile:'(+20) 220-145-6330',
                website:'modernhouse.com',
                fax:'(+44) 161-430-1620',
            },
            {
                id :6 ,
                fullName : 'Matt Peters',
                type : 'Assistant Broker',
                media : {
                    gridImg : '/assets/images/agents/grid/6.png',
                    singleImg : ''
                },
                desc: 'Lorem ipsum dolor sitet, consece adipisicing elit, sed do eiusmod tempor incididunt u amet, consece adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore.',
                socialLinks : {
                    facebook : '#',
                    twitter : '#',
                    linkedin : '#',
                    dribbble : '#',
                    googlePlus : "#",
                    pinterest : "#",
                },
                phone:'(950) 491-570-180',
                email:'[email protected]',
                mobile:'(+20) 220-145-6330',
                website:'modernhouse.com',
                fax:'(+44) 161-430-1620',
            },
        ],
        property : [
            {
                id: 1,
                src : "/assets/images/properties/3.jpg",
                status : "For Sale",
                title : 'Apartment in Long St.',
                location : '34 Long St, Jersey City, NJ 07305',
                price : '70,000',
                features : {
                    beds : '2',
                    baths : '1',
                    area : '200 sq ft',
                }
            },
            {
                id: 2,
                src : "/assets/images/properties/11.jpg",
                status : "For Sale",
                title : 'Villa in Chicago IL',
                location : '1445 N State Pkwy, Chicago, IL 60610',
                price : '235,000',
                features : {
                    beds : '3',
                    baths : '2',
                    area : '1120 sq ft',
                }
            },
        
            {
                id: 3,
                src : "/assets/images/properties/5.jpg",
                status : "For Rent",
                title : '2750 House in Urban St.',
                location : '2750 Urban Street Dr, Anderson, IN 46011',
                price : '1,550',
                duration : 'month',
                features : {
                    beds : '2',
                    baths : '2',
                    area : '1390 sq ft',
                }
            },
        
            {
                id: 4,
                src : "/assets/images/properties/4.jpg",
                status : "For Sale",
                title : 'House in Kent Street',
                location : '127 Kent Street, Sydney, NSW 2000',
                price : '130,000',
                features : {
                    beds : '2',
                    baths : '2',
                    area : '587 sq ft',
                }
            },
             {
                id: 5,
                src : "/assets/images/properties/2.jpg",
                status : "For Rent",
                title : 'Villa in Oglesby Ave',
                location : '1035 Oglesby Ave, Chicago, IL 60617',
                price : '130,000',
                duration : 'month',
                features : {
                    beds : '3',
                    baths : '2',
                    area : '1120 sq ft',
                }
            },
        ],
        agencies : [
            {
                id:1,
                img : '/assets/images/agency/1.png',
                title : 'Modern House',
                location : '153 Sandra Cir, Westfield, NJ 07090',
                totalProperty : 15,
                socialLinks : {
                    facebook : '#',
                    twitter : '#',
                    googlePlus : '#',
                    pinterest : '#',
                    linkedin : '#',
                },
                details : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                phone : '(950) 491-570-180',
                email : '[email&#160;protected]',
                website : 'modernhouse.com',

                mobile : "(+20) 220-145-6330",
                fax : '(+44) 161-430-1620',
                license:'RE511U0',
                taxNumber:'802442',
                languages:["English", "Arabic"],

                property : [1,2,4]
            },
            {
                id:2,
                img : '/assets/images/agency/2.jpg',
                title : 'Brokerage Group',
                location : '6524 Vista Del Mar, Playa, CA 90293',
                totalProperty : 10,
                socialLinks : {
                    facebook : '#',
                    twitter : '#',
                    googlePlus : '#',
                    pinterest : '#',
                    linkedin : '#',
                },
                details : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                phone : '(86) 521-654-002',
                email : '[email&#160;protected]',
                website : 'modernhouse.com',

                mobile : "(+20) 220-145-6330",
                fax : '(+44) 161-430-1620',
                license:'RE511U0',
                taxNumber:'802442',
                languages:["English", "Arabic"],
            },
            {
                id:3,
                img : '/assets/images/agency/3.png',
                title : 'Rodeo Realty',
                location : '7539 Sunny Ln, Los Angeles, CA 90046',
                totalProperty : 8,
                socialLinks : {
                    facebook : '#',
                    twitter : '#',
                    googlePlus : '#',
                    pinterest : '#',
                    linkedin : '#',
                },
                details : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                phone : '(960) 211-894-130',
                email : '[email&#160;protected]',
                website : 'modernhouse.com',

                mobile : "(+20) 220-145-6330",
                fax : '(+44) 161-430-1620',
                license:'RE511U0',
                taxNumber:'802442',
                languages:["English", "Arabic"],
            },
            {
                id:4,
                img : '/assets/images/agency/4.png',
                title : 'Platinum Properties',
                location : '4334 Country Hills, Plant City, FL 33563',
                totalProperty : 21,
                socialLinks : {
                    facebook : '#',
                    twitter : '#',
                    googlePlus : '#',
                    pinterest : '#',
                    linkedin : '#',
                },
                details : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                phone : '(045) 921-023-254',
                email : '[email&#160;protected]',
                website : 'modernhouse.com',

                mobile : "(+20) 220-145-6330",
                fax : '(+44) 161-430-1620',
                license:'RE511U0',
                taxNumber:'802442',
                languages:["English", "Arabic"],
            },
        ]
    },
    mutations : {

    }
}) 

export default store