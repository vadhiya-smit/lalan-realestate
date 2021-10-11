const USER_BASE_URL = "http://localhost:3000/api/users/"
const axios = require('axios')
const property = [
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
]
class UserServices{
    static getUsers(){
        return axios.get(USER_BASE_URL)
    }

    static getUserFromToken(token){
        console.log(token);
        return axios.post(USER_BASE_URL+'token',{},{
            headers: {
                'token' : token,
                'Content-Type': 'application/json',
            },
        })
    }

    static async signupUser(body){
        return axios.post(USER_BASE_URL+'signup',body)
    }

    static async sendOtp(body){
        return axios.post(USER_BASE_URL+'otp',body)
    }

    static loginUser(body){
        return axios.post(USER_BASE_URL+'login',body)
    }

    static filter(obj){
        const temp = {...obj}
        let filter =  [...property]
        
        if(temp.range){
            let str = temp.range
            str = str.replaceAll('$','').split(' - ')
            filter = filter.filter(item => parseInt(item.price) >= parseInt(str[0]) && parseInt(item.price) <= parseInt(str[1]))
        }
        if(temp.location){
            console.log("location");
        }
        if(temp.beds){
            filter = filter.filter(item => item.description.beds == temp.beds)
        }
        if(temp.baths){
            filter = filter.filter(item => item.description.baths == temp.baths)
        }
        if(temp.status){
            filter = filter.filter(item => item.description.status == temp.status)
        }
        if(temp.type){
            filter = filter.filter(item => item.description.type == temp.type)
        }
        console.log(filter);

        return filter
        
    }
}

export default UserServices