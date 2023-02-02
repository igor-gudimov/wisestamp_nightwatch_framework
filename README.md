# wisestamp_nightwatch_framework

1. All test cases for application can be found in "wisestamp_testcases.txt"
2. Run command "npm install" to install all libs from "package.json"
3. Run command "npx nightwatch" to run all tests with UI
4. Run command "npx nightwatch --env chrome_headless" to run all tests in headless mode
5. If you want to generate built-in Allure report, please install 'java' and 'allure' on your computer 
and run command "allure generate ./allure-results --clean && allure open", add this settings if server don't start '--host localhost --port 9999'