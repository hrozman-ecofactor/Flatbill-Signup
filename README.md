# Overview  #
Puppeteer is just a NodeJS plugin.  So you will first need to install NodeJS on your system.


## Update NodeJS to Latest Version ##
```bash
$ node --version
$ npm install -global n
$ sudo n latest
$ node --version
```

## Installing Puppeteer ##
* https://developers.google.com/web/tools/puppeteer
* https://developers.google.com/web/tools/puppeteer/get-started
* https://github.com/GoogleChrome/puppeteer
* https://github.com/checkly/puppeteer-examples
* https://medium.com/@e_mad_ehsan/getting-started-with-puppeteer-and-chrome-headless-for-web-scrapping-6bf5979dee3e


### Add to your test project ###
This will an empty setup a project folder which will allow you to run the test script(s)*[]:

```bash
$ cd $DIR_PROJECT
$ npm init
$ npm i --save puppeteer
```

### Install Puppeteer via Yarn ###
NOTE: I didn't have to install it this way on my laptop (MacOS).
```bash
$ yarn add puppeteer
```


## Running Tests ##
```bash
$ node test_flat_rate_signup_pilot_prod.js
```

If successful, the app should terminate with no output and no errors.