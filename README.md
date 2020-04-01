# Team Caleb

## Overview

Team Caleb is a non-profit organization in memory of Caleb Penn Maeir. This organization was designed to provide sports programs in underprivileged communities with the necessary funds and equipment to play the sports every child loves.

This web application is designed for users to register for upcoming TC events and post memories they have of Caleb. 

## Data Model

The application will store Users, Events, and Memories

* Users can register for multiple Events (via references)
* Users can author multiple Memories (via references)
* Events can have multiple registered Users (via reference)
* Memories can be created by one User

(___TODO__: sample documents_)

An Example User:

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

An Example Event with registered Users:

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

An Example Memory with referenced User:

```javascript
{
  title: "First grade class",
  author: // reference to authored user
  text: "I loved being in the same class as Caleb in first grade!"
  image: // an optional image
  createdAt: // timestamp  
}
```

## [Link to Commented First Draft Schema](db.js) 

## Wireframes

(___TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc._)

/news - page for viewing news from the organization

![news](documentation/news.png)

/events - page for viewing events

![events](documentation/events.png)

/events/register - page for registering for an event

![events register](documentation/events-register.png)

/memories - page for viewing memories about Caleb

![memories](documentation/memories.png)

/memories/share - page for sharing a new memory 

![memories share](documentation/memories-share.png)

/contact - page for contacting the organization

![contact](documentation/contact.png)

## Site map

(___TODO__: draw out a site map that shows how pages are related to each other_)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

(___TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://www.mongodb.com/download-center?jmp=docs&_ga=1.47552679.1838903181.1489282706#previous)_)

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create a new grocery list
4. as a user, I can view all of the grocery lists I've created in a single list
5. as a user, I can add items to an existing grocery list
6. as a user, I can cross off items in an existing grocery list

## Research Topics

(___TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed_)

* (5 points) Integrate user authentication
    * I'm going to be using passport for user authentication
    * And account has been made for testing; I'll email you the password
    * see <code>cs.nyu.edu/~jversoza/ait-final/register</code> for register page
    * see <code>cs.nyu.edu/~jversoza/ait-final/login</code> for login page
* (4 points) Perform client side form validation using a JavaScript library
    * see <code>cs.nyu.edu/~jversoza/ait-final/my-form</code>
    * if you put in a number that's greater than 5, an error message will appear in the dom
* (5 points) vue.js
    * used vue.js as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points

10 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit_)


## [Link to Initial Main Project File](app.js) 

(___TODO__: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js_)

## Annotations / References Used

(___TODO__: list any tutorials/references/etc. that you've based your code off of_)

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) - (add link to source code that was based on this)

