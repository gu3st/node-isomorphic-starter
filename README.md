# node-isomorphic-starter [![Build Status](https://travis-ci.org/anyuzer/node-isomorphic-starter.svg?branch=master)](https://travis-ci.org/anyuzer/node-isomorphic-starter)
A thin ES6 OOP isomorphic stack for node using express/react/redux

##Includes:
* Testable organized architecture
* Comments in every file
* 100% Test coverage of included code (using Jest)
* CSS module loading
* Working implementation of Redux
* Fully rendered out page utilizing React
* Methodology for organizing React/Redux in a scalable, testable OOP way
* HTTP and HTTPS server
* Middleware hooks for Security, Authentication, Static Files, AppParsing, ErrorHandling
* Configured webpack/babel

## Usage
Intended as a base package for a new isomorphic app
* Download as zip
* Unzip into new project
* Update `package.json` for new app
* Run
    * `npm install`
    * `npm run build`
    * `npm start`
* Navigate to `http://localhost:8799`
* If everything works, modify!

## Webserver
The server side of this is modeled somewhat similar to the node-service-starter kit with a few major considerations:
* The HTTP server expects to be loading a client side page (as opposed to API), and thusly is not versioned
* The server does not access models directly, but utilizes Redux for data state. This is critical for isomorphic data management

## Testing
This project utilizes jest, and its snapshot features for testing React components, as well as its standard testing capabilities.
* `npm test` will run tests
* `jest -u` will update component snapshots

## Current Status
This kit is more experimental and non-standard than the node-service-starter kit. Additionally it is more opinionated. The goal is to use OOP to introduce the complexities of isomorphic applications in a way that is easier to organize, as well as easier to understand for developers new to node/react/redux and isomorphic.

In doing this though, there are some concepts, patterns and language that are experimental:
###StateManagers vs Containers.
In React/Redux the logic that wraps a Component, and handles updating the properties (so propagating to the UI) and handling an action that updates the data state (propagating) is called a **container** in current parlance.

In my explorations though, when dealing with UI and markup developers tend to interpret containers as something that impacts the end result markup (even if it's not directly visible).

For example:
```html
<div class="container">
    <div class="component">
       Stuff
    </div>
</div>
```

Of course, this isn't how React/Redux containers operate, which causes some unnecessary confusion on how they operate and what their purpose is.

In this kit, we are calling them **StateManagers**.

StateManagers === Containers.

A StateManager is optional when loading a Component, but if included represents the business logic in charge of managing i/o around the component. So it can dispatch actions to the Redux store (think user interaction) and then can receive new state to propogate the property changes to the Component.

###Performers vs Action/Reducers
In Redux specifically the concepts are very simple. The store maintains a state, action objects are dispatched to it which are passed into the reducer. Assuming a multi reducer state, each reducer needs to evaluate the action object and identify whether or not it should act on it. In the event that it is going to be acted on, business logic utilizing the current state, and the passed in action are used to create a new state (if required).

Currently, I've seen this cause a lot of confusion for developers new to Redux, and can cause a lot of architectural messiness which reduces long term maintainability and scalability.

Instead of seperating actions/reducers into separate files, and even the action list into potentially another separate file in this kit we have a class concept called a **Performer**.

A **Performer** is a testable class that includes a methodology around attaching unique actions to it as static properties, evaluating whether or not the action is applicable during the reducer process, and then handling the action logic required to create a new state.

###Models
In non Redux applications, it is good practice to have individual Model classes that have Single Responsibility around data, and expose its properties through an explicit API. This is common when these Models are being managed and owned by the application.

When utilizing Redux, because Redux maintains a large state representing all of the models/relationships and properties, but maintains responsibility there is not necessarily an obvious way to utilize models classes.

This is problematic because operating on raw objects can reduce visibility, testability and even result in ownership issues which can result in long term non obvious bugs.

In this way we introduce traditional **Model** classes that represent data ownership. The key different in using them, is that unlike a traditional application where they are expected to have a longer lifecycle, in this kit they are expected to be short lived, where model data is hydrated into them, then operations can be performed on the **Model** much as you would a traditional model, before `.flatten()` returns a new state for Redux.

##Thoughts
This kit fundamentally is doing what every node/react/redux isomorphic application is required to do. The concepts and their fundamental use are the same, but I've attempted to make something with a lower barrier to entry for developers who are new to this stack, and these concepts.

This is not an isomorphic framework, as it provides no magical handling or functionality to reduce the friction on these concepts. Instead it relies purely on language patterns, and base structure to maintain readability and visibility (in hopes to reduce the barrier to entry).

In this way, it doesn't present a right way to do things, as much as a good place to explore the concepts and make a decision what patterns best fit your style and your project.

##TODOs
Finally, there are a number of things that I will be adding to this to ensure its robustness in delivering a reasonable base template that will fit the needs of most starting isomorphic applications.

This includes:
* `react-router`
* `client application interaction with dynamic data on the server side`
* `socket.io` (though much like TLS this will be off by default)
* update all `requires` to use `import/export` syntax
