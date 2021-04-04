The Server is running at the following URL: 

https://africanmarketplaceunit4.herokuapp.com/

You can interact with the server using the following POST endpoints 

LOGIN
https://africanmarketplaceunit4.herokuapp.com/api/auth/login
EXPECTS - an object with...
user_name & password 

REGISTER
https://africanmarketplaceunit4.herokuapp.com/api/auth/register
EXPECTS - an object with...
user_name, password, and location (front-end also should send an agree boolean but this is not managed with this endpoint currently. Feel free to pass it though)

After user registeres they need to be redirected to the login page so they can login and set the auth token

LOGOUT
https://africanmarketplaceunit4.herokuapp.com/api/auth/logout
EXPECTS - nothing needed 


You can get objects from the backend only after logging in or registering. The following endpoints are available 

GET
https://africanmarketplaceunit4.herokuapp.com/api/market
RETURNS 
an object with...
product_name, seller_price, qty, description, seller_name, and location

GET
https://africanmarketplaceunit4.herokuapp.com/api/market/:id
RETURNS 
one object with...
product_name, seller_price, qty, description, seller_name, and location


POST
https://africanmarketplaceunit4.herokuapp.com/api/market
EXPECTS
an object with...
product_name, category_name, seller_price, qty, description, seller_name, and location
RETURNS
the created object

PUT (UPDATE)
https://africanmarketplaceunit4.herokuapp.com/api/market/:id
EXPECTS 
an object with...
product_name, category_name, seller_price, qty, description, seller_name, and location
RETURNS
the updated object

DELETE
https://africanmarketplaceunit4.herokuapp.com/api/market/:id
EXPECTS
nothing (just the id from the request.params)
RETURNS
the deleted object