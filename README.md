![authonice logo][logo]

# authonice demo (nodejs & angular)

## IN PROGRESS: not ready, yet

This is the demo of [authonice](http://authonice.github.io) with [backend for nodejs](https://github.com/authonice/back-node) & a [angular frontend](https://github.com/authonice/front-angular).

[authonice](http://authonice.github.io) is a platform/language/framework agnostic ecosystem for web-app authentication, with lots of inspiration from [satellizer](https://github.com/sahat/satellizer).

It's designed to work with lots of [backend languages](http://authonice.github.io/backends), [auth services](http://authonice.github.io/services), & [frontend frameworks](http://authonice.github.io/frontends). It's goal is to make you super-happy because your sites are safe, easy to setup & maintain, and stylishly locked-down in your language/frameworks of choice.

If we don't have a module for the frontend-framework/backend-language/auth-service you want to support, [ask us](https://github.com/authonice/authonice.github.io/issues/new?title=Request:%20&labels=request) or [contribute](http://authonice.github.io/contribute)!

## features

-  Quick & easy to get started
-  Express middleware efficiently handles building CSS & javascript, so no grunt/gulp!
-  Comment widgets/animations you don't need from bootstrap and [animation.less](https://github.com/machito/animate.less)
-  Easily themable using [bootswatch](http://bootswatch.com/)
-  Slick & efficient JWT+bcrypt+mongodb authentication
-  In-memory dev mongodb, so you can develop without configuring anything

## get started

-  [Download](https://github.com/authonice/demo-node-angular/archive/master.zip)
-  Run `npm install` to install dependencies
-  Run `npm start` to start the dev-server

## configuration

Use `.env` to set environment variables. I made them all optional, so you can start fast. Here are some good ones:

```
MONGO_URI=mongodb://localhost/myfarkensweetapp
TOKEN_SECRET=kittyonth4keyb04rdME0W!ksjdhfwpeoir
PORT=3000
```

[logo]: http://authonice.github.io/logo.png
