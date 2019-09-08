var home = document.getElementById('home_page');
var about = document.getElementById('about_page');
var portfolio = document.getElementById('portfolio_page');
var contact = document.getElementById('contact_page');
var logo = document.getElementById('logo');


if( home != undefined)  //Redirects Home
{
    home.addEventListener("click", redirect_home, false);
}
 
if( about != undefined)    //Redirects to About
{
    about.addEventListener("click", redirect_about, false);
}
 
if( portfolio != undefined)    //Redirects to Portfolio
{
    portfolio.addEventListener("click", redirect_portfolio, false);
}
 
if( contact != undefined)    //Redirects to Contact
{
    contact.addEventListener("click", redirect_contact, false);
}
 
if( logo != undefined)    //Redirects home
{
   logo.addEventListener("click", redirect_home, false);
}


function redirect_home(e) 
{
    location.href = "index.html";
}

function redirect_about(e) 
{
    location.href = "about.html";
}

function redirect_portfolio(e) 
{
    location.href = "portfolio.html";
}

function redirect_contact(e) 
{
    location.href = "sample.html";
}



