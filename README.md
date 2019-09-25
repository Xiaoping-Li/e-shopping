# e-shopping
This is a Full-stack project about e-commerce shopping cart.
1. Database: MongoDB
2. Frontend: Expo React Native, Mobx, stripe-client, React Navigation, 
3. Backend: Express, Express-session, Nodemailer, Stripe

Readings:
1. ScrollView vs. FlatList
    * ScrollView for **a small amount of items**: because all the elements and views of a ScrollView are rendered, even if they are not currently shown on the screen.
    * FlatList fits to **large amount of items**.

## Installation Instructions
This is a Full-stack project, so before you could run the app through Expo on your device (iPhone, iPad, Android phone, or emulators on your PC):
* 1. Firstly, make sure you have Expo installed on your devices or your emulators
* 2. Secondly, set up your server side database and REST APIs successfully
* 3. Finally, wire up the Front-end with the successfully running Back-end

**Notes:** I developed and tested this project through Expo installed on my iPhone 6. I prefer to use nonspecific features, (features  neither IOS only nor Android only), but because I used iPhone, there were probably features that would work differently on IOS and Android. 

### SET UP Back-end: Database & REST APIs
* 1. Clone the project to your local directory by using the following command:
```
git clone https://github.com/Xiaoping-Li/e-shopping.git
```
* 2. CD to the root directory of this project, create a new directory called `config` and create a new file named `keys_dev.js`. And **ADD** `/config/keys_dev.js` to your root `.gitignore` file. Because we keep those **SECRET_KEYs** here for _MongoDB_, _Stripe_, _Express-Session_, and _Nodemailer_, and these are confidential information, **Please carefully! Don't leak these information!!! ADD `/config/keys_dev.js` to root `.gitignore` file** Below is an example of what should you keep inside `keys_dev.js`:
```
module.exports = {
    mongoURI: 'mongodb+srv://<username>:<password>@<clustreID-given-by-mongoDB>.mongodb.net/test?retryWrites=true&w=majority',
    STRIPE_SECRET_KEY: 'sk_test_<Secret-TestID-given-by-Stripe>',   // Will get this key when you registe on Stripe
    STRIPE_PUBLIC_KEY: 'pk_test_<Public-TestID-given-by-Stripe>',   // Will get this key when you registe on Stripe
    SESSION_SECRET: '<Secret-key-that-could-be-anything-here>',     // Could generate an UUID online and use it here
    MAILER_EMAIL: '<Email address here when you registe nodemailer>',
    MAILER_PASSWORD: '<Secret password with the register email>',   // Could generate an UUID online and use it here
};

```
**Notes:** No details for how to get these _keys_ or _mongoURI_ here. There are lots of good resources online teaching you how to do that. I used MongoDB Atlas which is use to set up. Below are some resources:

    * i). MongoDB In The Cloud With Atlas: https://www.youtube.com/watch?v=KKyag6t98g8
    * ii). How to Get Your Test and Live Stripe API Keys from Your Stripe Account: https://www.youtube.com/watch?v=UxpgwkiA5OM
    * iii). Send email with Nodemailer using gmail account - Nodejs: https://www.youtube.com/watch?v=Va9UKGs1bwI

* 3. Install all the dependencies for back-end. On terminal under root directory:
```
yarn install
or
npm install
```
* 4. Start the server by using Nodemon
```
yarn add nodemon
nodemon server.js
```
**Note:** If everything setup correctly, you could see the below notification on terminal:
```
MongoDB Connected
server listen on 5000
```
* 5. You don't have any data yet in your database, Please use these models under `models` directory to prepare some `pets` data before you could run the app. There are photos here for your referrence: `e-Shopping/assets/photo`.


### WIRE UP Front-end
