# calculator-test
This is a simple client side calculator, used for practicing testing client side javascript (with mocha, chai, sinon, karma, grunt).


## Usage
### To run mocha test via browser
* run: python -m SimpleHTTPServer  (from project root directory)
* in browser, go to http://localhost:8000/test
* NOTE: if you open index.html as a file, blanket mocha will not load the source file successfully, and the coverage statics will be NaN
    - see note below (use disable-web-security option)


### Notes
* to run Chrome from cli, type:
    - open -a Google\ Chrome --args --disable-web-security file:///Users/smarsh/Dropbox/dev/practice/node/calculator-test/test/index.html
    - the disable-web-security argument disables checking for cross source types (ie get something once from http, then get a file)
        + use this argument from command line, lets Blanket work correctly (else it'd get an error and not show coverage counts)
* Currently do not have karma test working with Chrome (chrome launcher plugin can not find Chrome app -will investigate)
