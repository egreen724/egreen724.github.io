---
layout: post
title:      "Rails Portfolio Project"
date:       2019-04-17 12:31:29 -0400
permalink:  rails_portfolio_project
---

As I worked my way through the Rails section of the Flatiron curriculum, I found it to be the most challenging section by far.  I decided to approach my portfolio project with extra organization and planning so that I would be prepared for any challenges I encountered.  The basic idea for my app was to create a platform for users to keep track of outdoor activities that they have done or would like to do.  They can add activities to their "To Do List", log trips, and see other user comments.  They can also filter activities by certain attributes such as location, distance, and keywords.

I have a friend who works as a developer and he met with me before I started the project to walk me through the Agile process that most tech companies use for their workflow.  If you haven't read about this yet, I would encourage you to check out the [Agile Manifesto](https://agilemanifesto.org/).  The basic idea is that programmers work in a series of "sprints" for continuous deployment of app features, instead of a "waterfall" approach where the entire app is completed in its entirity before it is released.  This allows the programmers and app itself to be more flexible and, wait for it, AGILE. 

The first thing I did with my friend was sketch out my models with an Entity Relationship Diagram (ERD) to understand the attributes and relationships that they would need (I used draw.io).
[Entity Relationship Diagram](https://drive.google.com/file/d/1WvLHa9wKmgFB8kiKzuYlY05Fn97taYxs/view?usp=sharing)

![(https://drive.google.com/file/d/1WvLHa9wKmgFB8kiKzuYlY05Fn97taYxs/view?usp=sharing)](https://drive.google.com/file/d/1WvLHa9wKmgFB8kiKzuYlY05Fn97taYxs/view?usp=sharing)

The next thing I did was create a Trello board that I used to track the progress of my project.  As I planned out the project through wire frames (which I will share below), I created user stories for each step of the project.  I used a simple "Given, When, Then" template for user stories that captured different things I wanted to accomplish on each view of the app.  For example, on the User's show page, one user story read, "Given a user is logged in, When they navigate to their profile page, Then their past trips list is displayed in chronological order with links to more details".  This helped me to track what I would need to do on each page from a user perspective and I actually ended up changing some of the attributes of my models to make them more user friendly or to add features that I thought would be useful.  

[Trello Board](https://drive.google.com/file/d/12kZYoxK5cVCDzAuenJajUhCN7VLDk1Vc/view?usp=sharing)

![](https://drive.google.com/file/d/12kZYoxK5cVCDzAuenJajUhCN7VLDk1Vc/view?usp=sharing)

I tried to use the Trello boards as I went through each step of the project to get used to this workflow.  I would use a certain number of user stories to the "In Progress" column each day, depending on how much time I had to dedicate to the project. 

I also found it really useful to create a few wireframes for the main views of my app, to get a sense of how the user would interact with my models. I used Marvelapp.com and found it to be simple and user-friendly for what I needed.  The process of mapping out my forms was particularly helpful! It impacted how I collected certain attributes (integers vs strings, etc.) and I was really glad I did this before writing any code.  

[Wire Frame 1](https://drive.google.com/file/d/1c7M4ko8ekG8UHoMpwtg0pRw4y1Vj9m91/view?usp=sharing)
[Wire Frame 2](https://drive.google.com/file/d/1Ku6EGIcGjTCXv4y8DjOxmoKo6S0O8F6O/view?usp=sharing)

![](https://drive.google.com/file/d/1c7M4ko8ekG8UHoMpwtg0pRw4y1Vj9m91/view?usp=sharing)
![](https://drive.google.com/file/d/1Ku6EGIcGjTCXv4y8DjOxmoKo6S0O8F6O/view?usp=sharing)

I'm nearly finished with my Rails project and, while the planning took a few extra days, it made the actual project go much more quickly and I had a solid understanding of what I needed to accomplish before I wrote a single line of code.  I hope this process is helpful for anyone else working on their portfolio projects! 

