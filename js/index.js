const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br>Is<br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])  

// ------------ Header -------------

let anchorTag = document.querySelectorAll("a");  
anchorTag = Array.from(anchorTag)
anchorTag.forEach(function(element, index) {
  element.innerText = siteContent["nav"][`nav-item-${index+1}`]
});

document.querySelector(".cta img").src = siteContent.cta["img-src"]; 

document.querySelector(".cta h1").innerHTML = siteContent.cta.h1; 

document.querySelector(".cta button").textContent = siteContent.cta.button; 

// -------------- Main Content --------------

const allH4 = document.querySelectorAll(".main-content h4"); 

const {"main-content":{
  "features-h4": featuresH4, 
  "about-h4": aboutH4, 
  "services-h4": servicesH4, 
  "product-h4": productH4,
  "vision-h4": visionH4
} } = siteContent; 
allH4[0].textContent = featuresH4, 
allH4[1].textContent = aboutH4, 
allH4[2].textContent = servicesH4, 
allH4[3].textContent = productH4, 
allH4[4].textContent = visionH4

document.querySelector(".main-content img").src = siteContent["main-content"]["middle-img-src"]; 

const mainContent = document.querySelectorAll(".main-content p"); 

const {"main-content": {
  "features-content": featuresContent, 
  "about-content": aboutContent, 
  "services-content": servicesContent, 
  "product-content": productContent, 
  "vision-content": visionContent 
}} = siteContent; 
mainContent[0].textContent = featuresContent, 
mainContent[1].textContent = aboutContent, 
mainContent[2].textContent = servicesContent, 
mainContent[3].textContent = productContent, 
mainContent[4].textContent = visionContent 

// ----------- Footer Content --------------

document.querySelector(".contact h4").textContent = siteContent.contact["contact-h4"]; 

const footerPTags = document.querySelectorAll(".contact p"); 

const {"contact":{
  "address": addressP, 
  "phone": phoneP, 
  "email": emailP
}} = siteContent 
footerPTags[0].textContent = addressP, 
footerPTags[1].textContent = phoneP, 
footerPTags[2].textContent = emailP

document.querySelector("footer p").textContent = siteContent.footer.copyright; 




