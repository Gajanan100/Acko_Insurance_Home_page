
//Variables
var car = document.getElementById("car")
var bike = document.getElementById("bike")
var health = document.getElementById("health")
var life = document.getElementById("life")
var travel = document.getElementById("travel")

//Service Banner
var carBanner = document.querySelector(".g_car_service_banner")
var bikeBanner = document.querySelector(".g_bike_service_banner")
var healthBanner = document.querySelector(".g_health_service_banner")
var lifeBanner = document.querySelector(".g_life_service_banner")
var travelBanner = document.querySelector(".g_travel_service_banner")


window.onload = function () {
    car.classList.add("active")
    bike.classList.remove("active")
    health.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")

    //banner
    carBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    healthBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")

}

bike.addEventListener("click", function (event) {
    car.classList.remove("active")
    health.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.add("active")
//Service Banner
   carBanner.classList.add("d-none")
    bikeBanner.classList.remove("d-none")
    healthBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")

})
car.addEventListener("click", function (event) {
    health.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    car.classList.add("active")
//Service Banner
carBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    healthBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")
})
health.addEventListener("click", function (event) {
    car.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    health.classList.add("active")

//Service Banner
healthBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    carBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")
})
life.addEventListener("click", function (event) {
    car.classList.remove("active")
    health.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    life.classList.add("active")

//Service Banner
lifeBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    carBanner.classList.add("d-none")
    healthBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")
})
travel.addEventListener("click", function (event) {
    car.classList.remove("active")
    health.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    life.classList.remove("active")
    travel.classList.add("active")

//Service Banner
travelBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    carBanner.classList.add("d-none")
    healthBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
})

// onclick Event ----------------------------------------------------
// var Healthlist=document.getElementById("insurance_video")
// var Carlist=document.getElementById("Car_video")

// var HealthVideoList=document.querySelector("g_video")
// var CarVideoList=document.querySelector("car_video")

// Healthlist.addEventListener("click",function(event)
// {
//     Healthlist.classList.add("active")
//     Carlist.classList.remove("active")
//     //remove
//     HealthVideoList.classList.remove("d-none")
//     CarVideoList.classList.add("active")
// })

// Carlist.addEventListener("click",function(event){
//     Carlist.classList.add("active")
//     Healthlist.classList.remove("active")
//     //remove
//     HealthVideoList.classList.add("active")
//     CarVideoList.classList.remove("d-none")

// })

//   ------Another Ways---------------------

// document.addEventListener("click", function (event) {
//     const insurance_video=event.target.contains("insurance_video")
    
//         const isExist = ele.classList.contains("insurance_video")
//         if (isExist) {
//             event.target.classList.add("g_video")
//             ele.classList.remove("car_video")
//         }

    
// })

//video section js

const crrentVideo = document.getElementById("g_current_video")
const currentTitle = document.getElementById("title")
const videoList = document.getElementsByClassName("g_video")

for (let i = 0; i < videoList.length; i++) {
    const listSrc = videoList[i].children.item("div").children.item("div").children.item("video").src
    const text = videoList[i].children[1].children[0].innerText

    videoList[i].addEventListener("click", () => {
        crrentVideo.src = listSrc
        currentTitle.innerText = text
        crrentVideo.src = view
        currentTitle.innerText = text
        crrentVideo.play()
        
    })
}

//Acko Section images...

const ackoData = [{
    img: "/Acko_Section_images.svg",
    title: "Incredibly low premiums",
    description: "Insuring things that matter to you shouldn’t come at a cost. That’s why when you buy from us, you get insurance that fits your pocket."
},
{
    img: "/Acko_section_images2.svg",
    title: "Superquick and easy",
    description: "We’re easy, effortless and 100% digital. Forget paperwork, just access all our services with just a few clicks."
},
{
    img: "/Acko_section_img.svg",
    title: "Hassle-free claims",
    description: "We’re on a mission to make insurance claims stress-free. Just give us a call or file a claim online and experience cashless, speedy claim settlements."
},
]

//acko section
const ackoSection = document.getElementById("acko_section")

