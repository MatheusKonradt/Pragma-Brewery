# Pragma Brewery

###Sumary
This is a React project for helping Shane to controll the temperature of the goods he transports in his truck trough the metropolitan Sydney.

### Questions/Assumptions
* It was not established in which platform the solution should be built. I chose to built a responsive web APP because Shane will be driving, so most of the times he will be in need to use this app he will not have a computer/notebook available. Also he shouldn't be looking at his celphone while driving, but for a 2.0 version we would implement push notifications and an alarm like system for alerting shane whenever a container goes outside the safe temperature range.
* It was not said how the thermometers temperatures would be available. It could be through the internet, through the wifi, cables, bluetooth, etc. My assumptions was that the truck would not have access to internet, so to access it using a smartphone, bluetooth would be a good idea. Although I didn't have implemented bluetooth comunication in my app, I created a facade class for acessing themometers information. This makes the app agnostic of the way the sensors measurements are transmitted to the app.

###Running it
* Make sure you have node@10.10 installed
* Go to the project folder and type `$ npm install` to the terminal
* Type `$ npm start` for starting the development server.
* After that, there should be a server running on `https://localhost:3000`

###Highlights
* I created those graphs showing the temperature historic so I could demonstrate that I know how to use math to sovle problems.
* Although I couldn't use many design patterns in this project, you can look at the `src/services` folder. There I added a a facade class, a factory class and a singleton class.
* I think naming variables, methods, classes, etc, is the most important thing for working in group projects. Someone that is reviewing your code can understand in a second what a method call like `canvas.drawLineFromAToB(a, b)` does while `canvas.draw(a, b)` is not intuitive. So you will see that I try to name my methods in the most descriptive way I can.

###Improvement Points
* I know how to code both web front-end and back-end, but I'm much stronger at back-end coding. For this project I didn't see the need for a back-end server, so I made it using React. Although I know I could improve on how to structure and separate my React project into components.
* In a 2.0 version the app would work offline by the use of PWA technology
* In a 2.0 version the app would have push notifications and an alarm system so Shane wouldn't need to open the app to check the container temperatures

###Obs
* Since the thermometers data is mocked, I added a menu options for changing the sensor temperature. This menu options would not be in a real app where the data would be received from a real sensor. You can test the app by going to this options and setting arbitrary values.
