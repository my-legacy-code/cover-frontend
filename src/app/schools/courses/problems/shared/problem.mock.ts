/**
 * Created by harryliu on 12/19/16.
 */
export const mockProblems = [
  {
    "id": 0,
    "title": "A1",
    "course": "CS4241",
    "school": "WPI",
    "term": 0,
    "dueDate": "2016-12-22T03:24:00",
    "postedDate": "1995-11-10T03:24:00",
    "description": "This assignment is a \"warm-up\" exercise. You will simply deploy the starting Web site that you will use this term to the Heroku Web platform.",
    "body": "Hello World: Basic Deployment w\/ Git, GitHub, Heroku\n===\n\nDue Nov 3\n\nThis assignment is a \"warm-up\" exercise.\nYou will simply deploy the starting Web site that you will use this term to the [Heroku Web platform](http:\/\/www.heroku.com\/).\n\nRefer to [Getting started with node.js on Heroku](https:\/\/devcenter.heroku.com\/articles\/getting-started-with-nodejs#introduction).\n\n(Thanks to past instructors of the course, here is a short [getting started with Heroku movie](http:\/\/web.cs.wpi.edu\/~gpollice\/Movies\/HerokuGettingStarted\/) that may also help.)\n\nTreat this assignment as a chance to get up to speed on Git, GitHub, and Heroku. If you already know these, great. However, if you're new to them, spend several hours practicing, experimenting, and reading documentation. In other words, don't just get your website up and done. You will need skill with these tools throughout the rest of the course.\n\nAssignment details\n---\n\nDo the following to complete this assignment:\n\n1. Clone the [starting project code](http:\/\/github.com\/cs4241-16b\/gettingstarted). **DO NOT FORK THE REPO and DO NOT MAKE IT PUBLIC.** This repo contains:\n    * the server code, `server.js`\n    * the `Procfile` that you need for Heroku deployment\n    * A starting `index.html` file that you will edit as described below\n2. Edit `index.html` to show the following information about you:\n    * your name and class at WPI (e.g. class of 2020) Note: Do not put any contact or personal information that you do not potentially want other people outside of this class to see.\n    * your major(s) and minor(s)\n    * previous computer science courses that you have taken at WPI\n    * your experience with the following technologies and methods (none, some, a lot)\n        * HTML\n        * CSS\n        * Java\n        * JavaScript\n        * Ruby\n        * Python\n        * unit testing\n3. Test your project to make sure that when someone goes to your main page, it displays correctly.\n4. Deploy your project to Heroku.\n5. Ensure that your project has the proper naming scheme (guide follows) so we can find it.\n\nNaming and URL Scheme\n---\n\nYou must use a consistent naming scheme for all projects in this course.\nIf we can't find it, we can't grade it.\n\nBy default Heroku assigns your application a random name.\nTo change it, follow [this guide](https:\/\/devcenter.heroku.com\/articles\/renaming-apps).\n\nThe name scheme should be `yourGitHubUsername-cs4241-a1`.\nThe `a1` will need to be updated to `a2`, `a3`, and so on in future projects.\n\nResources\n---\n\nIf you need a JavaScript\/HTML\/CSS refresher, see [Technology Fundamentals by Scott Murray](http:\/\/chimera.labs.oreilly.com\/books\/1230000000345\/ch03.html#_html) and\/or [JavaScript Codeacademy](https:\/\/www.codecademy.com\/en\/tracks\/javascript).\n\nIf you need a Git\/GitHub refreseher, see [GitHub Bootcamp](https:\/\/help.github.com\/categories\/bootcamp\/), the [GitHub Guides](https:\/\/guides.github.com\/) (especially the ones on Hello World, and Understanding the GitHub Flow, and Forking Projects), and [CodeSchool's Try Git Course](https:\/\/www.codeschool.com\/courses\/try-git).",
    "keywords": [{
      "id": 0,
      "start":0,
      "length": 10,
      "bestLinkId": 0,
      "links": [
        {
          "id": 0,
          "type": 0,
          "title": "agent functions - Video",
          "link": "http://www.google.com",
          "contributor": {
            "email": "byliuyang11@gmail.com",
            "name": "Harry Liu",
            "school": "WPI",
            "classOfGraduation": 2018
          },
          "upvotes": 0,
          "downvotes": 0,
          "voted": false
        }]
    }
    ]
  },
  {
    "id": 1,
    "title": "A2",
    "course": "CS4241",
    "school": "WPI",
    "term": 0,
    "dueDate": "2016-12-21T03:24:00",
    "postedDate": "1995-11-10T03:24:00",
    "description": "This assignment introduces you to the basics of HTML and CSS, two fundamentals that compose a website. You will learn to use different HTML element, and style them up with CSS.",
    "body": "Do the following to complete this assignment:\r\n\r\n1. Clone the [starting project code](https:\/\/github.com\/cs4241-16b\/A2-TheBasics). **DO NOT FORK THE REPO and DO NOT MAKE IT PUBLIC.** This repo contains:\r\n    * the server code, `server.js`\r\n    * the `Procfile` that you need for Heroku deployment\r\n    * A starting `index.html` file that you will edit as described below\r\n    * A blank `style.css` file that you will use to style your own content\r\n2. Edit `index.html` to your liking, provided it contains:\r\n    * At least one of these:\r\n        * An [image](https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/HTML\/Element\/img)\r\n        * A [table](https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/HTML\/Element\/table)\r\n        * A [list](https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/HTML\/Element\/li)\r\n        * An [anchor](https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/HTML\/Element\/a)\r\n    * Proper structure: \r\n        * Using [div](https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/HTML\/Element\/div)\r\n        * Using [span](https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/HTML\/Element\/span)\r\n3. Edit `style.css` to meet these requirement:\r\n    * Use CSS Selectors:\r\n        * ID selectors\r\n        * Classes selectors \r\n        * Multiple classes on one tag\r\n    * Basic CSS \r\n        * [Positioning](https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/CSS\/position)\r\n        * [Font styling](https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/CSS\/font-style)\r\n    * CSS Pseudo Classes\r\n4. Use a decent [color scheme](https:\/\/color.adobe.com\/create\/color-wheel\/) to style your webpage\r\n5. Bonus if you make the page visually appealing, and\/or use different fonts \r\n3. Test your project on your local machine to make sure that when someone goes to your main page, it displays correctly.\r\n4. Deploy your project to Heroku.\r\n5. Ensure that your project has the proper naming scheme (`cs4241-a2-yourGitHubUsername`) so we can find it.\r\n\r\nResources\r\n---\r\n\r\nA good resource for general HTML\/CSS\/Javascript is the [Mozilla Developer Network](https:\/\/developer.mozilla.org\/en-US\/). This contains all the references you need for front-end design.\r\n\r\nA good resource for font would the the [Google Font](https:\/\/fonts.google.com\/) project, with hundreds of different fonts to choose from so that you don't have to stick with Comic Sans. Or Impact.\r\n\r\nIf you want icons, look into [Font Awesome](http:\/\/fontawesome.io\/).\r\n\r\nAdvanced Resources\r\n---\r\n*Note that none of these are required for a good assignment, but it's generally a good idea to master a couple of frameworks if you are interested in developing web application in a real environment. As always, you should master the basics first before moving on to other parts*\r\n\r\n[Bootstrap](http:\/\/getbootstrap.com\/) is a popular front-end framework for building responsive web pages and in general makes your life easier. \r\n\r\n[UIKit](https:\/\/getuikit.com\/) is another alternative to Bootstrap that you could look into. It is lighter than Bootstrap __and__ supports animation, if that's what you are into. \r\n\r\n[Sass](http:\/\/sass-lang.com\/) is an extension to CSS that makes maintaining\/writing CSS easier and more fun. You basically write in Sass, and the complier will output a CSS file to use in production.",
    "keywords": [{
      "id": 0,
      "start":0,
      "length": 10,
      "bestLinkId": 0,
      "links": [
        {
          "id": 0,
          "type": 0,
          "title": "agent functions - Video",
          "link": "http://www.google.com",
          "contributor": {
            "email": "byliuyang11@gmail.com",
            "name": "Harry Liu",
            "school": "WPI",
            "classOfGraduation": 2018
          },
          "upvotes": 0,
          "downvotes": 0,
          "voted": false
        }]
    }
    ]
  }
];
