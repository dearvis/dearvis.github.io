var home = document.getElementById('home_page');
var about = document.getElementById('about_page');
var portfolio = document.getElementById('portfolio_page');
var contact = document.getElementById('contact_page');



if( home != undefined)  //Encrypt Message in Image
{
    home.addEventListener("click", redirect_home, false);
}
 
if( about != undefined)    //Encrypt Image inside of Image
{
    about.addEventListener("click", redirect_about, false);
}
 
if( portfolio != undefined)    //Decrypt Message inside of Image
{
    portfolio.addEventListener("click", redirect_portfolio, false);
}
 
if( contact != undefined)    //Decrypt image inside of Image
{
    contact.addEventListener("click", redirect_contact, false);
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



