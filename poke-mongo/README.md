# Poké-MongoDB

You are going to build a Pokémon API with Node, Express, and MongoDB. Your API will allow users to perform CRUD operations on each of the 151 original Pokémon, and power a front-end.

## Project Structure

The project contains 2 main directories

- `server`: for your server side
- `client`: for your client side _(will be generated in the following steps)_

## Get Started

## Requirements

In addition to your frequent commits, **make a commit after completing each of the following steps** (marked by check boxes), indicating that you have just completed it. It may not be the case that you have time to complete all of the following steps, but regardless, **you must work on them in order.**

- Back-end
- Front-end
- Middleware

### Back-end

> **Pro tip:** Install and use [Postman](https://www.getpostman.com/) to test your API routes for this section

Using the existing code provided in `server/`, follow the steps below to build out a Pokémon API:

|         URL          | HTTP Verb | Request Body |                                  Result                                  |
| :------------------: | :-------: | :----------: | :----------------------------------------------------------------------: |
|     /api/pokemon     |    GET    |    empty     |                        Return JSON of all Pokémon                        |
|     /api/pokemon     |   POST    |     JSON     |          Create new Pokémon and return JSON of created Pokémon           |
|     /api/pokemon     |  DELETE   |    empty     |         Delete all Pokémon in and return JSON of deleted Pokémon         |
| /api/pokemon/:number |    GET    |    empty     |           Return JSON of single Pokémon with matching `number`           |
| /api/pokemon/:number |    PUT    |     JSON     | Update Pokémon with matching `number` and return JSON of updated Pokémon |
| /api/pokemon/:number |  DELETE   |    empty     | Delete Pokémon with matching `number` and return JSON of deleted Pokémon |

- [ ] Connect Mongoose to your local Mongo database in `db/index.js`
- [ ] Create a Pokémon model in `resources/pokemon/Pokemon.js` and register it with Mongoose as the `Pokemon` collection with the following properties:
  - [ ] `number`, a unique number
  - [ ] `name`, a unique string
  - [ ] `types`, an array of strings
  - [ ] `imgUrl`, a string
- [ ] Populate your Mongo database with the 151 original Pokémon found in `data/pokemon.json`
- [ ] Create a controller in `resources/pokemon/pokemonController.js` that interacts with your Pokémon model
- [ ] Create a router in `resources/pokemon/pokemonRouter.js` that utilizes each of your controller's methods. Be sure to handle errors appropriately.
- [ ] Import `pokemon.router` into `server.js` and assign it to the correct route

### Front-end

Inside of `client/`, implement a single page front end to interact with this API using React.

Your front end should be served from Express and should allow the user to:

- [ ] Display all Pokémon (with their images)
- [ ] Add a new Pokémon
- [ ] Filter Pokémon based on their type
- [ ] Edit existing Pokémon
- [ ] Delete Pokémon

> **Instructions:** follow these instructions to have a well structured client application

- [ ] Run this command a brand new React App in a folder named `client`. Then navigate to it.

```
npx create-react-app client
cd client/
```

- [ ] Create a new folder called `components`
- [ ] Create the components that you'll need there:
  - PokemonList.js
  - PokemonDetails.js
  -
- [ ] Use [React Router](https://reactrouter.com/) to route and pass data between components
- [ ] Create a `.env` file for your [environment variables](https://stackoverflow.com/questions/42182577/is-it-possible-to-use-dotenv-in-a-react-project), like so:

```
REACT_APP_API_URL="http://localhost:8000/api"
```

### Middleware (bonus)

> **Important:** You must complete all of the steps in [back-end](#back-end) before moving onto this section.

Inside of `server/middleware/rateLimiter.js`, create a custom middleware function in which you implement rate limiting for your API with the following guidelines.

- [ ] Require each request to `/api/pokemon` to include a `User` property in the header
- [ ] Only allow a single user to make 100 requests per hour
- [ ] Mount your middleware in an appropriate location in `server/server.js`
- [ ] Update your front-end to send `user` property with each request

### Available Resources

You may visit each of these resources directly, or search for them on Google with the [`site:`](https://support.google.com/websearch/answer/2466433?hl=en) operator:

- [MDN](https://developer.mozilla.org/en-US/)
- [Stack Overflow](http://stackoverflow.com/)
- [Express docs](https://expressjs.com/)
- [Mongo docs](https://docs.mongodb.com/)
- [Mongoose docs](http://mongoosejs.com/docs/index.html)
- [React docs](https://facebook.github.io/react/docs/getting-started.html)
- [Angular docs](https://docs.angularjs.org/api)
- [Backbone docs](http://backbonejs.org/)
- [Webpack docs](https://webpack.github.io/docs/)
