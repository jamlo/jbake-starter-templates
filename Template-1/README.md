# JBake, Bootsrap, Disqus, Google Analytics

This repository includes a ready-to-use [JBake] template that uses one of the [Start Bootstrap] themes, and includes [Google Analytics] + [Disqus] Free Commentting Service that you can add to your website.

## 1- Get JBake and the code:
  - Install [JBake]
  - Clone the Repository

## 2- Before Start:
  - In the Google Analytics template ``` ./templates/googleAnalytics.ftl ``` replace the ```{{YOUR GOOGLE ANALYTICS ID}}``` placeholder with your Google Analytics ID. If you are not sure what is that, visit the [Google Analytics] website and create an account.
  - In the Disqus template ``` ./templates/disqus.ftl ```, replace this string ```{{YOU NEED TO GET THIS FROM DISCUSS}}``` with the shortname that [Disqus] will provide you in your account.
  - Also, in every page you want to use Disquss, you will need to generate a unique ID that will tell Disquss what comment is for which page. For example, check the ```./content/blog.html``` page; at the top you will see ```disqus_identifier=109e8546-e2b4-4901-a873-41a877206120``` . You will need to generate a different id for each page you want to add Disquss to.
  - You can get a unique identifier by running this shell command: ```uuidgen```

## 3- Build and launch your website:
  - In the cloned repository folder, run this command ``` jbake && jbake -s ``` . This command will build the static website and put the html files in the the output folder (in the same directry). Then it will start a built-in server that will serve your contents locally.
  - In your browser, hit this URL : ``` http://localhost:8820 ``` . You will see the ready to use website.

### Version
0.1

License
----
MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does it's job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [JBake]: <http://jbake.org/>
   [Google Analytics]: <http://www.google.com/analytics/>
   [Disqus]: <https://disqus.com/>
   [Start Bootstrap]: <http://startbootstrap.com/template-categories/all/>
