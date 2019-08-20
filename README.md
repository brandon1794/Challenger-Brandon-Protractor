# Challenge-Brandon-Protractor

Some basic commands are:

```
npm install
webdriver-manager update
webdriver-manager start
cd to project and run protractor conf.js
```

# Note:
I created the necessary files to test the specific page with required information, I got the point of what’s required,
in order to test the page, but I’m not being able to make this work since Protractor right now it’s giving me an issue with
chrome latest version, so I believe this won’t work, but at least I feel that I’m in the right path to test this.

I spent around 2 hours, for Configuration and trying to see what was the best way to handle this, also doing some research
with Jest and Puppeteer and a way to handle this using Page Object Pattern

There are many ways to make this better than it is.
For example:

1. I would create a Folder to handle the selectors of every button, field, text and make the ones repeated a default one.
2. Then I would create a Folder to call those methods on the specific pages that required them.
3. I would create 1 spec file with 2 describe() blocks, just to handle HomePage and SearchPage
4. I would create 1 config file that will manage configurations required to make this run and 1 file that handles environment, url
