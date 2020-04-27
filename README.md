# Team Caleb

## Overview

Team Caleb is a non-profit organization in memory of Caleb Penn Maeir. This organization was designed to provide sports programs in underprivileged communities with the necessary funds and equipment to play the sports every child loves.

This web application is designed for users to register for upcoming TC events and post memories they have of Caleb. 

## Data Model

The application will store Events and Memories	

* Events can have multiple registered participants (individual objects)
* Memories can have authors (individual objects)
* Messages to the company

An Example Event:

```javascript
{
  title: "NYC Marathon",
  date: "2020-03-20T10:30:00.000Z",
  location: "New York, New York",
  participants: [], //an array of registered participant objects
  image: // an optional event image
  createdAt: // timestamp
}
```

An Example Memory:	

```javascript	
{	
  title: "First grade class",	
  author: "Rena Auerbach",	
  text: "I loved being in the same class as Caleb in first grade!",	
  createdAt: // timestamp  	
}	
```	

An Example Message:	

```javascript	
{	
  name: "Rena Auerbach",
  email: "renaauerbach@nyu.edu",	
  subject: "T-shirt size",	
  text: "Hi, I was wondering is the shirts for the Marathon run small? If so, I'd like to change mine to a Medium. Thank you!",	
  createdAt: // timestamp  	
}	
```	

## [Link to Commented First Draft Schema](db.js) 

## Wireframes

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

1. As a user, I can view the events page
2. As a user, I can register for an event
3. As a user, I can view the memory book page
4. As a user, I can author a new memory	
5. As a user, I can send a message to the organization via the contact page

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
2. [Creating a MERN Stack Application](https://blog.cloudboost.io/creating-your-first-mern-stack-application-b6604d12e4d3)
3. [Create React App](https://create-react-app.dev/)
4. [Server side rendering with React and Express](https://medium.com/front-end-weekly/server-side-rendering-with-react-and-express-382591bfc77c)
5. [How To Get Started with the MERN Stack](https://www.digitalocean.com/community/tutorials/getting-started-with-the-mern-stack#routes)
6. [React Axios Tutorial](https://www.positronx.io/react-axios-tutorial-make-http-get-post-requests/)
