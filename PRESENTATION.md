# Code for this presentation
[http://bit.ly/vanilla-js-app]()

Fun article from 2016, still actual ;-)
[http://bit.ly/learn-js-in-2016]()


# Intro
[Slide 1]()
This short presentation is about the superpowers which come with vanilla JavaScript and HTML5.

My days in the office are a constant struggle with the established development practices and methodologies. I spend spending substantial amount of time on configurations, ceremony, settings things up, copying and pasting someone else's configuration files because mine just won't work. I'd rather write code.

[Slide 2]()
Let's have a look at `Hello World` application, generated with Angular CLI.
A look at the amount of config files in an average application is revealing.
I wish I could tell what each one of those libraries in `./node_modules` does and why it is needed.

[Slide 2]()
It seems that our coding practices are primarily driven by needs of enterprise applications, while not all our applications or websites are enterprise applications.

> I feel that by blindly jumping into frameworks and build tools I think less, I learn less, and in the end I understand less.

I'm using frameworks and build tools daily. But I feel that maybe the additional complexity which they inevitably bring into the picture, is not always justified?


## MC Checkout Applet
[Slide 4]()
A revealing experience was a little project while at MasterCard. I was asked to refactor a checkout applet, a small wizard of 3 pages. It was built with variety of tools and frameworks. Redistributable bundle was 1.5 MB gzipped. Back in 2003 I was working on patient registration system for hospitals in the Netherlands. Major application, and it was 10 MB in total.

I rewrote this applet using Vanilla JS (tm). It did the same, it looked the same. It was componentized, it used a simple MVC architecture for good separation of concerns. The redistributable was 25kB gzipped. It loaded in a snap.

## How did the frameworks come about
[Slide 5]()
Around 2010 the benefits of web applications became apparent. With growing access to broadband and mobile internet, IT pros have noticed that web browser has a great potential as runtime platform for all kinds of applications. Why?

* easy deployment with one server to upgrade
* no more outdated versions around
* true multi-platform software - same code on Windows, Mac, Linux, mobile etc.

So they said let'd do it. What they forgot to notice, is how bad the platform and the language was at the time. We're talking of ES5 which only just has gottten strict mode, and HTML5 which was still only a working draft, with barely any features available in browsers.

Frameworks and build tools came to the rescue - Knockout, Ember, then AngularJS made big news from 2010 on. React joined the crowd 3 years later. We've gotten grunt, gulp and then webpack. So, what did the Romans ever done for us? They gave us:

* Modules, no more naming conflicts
* Components, development in small logical chunks of HTML, JS and CSS
* Bundling, as modular code is a fragmented code, with bad impact on load performance
* Transpiling, introducing modern language features on a browser which doesn't understand it yet
* Polyfills, modern HTML5 features on a browser which doesn't have them yet
* and many more

## Times have changed though
[Slide 6]()
Browser development didn't stop though, and we've seen it catching up nicely with these expectations. As of now:

* JavaScript available out of the box is an entirely different beast, as we'll see soon
* HTML5 and CSS3 features are all there
* We have modules and components
* HTTP/2 solves performance problems with fragmented code

History made a loop and we're all of the sudden able to write rich applications with much less overhead than until now.


# Did you know?
[Slide 7]()
Let's see what we have available these days. Walk through a dozen of samples demonstrating the power of contemporary JavaScript.

* 01 DOM Manipulations - JQuery-like API for accessing DOM elements
* 02 Modules - first-class code modules in JavaScript
* 03 Modules Tree - predictable and hierarchic loading of modules
* 04 Dynamic Modules - loading of code modules on request
* 05 String Literals - simple templating in pure JavaScript
* 06 Classes - OOP in JavaScript, with inheritance and polymorphism
* 07 Static Classes - semantically clean singletons
* 08 Arrow Functions - concise functions with lexical `this`
* 09 Spread Operator - the most versatile operator in whole of JS
* 10 Destructuring - just as good as spread operator
* 11 Async/Await - simpler syntax for asynchronous code
* 12 Custom Elements - custom HTML components without Angular
* 13 Shadow DOM - sandboxed components, no more leaky CSS
* CSS Variables - a cherry on the top, a serious contender to SASS


# Sample application
[Slide 8]()
In this walkthrough we will look at a sample app, where all this goodness has been applied:

* Pure JavaScript/HTML5 application
* Doing something useful
* No frameworks, build processes, transpiling etc.
* All of the goodies presented during `Did You Know` session
put here into productive use
* Clean, well structure and future-proof code, which easily renders itself for introduction of frameworks, should it become necessary



# Conclusions
[Slide 9]()
Frameworks die off much quicker than programming languages, paradigms and patterns. Therefore it's a much better investment to learn the language, study and learn to apply various programming concepts and design patterns, rather than chasing frameworks. With these, you'll learn any framework in no time, whenever it's needed.

It's a skillset that never expires, regardless of the language or framework you currently use. I wish that they asked me this during job interviews, and not whether I know `React v.0.1472` and it must be this very version otherwise no job!

