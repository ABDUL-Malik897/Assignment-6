const http = require('http');
const fs = require('fs');


const port = 3000

http.createServer((req,res)=>{
    res.statusCode = 200
    if(req.url === '/'){
        res.write(`<!DOCTYPE html>
                    <html>
                    <head>
                        <title>Front-Page</title>
                        <style>
                            *{
                                font-size: 1.5rem;
                            }
                            ul{
                                list-style: none;
                                display: flex;
                                align-items: center;
                                justify-content: space-evenly;
                            }
                            a{
                                text-decoration: none;
                            }
                        </style>
                    </head>
                    <body>
                    <header>
                        <nav>
                            <ul>
                                <li><a href="/home">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </header>
                    </body>
                </html>`)
        res.end()
    }
    else if(req.url === '/home'){
        res.statusCode = 200
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
<title>Assignment-4</title>
<style>
    *{
    margin: 0px;
    padding: 0px;
    /* border: 1px solid red; */
    box-sizing: border-box;
}
html{
    font-family:'arial',sans-serif;
    background-color: white;
}
.navbar{
    margin: 1rem;
    padding: 2px;
}
.home-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.home-bar li{
    list-style: none;
}
.logo{
    color: #555;
    font-size: 1.75rem;
    font-weight: bolder;
}
.list-content li a{
    text-decoration: none;
    color: #555;
}
.list-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;
    font-weight: 300;
}
.username{
    padding: 5px;
    background: #b0d7f579;
    font-size: 1.2rem;
    color: aqua;
    border-radius: 5px;
    border: none;
}
main{
    margin-top: 120px;
}
.page_1{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.left-div{
    padding: 4rem;
    font-size: 1.5rem;
}
.left-div h1:first-of-type{
    color: #444343;
}
.left-div h1:last-of-type{
    color: rgb(58, 171, 216);
}
.left-div p{
    margin-top: 15px;
    font-size: .9rem;
    color: #555;
}
.page_1 button[type = submit] a{
    text-decoration: none;
    color: white;
}
.left-div button{
    margin-top: 30px ;
    background-color: rgb(58, 171,216);
    width: 250px;
    height: 55px;
    border-radius: 15px;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.page_1_footer{
    height: 150px;
    margin-top: 50px;
    padding: 50px;
    width: 100%;
    background-color: rgb(58, 171, 216);
}
.ach-sec{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
}
.ach{
    padding: 5px;
    font-size: 2.2rem;
    font-weight: bold;
}
.ach-sec div:last-of-type{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}
.ach-sec div:last-of-type span{
    font-size: 1.5rem;
    font-weight: 600;
}
.ach-sec div:last-of-type li{
    padding-right: 25px;
    border-right: thin solid rgba(255, 255, 255, 0.2);
}
.ach-sec div:last-of-type li:last-of-type{
    border: none;
}
</style>
</head>
<body>
<header>
        <nav class="navbar">
            <ul class="home-bar">
                <ul class="logo">Logo</ul>
                <div class="list-content">
                <li><a href="index.html">Home</a></li>
                <li><a href="#page_2">Services</a></li>
                <li><a href="#page_3">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </div>
                <ul class="username">Username</ul>
            </ul>
        </nav>
    </header>
    <main>
        <section class="page_1">
            <div class="left-div">
            <h1>Revitalize Your <br> 
            Clothes with Expert</h1>
            <h1>Laundry Services!</h1>
            <p> From premium dry cleaning to swift wash and fold, we <br>
                deliver care and convenience. Schedule a pickup and <br>
                rediscover the freshness of your clothes today!
            </p>
            <button type="submit"><ion-icon name="calendar-clear-outline" class="icon"></ion-icon><a href="#page_2">Book a service today!</a></button>
            </div>
            <div class="right-div">
                <img src="https://www.shutterstock.com/shutterstock/videos/6683852/thumb/5.jpg?ip=x480" alt="Laundry">
            </div>
        </section>
        <section class="page_1_footer">
            <ul class="ach-sec">
                <div>
                <li class="ach">Our Achievements</li>
                </div>
                <div>
                <li><span>15+</span><br>Laundry Services</li>
                <li><span>240+</span><br>Happy Customers</li>
                <li><span>2+ Yrs</span><br>Experience</li>
                </div>
            </ul>
        </section>
        </body>
        </html>`)
        res.end()
    }
    else if(req.url === '/about'){
        res.statusCode = 200
        res.statusCode = 200
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Assignment-4</title>
    <style>
        *{
    margin: 0px;
    padding: 0px;
    /* border: 1px solid red; */
    box-sizing: border-box;
}
html{
    font-family:'arial',sans-serif;
    background-color: white;
}
main{
    margin-top: 120px;
}
.page_2{
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.services-section{
    width: 800px;
    height: 480px;
    padding: 5px;
    border: thin solid  rgba(238, 216, 216, 0.671);
    border-radius: 8px;
}
.services-section h2{
    font-size: 2rem;
    padding-bottom: 5px;
}
.services-para{
    color:#555;
    font-size: 90%;
    padding-bottom: 15px;
    border-bottom: thin solid rgba(238, 216, 216, 0.671);
    margin-bottom: 15px;
}
.services-list{
    list-style: none;
    font-size: 1rem;
    color: #353232;
}
.services-list li{
    padding: 15px;
}
.services-list span{
    padding-left: 5px;
}
.services-list .price{
    padding-left: 15px;
    font-weight: 600;
    color: rgb(64, 97, 168);
    font-size: 16px;
}
.services-list .dot{
    padding-left: 15px;
    font-weight: bolder;
    color: grey;
}
.btns{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
}
.btns button{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:5px;
}
.btns .remove_items{
    background-color: rgba(250, 250, 210, 0.205);
    color: rgba(224, 6, 6, 0.699);
    font-weight: 700;
}
.services-list button{
    background-color: #e4e4e479;
    border: none;
    padding: 8px;
    border-radius: 5px;
    color: rgb(26, 8, 8);
    font-weight: 700;
    cursor: pointer;
}
.services-para:last-child{
    border: none;
    padding-top: 40px;
    padding-left: 10px;
    border-top: -100px;
    color: blue;
    font-size: 15px;
    font-family: 'Poppins';
    margin-top: 15px;
    border-top:thin solid rgba(238, 216, 216, 0.671) ;
}
.added_section{
    display:flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;
    max-height: 475px;
}
.added_table{
    border: thin solid rgba(238, 216, 216, 0.671);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: 350px;
}
.added_table h3{
    margin-top: 8px;
    font-size: 1.6em;
    text-align: center;
    padding-bottom:5px ;
}
.table-wrapper{
    max-height: 100px;
    flex: 1;
    overflow-y: auto;
}
.table-wrapper th, .table-wrapper td{
    padding:10px;
    border-bottom:1px solid #eee;
    text-align:left;
}
.table-wrapper th{
    font-weight: 300;
}
.table-wrapper table{
    width: 100%;
    border-collapse: collapse;
}
#serial{
    width: 15%;
}
#s_name{
    width: 55%;
}
#s_price{
    width: 30%;
}
.table_body{
    color: #555;
}
.Total{
    border-top: thin solid rgba(238, 216, 216, 0.671);
    padding: 8px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    background: #fff;
}
.Total p:first-child{
    font-size: 18px;
    color: rgb(20, 19, 19);
    padding: 0 15px;
}
.Total p:last-child{
    color: #555;
    margin-right: 30px;
    font-size: 95%;
}
.booking{
    margin-top: 30px;
    border: thin solid rgba(238, 216, 216, 0.671);
    border-radius: 8px;
}
.booking h5{
    margin-top: 10px;
    margin-left: 10px;
    text-align: left;
    font-size: 1.1rem;
    margin-bottom: 20px;
}
.booking .l_name{
    padding-left: 15px;
    font-weight: 500;
    font-size: 16px;
    color: #555;
}
.booking .l_email{
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 500;
    font-size: 16px;
    color: #555;
}
.booking .l_tel{
    margin-left: 10px;
    font-weight: 500;
    font-size: 16px;
    color: #555;
}
.booking input{
    border: thin solid rgba(238, 216, 216, 0.671);
    width: 475px;
    height: 35px;
    margin-left: 15px;
    border-radius: 5px;
    margin-bottom: 5px;
}
.booking .email{
    margin-left: -10px;
    width: 105px;
}
.booking .tel{
    width: 92px;
    margin-left: 2px;
}
.booking .name{
    width: 375px;
    margin-top: 5px;
}
.booking input[type = submit]{
    background-color: rgb(0, 60, 255);
    color: white;
    margin-top: 18px;
    margin-bottom: 10px;
    border-radius: 8px;
    width: 375px;
    height: 45px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
}
.gap_1{
    margin-top: 10px;
}
    </style>
</head>
<body>
    <main>
        <section class="page_2" id="page_2">
            <div class="services-section">
                <h2>Our Services</h2>
                <p class="services-para">Click On The Add To Cart Button To Add The Services To Your Cart</p>
                <ul class="services-list">
                    <div class="btns">
                    <li>🧺 Dry cleaning <span class="dot">&middot;</span><span class="price">₹200.00</span></li>
                    <button type="submit" data-added="false" data-service="Dry Cleaning" data-price="200.00"id = 'a'>Add Items<ion-icon name="add-circle-outline" class="icon"></ion-icon></button>
                    </div>
                    <div class="btns">
                    <li>🧼 Wash & Fold<span class="dot">&middot;</span><span class="price">₹100.00</span></li>
                    <button type="submit" data-added="false" data-service="Wash & Fold" data-price="100.00">Add Items<ion-icon name="add-circle-outline" class="icon"></ion-icon></button>
                    </div>
                    <div class="btns">
                    <li>👕 Ironing<span class="dot">&middot;</span><span class="price">₹30.00</span></li>
                    <button type="submit" data-added="false" data-service="Ironing" data-price="30.00">Add Items<ion-icon name="add-circle-outline" class="icon"></ion-icon></button>
                    </div>
                    <div class="btns">
                    <li>🩸 Stain Removal<span class="dot">&middot;</span><span class="price">₹500.00</span></li>
                    <button type="submit" data-added="false" data-service="Stain Removal" data-price="500.00">Add Items<ion-icon name="add-circle-outline" class="icon"></ion-icon></button>
                    </div>
                    <div class="btns">
                    <li>🧥 Leather & Suede Cleaning <span class="dot">&middot;</span><span class="price">₹999.00</span></li>
                    <button type="submit" data-added="false" data-service="Leather & Suede Cleaning" data-price="999.00">Add Items<ion-icon name="add-circle-outline" class="icon"></ion-icon></button>
                    </div>
                    <div class="btns">
                    <li>👗 Wedding Dress Cleaning <span class="dot">&middot;</span><span class="price">₹2800.00</span></li>
                    <button type="submit" data-added="false" data-service="Wedding Dress Cleaning" data-price="2800.00">Add Items<ion-icon name="add-circle-outline" class="icon"></ion-icon></button>
                    </div>
                </ul>
                <p class="services-para"><ion-icon name="alert-circle-outline" class="icon"></ion-icon>Add the items to the cart and book now</p>
            </div>
            <div class="added_section">
            <div class="added_table">
                <h3>Added Items</h3>
                <div class="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th id="serial">S.No</th>
                        <th id="s_name">Service Name</th>
                        <th id="s_price">Price</th>
                    </tr>
                    </thead>
                    <tbody id="addedItemsBody" class="table_body"></tbody>
                </table>
                </div>
                <div class="Total">
                    <p>Total Amount</p>
                    <p id="totalAmt">₹0.00</p>
                </div>
            </div>
            <div class="booking">
                <h5>Book Now</h5>
                <form action="#">
                <label for="name" class="l_name" id="name">Full Name</label>
                <input type="text" name="name" placeholder="John Doe" required class="name">
                <div class="gap_1">
                <label for="email"class="l_email">Email</label>
                <input type="email" name="email" placeholder="mail@gmail.com" required class="email" id="email">
                <label for="tel" class="l_tel" id="Phone">Phone Number</label>
                <input type="tel" name="tel" placeholder="0000000000" required class="tel">
                </div>
                <input type="submit" value="Book now" onclick="bookService()">
                </form>
            </div>
            </div>
        </section>
    </main>
</body>
</html>`)
        res.end()
    }
    else if(req.url === '/contact'){
        res.statusCode = 200
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        *{
    margin: 0px;
    padding: 0px;
    /* border: 1px solid red; */
    box-sizing: border-box;
}
html{
    font-family:'arial',sans-serif;
    background-color: white;
}
        footer{
    margin-top: 120px;
    display: flex;
    justify-content: space-evenly;
    background-color: rgba(223, 235, 240, 0.356);
}
footer div{
    padding: 10px;
}
.logo_wala h5{
    font-size: 1rem;
    padding-bottom: 5px;
}
.logo_wala p{
    color: #555;
    font-size: 99%;
}
.link_wala h4{
    padding-bottom: 5px;
}
.link_wala ul{
    list-style: none;
}
.link_wala ul li{
    color: #555;
    font-size: 95%;
    padding-bottom: 5px;
    cursor: pointer;
}
.contact_wala h4, .contact_wala p{
    padding-bottom: 10px;
}
.follow_wala h4{
    padding-bottom: 5px;
}
.follow_wala ul{
    list-style: none;
    display: flex;
    gap: 8px;
    cursor: pointer;
    font-size: 1.5rem;
}
.navbar li a:hover,
body button:hover,
body input[type = submit]:hover{
    transform: translateY(-3px);
}
.follow_wala ul li:hover{
    zoom: 1.5;
}
.follow_wala ul li:nth-of-type(1):hover{
    color: #e008e0;
}
.follow_wala ul li:nth-of-type(2):hover{
    color: #3b5998;
}
.follow_wala ul li:nth-of-type(3):hover{
    color: #00aced;
}
.follow_wala ul li:nth-of-type(4):hover{
    color: #dd4b39;
}
    </style>
    <title>Assignment-4</title>
</head>
<body>
    <footer>
        <div class="logo_wala">
            <div>
            <h2>Logo</h2>
            </div>
            <div>
                <h5>About Us</h5>
                <p>Lorem ipsum dolor, sit amet <br> consectetur adipisicing elit. Aliquid.</p>
            </div>
        </div>
        <div class="link_wala">
            <h4>Important Links</h4>
            <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
                <li>Terms of use</li>
                <li>Refund Policy</li>
            </ul>
        </div>
        <div class="contact_wala">
            <h4>Contact</h4>
            <p>mail@site.com</p>
            <p>+91 91234 56780</p>
        </div>
        <div class="follow_wala">
            <h4>Follow Us</h4>
            <ul>
                <li><ion-icon name="logo-instagram"></ion-icon></li>
                <li><ion-icon name="logo-facebook"></ion-icon></li>
                <li><ion-icon name="logo-twitter"></ion-icon></li>
                <li><ion-icon name="logo-youtube"></ion-icon></li>
            </ul>
        </div>
    </footer>
</body>
</html>`)
        res.end()
    }
    else{
        res.statusCode = 404
        res.write(`<html>
                    <head>
                    <title>404 ERROR</title>
                    <style>
                        body{
                            margin: 0;
                            height: 100vh;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            text-align: center;
                            font-weight: 800;
                        }
                        h1{
                            font-size: 60px;
                            margin-bottom: 10px;
                        }
                        p{
                            font-size: 20px;
                        } 
                    </style>
                </head>
                <body>
                    <h1>404 - ERROR </h1>
                    <p>Page Not Found</p>
                </body>
                </html>`)
        res.end()
    }
}).listen(port,()=>{
    console.log(`http://localhost:${port}`);

})