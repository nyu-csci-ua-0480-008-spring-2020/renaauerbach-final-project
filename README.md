# Team Caleb

## Overview

Team Caleb is a non-profit organization in memory of Caleb Penn Maeir. This organization was designed to provide sports programs in underprivileged communities with the necessary funds and equipment to play the sports every child loves.

This web application is designed for users to register for upcoming TC events and post memories they have of Caleb. 

## Data Model

The application will store Users, Events, and Memories

* Users can register for multiple Events (via references)
* Users can author multiple Memories (via references)
* Events can have multiple registered Users (via reference)
* A Memory can be created by one User (embedded)

An Example User with referenced Events and Memories:

```javascript
{
  username: "renaauerbach",
  hash: // a password hash,
  email: "rma453@nyu.edu",
  firstName: "Rena",
  lastName: "Auerbach",
  location: "Chicago, IL",
  events: [] // an array of references to Event documents
  memories: [] // an array of references to Memory documents
}
```

An Example Event with referenced Users:

```javascript
{
  title: "Jerusalem Marathon",
  date: "2020-03-20T10:30:00.000Z",
  location: "Jerusalem, Israel",
  users: [] //an array of references to Users 
  image: // an optional event image
  createdAt: // timestamp
}
```

An Example Memory with embedded User (Author):

```javascript
{
  title: "First grade class",
  author: {firstName: "Rena", lastName: "Auerbach"},
  text: "I loved being in the same class as Caleb in first grade!"
  image: // an optional image
  createdAt: // timestamp  
}
```

## [Link to Commented First Draft Schema](db.js) 

## Wireframes

/news - page for viewing news from the organization

![news](documentation/news.png)

/events - page for viewing events

![events](documentation/events.png)

/events/register - page for registering for an event

![events register](documentation/events-register.png)

/memories - page for viewing the memory book

![memories](documentation/memories.png)

/memories/new - page for sharing a new memory 

![memories new](documentation/memories-new.png)

/contact - page for contacting the organization

![contact](documentation/contact.png)

## Site map

![site-map](documentation/site-map.png)

## User Stories or Use Cases

1. As a non-registered user, I can register a new account with the site
2. As a non-registered user, I can view the news page
3. As a non-registered user, I can view the events page
4. As a non-registered user, I can view the memory book page
5. As a non-registered user, I can contact the organization via the contact page
6. As a user, I can log in to the site
7. As a user, I can register for an event
8. As a user, I can view all the events I am registered for
9. As a user, I can author a new memory
10. As a user, I can view all the memories I have authored

## Research Topics

* (3 points) Grunt build tool
    * I'm going to be using Grunt for task automation in conjunction with the following:
	* (2 points) ESLint
	    * I will have a configuration file in my repository
	    * It will automatically run on entire codebase outside of node_modules on file change
	    * I will link it to relevant lines in build configuration and lint configuration
	    * I will show screen capture / animated gif of running on save
* (5 points) ReactJS
    * I'm going to use ReactJS as the frontend framework

## [Link to Initial Main Project File](app.js) 

## Annotations / References Used

1. [React tutorial](https://reactjs.org/tutorial/tutorial.html)
