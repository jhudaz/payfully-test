# Juan Sebastian Velez Posada
### Payfully Test React+Redux
Create an application using create-react-app that will use the Spotify Web API with 3 different
routes,
* the first one should display the user authentication to gain access there and be able to
perform queries.
* The Second view should allow the user to search music in Spotify using the search endpoint.
* The third view should allow the user to view the current track being played with the
authenticated user account.

# webpack-express-boilerplate
boilerplate taken from [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate) to get started with Webpack workflow in Node express and gain time in setup and hot reloading.

## Install and Running
`git clone https://github.com/jvelezpo/payfully-test.git`

1. cd payfully-test
2. npm install
3. npm start
4. navigate to http://localhost:3000/login



### Workflow

#### Login
Login screen, Here the user has the option to login with its spotify account

![alt](https://raw.githubusercontent.com/jvelezpo/payfully-test/master/resources/images/login.png)


#### Search
After the user finish the process of login with spotify, he or she will be redirected to Search screen where they can type anythin and an automatic search will be perform on spotify catalog, showin the user with a list of 10 songs relevant to its search

![Search](https://raw.githubusercontent.com/jvelezpo/payfully-test/master/resources/images/search-empty.png)

This is how it works when the user types something in the search input

![Search](https://raw.githubusercontent.com/jvelezpo/payfully-test/master/resources/images/search.png)

#### Current Track
View that allow to see a song that was played last or is currently playing on spotify

![Current](https://raw.githubusercontent.com/jvelezpo/payfully-test/master/resources/images/current.png)