for (let i = 0; i < ackoData.length; i++) {
    //created div element
    const ackoCard = document.createElement("div")
    ackoCard.className = "col-12 col-lg-4"
    
//Images tag
    const img = document.createElement("img")
    //add src attributes
    img.src = "Images" + ackoData[i].img
    img.alt = "dynamic image"
    img.width = 120

    //h4 tag
    const h4 = document.createElement("h4")
    h4.innerText = ackoData[i].title


    const p = document.createElement("p")
    p.innerText = ackoData[i].description

    ackoCard.appendChild(img)
    ackoCard.appendChild(h4)
    ackoCard.appendChild(p)
    ackoSection.appendChild(ackoCard)
}

//---------------------------------------------------Navbar Section----------------------------
//Navbar Data

const footerNavData = [
    {
        title: "Products",
        navLinks: ["Motor Insurance", "Car Insurance", "Bike Insurance", "Health Insurance", "Travel Insurance", "International Travel Insurance", "Life Insurance", "Term Insurance", "Group Health Insurance"]
    },
    {
        title: "Company",
        navLinks: ["About us","Board of directors","Careers","Media kit","All resources","Articles","Ackology - The tech blog","Partnerships","Sitemap"]

    },
    {
        title: "Legal",
        navLinks:["Whistleblower policy","Public disclosure","Financials & disclosures","Privacy policy","Terms & conditions","Stewardship code","Disclaimer","Anti fraud policy","Health underwriting philosophy"]
        
    },
    {
        title: "Support",
        navLinks: 
        ["Contact us","Customer service","Cancellations & refunds","Downloads","Unclaimed amount","IRDAI website","IRDAI's Call Centre Feedback Survey",
        "Bima Bharosa","Ayushman Bharat Health Account Creation","Other products"]
    },
    {
        title: "Car Insurance",
        navLinks: ["Car Insurance","Comprehensive Car Insurance","Third Party Car Insurance","Own Damage Car Insurance","Zero Depreciation Car Insurance",
        "Old Car Insurance","EV Car Insurance","Car Insurance Calculator","Car Insurance Check","Compare Car Insurance","Pay As You Drive Car Insurance"]   
    },
    {
        title: "Bike Insurance",
        navLinks:["Bike Insurance","Scooter Insurance","Comprehensive Bike Insurance","Third Party Bike Insurance","Used Bike Insurance","EV Bike Insurance",
        "Own Damage Bike Insurance","Bike Insurance Calculator","Compare Bike Insurance"]
        
    },
    {
        title: "Health Insurance",
        navLinks: ["Health Insurance","Arogya Sanjeevani Policy","COVID-19 Health Insurance","Corona Kavach Policy","Health Insurance Plans For Family",
        "Individual Health Insurance","Cashless Health Insurance","Women's Health Insurance","Health Insurance For Parents","Health Insurance For Children",
        "Health Insurance For Senior Citizens","Health Insurance Premium Calculator","Waiting period in health insurance","Reimbursement Health Insurance",
        "Health Insurance Portability","Super Top Up Health Insurance"]
        
    },
    {
        title: "Group Health Insurance",
        navLinks:["Corporate Health Insurance","Group Health Insurance Add-ons","Maternity Cover In Group Health Insurance"]
    },
    {
        title: "Travel Insurance ",
        navLinks:["Travel Insurance","International Travel Insurance","USA Travel Insurance","Schengen Travel Insurance","Travel Insurance for Dubai","Travel Insurance for Thailand"]
    },
    {
        title: "Life Insurance",
        navLinks: ["Life Insurance","Term Insurance","Critical Illness Insurance","Accidental Death Benefit Rider","Disability Income Rider","Life Insurance Riders In India"]

    },

]
// navbar section 
const footerNavbar = document.getElementById("footer_navbar")

for (let i = 0; i < footerNavData.length; i++) {
     //column lg-3
    const div = document.createElement("div")
    div.className = "col-12 col-lg-3 mt-4"

    const h5 = document.createElement("h5")

    h5.innerText = footerNavData[i].title
    //create ul element
    const ul = document.createElement("ul")
    ul.style.listStyle = "none"

    //loops start on the footerNavData[i].navLinks
    for (let link = 0; link < footerNavData[i].navLinks.length; link++) {
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.style.textDecoration = "none"
        a.style.color = "#000"
        a.classList.add("a_force_fontsize")
        a.href = "#"
        a.innerText = footerNavData[i].navLinks[link]
        //adding li to ul
        ul.appendChild(li)
        //adding a to li
        li.appendChild(a)
    }
    div.appendChild(h5)
    div.appendChild(ul)
    footerNavbar.appendChild(div)
}



