# NodejsExpress_Mongo
A simple Nodejs  Express Application with MongoDB backend

This is a simple example for using Nodejs and Express with MongoDB backend!
to test the application 
# Step 1 - npm install(Then you will see that modules folder and package-lock.json is created!) 
# Step 2 - npm run start
check that the server is running on 
http://localhost:4000/ 

Dependencies: Using 
-Nodemon 
-Babel to convert ES6 code to normal Javascript
-Bodyparser to parse JSON files

Requirements: 
1-Need Mongo DB installed and running
2-Install MongoDB and run the service
For MACOS: 
   # brew install mongodb-community@4.2
   # brew services start mongodb-community@4.2 to start the MongoDB
    You can use MongoDB gui client- https://studio3t.com/

Then you can use POSTMAN to test it
Run 
GET request: http://localhost:4000/contact 
This will fetch the data from the MongoDB  and display as a JSON file

POST  request: http://localhost:4000/contact 
passing the url encoded such as in CURL

curl --location --request POST 'http://localhost:4000/contact/' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'firstName=joe' \
--data-urlencode 'lastName=doe
' \
--data-urlencode 'email=jo@gmail.com' \
--data-urlencode 'company=Accenture' \
--data-urlencode 'phone=123232'

