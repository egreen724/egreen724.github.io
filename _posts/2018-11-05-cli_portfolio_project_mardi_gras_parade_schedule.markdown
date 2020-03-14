---
layout: post
title:      "CLI Portfolio Project: Mardi Gras Parade Schedule"
date:       2018-11-05 16:39:07 +0000
permalink:  cli_portfolio_project_mardi_gras_parade_schedule
---


In an attempt to keep things light-hearted and to give a nod to my Louisiana roots, I constructed my CLI Portfolio Project to allow users to interact with the Mardi Gras parade schedule in New Orleans for 2019.  My thought was that the gem would function as a simple scheduler and allow users to sort the parade information by date and by neighborhood, and to get more detailed information about each parade.

https://github.com/egreen724/cli-project

I scraped the full list of parades and their data from http://www.mardigrasneworleans.com/schedule.html and used each parade page to gather additional details such as the parade's history.  I used Nokogiri and Open URL to scrape the information and constructed two classes of objects--Parades and Neighborhoods--to allow users to interact with the data.  By far the most satisfying part of the project was when I identified the correct css identifiers and the information started to populate correctly!

Before I began writing any of the code, I created a fairly detailed outline of how I wanted users to interact with the gem.  I tried to keep things as user-friendly as I could and this goal led me to refactor a few sections after I had a working product.   For example, originally I had the user typing full words or dates to select their choices (such as "See by date", "see full schedule"), and, while I had accounted for input errors, I decided to rely more heavily on numbered lists for the user selections to make things as user-centric as possible and to avoid possible errors.  I have been in the shoes of the frustrated user who spells something wrong and has to start over so I tried to avoid this as much as possible.

Overall, it was a great experience to start something from scratch and end up with a working product.  I didn't have much experience with Github or requiring various files and I feel much more confident in both of these areas now.   If I was going to create gem 2.0, I would probably try to create some form of user class and allow users to save specific parades to a personal calendar or list.  That's a challenge for another day!

Laissez les bons temps rouler!
