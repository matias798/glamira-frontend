


# Glamira Reactjs app

# `Demo:` [Glamira ](https://glamira-frontend.web.app)
  
  
  
Install and run glamira server
[Glamira Server](https://github.com/matias798/glamira-server)



## Install

Use the package manager (npm) or (yarn) to install.

`npm install`  or  `yarn install`

Change enviorment variable `REACT_APP_SERVER_URL` from .env file to a the server url.
Remember that the server should be `https`.

Run npm `npm start`  or  `yarn start`



# Routes

#### Public routes 

 - `/` Home  
 
-  `/cart` Shopping cart of the user

- `/contact-us` Shows contact data about Glamira

- `/product/detail` Shows the detail of the product

- `/products/:category` Shows all the products in a specific category

- `/user/login` Login of the user

-   `/user/Register` Register of the user

- `/payment` Chekout to buy a product for not logged users   
  

#### Private routes 
- `/user/profile/orders` Shows all the orders of the User (it has to be logged in or have a purchase)

