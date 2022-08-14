## React Dashboard — "[isomorphic](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)" admin dashboard template
built with [React](https://facebook.github.io/react/), [Bootstrap](http://getbootstrap.com/), [React Router](https://reacttraining.com/react-router/),
[Redux](http://redux.js.org/) and [GraphQL](http://graphql.org/) based on
[Create React App](https://github.com/facebook/create-react-app) and latest industry best practices.

[![react-dashboard](screenshot.png)](https://flatlogic.com/admin-dashboards/react-dashboard/demo)

This seed project is a sort of a free version of a template that may be found on
[Themeforest](https://themeforest.net/category/site-templates/admin-templates)
or [Wrapbootstrap](https://wrapbootstrap.com/themes/admin) with working backend integration.
You may use it to bootstrap the development of your next web app.


## Features
* React
* Mobile friendly layout (responsive)
* React Router
* Bootstrap3
* GraphQL
* Nodejs backend inegration
* Sass styles
* Stylish, clean, responsive layout
* Lots of utility css classes for rapid development (flatlogic css set)
* Authentication
* CRUD operations examples

## Quick Start

#### 1. Get the latest version

You can start by cloning the latest version of React Dashboard on your
local machine by running:

```shell
$ git clone https://github.com/ITopGun/React-Dashboard.git
$ cd MyApp
```

#### 2. Run `yarn install`

This will install both run-time project dependencies and developer tools listed
in [package.json](../package.json) file.

#### 3. Run `yarn dev`

This command will start the app with simultaneously with express server,
set up your database, start local server XAMPP, opensever, or other tool
to start database, connect to it in file 
```shell
src > data > sequelize.js.
```
Also go to  
```shell
src > data > schema.js 
```
and enable mutation. This preparation
will enable to realize CRUD operations locally

### 4. How to create db

Create db. For instance name it "sequelize" and add posts table to it,
your table should have same structure as you can see on the screenshot
<br>
![table structure](table.png)

> [http://localhost:3000/](http://localhost:3000/) — Node.js server<br>
> [http://localhost:3000/graphql](http://localhost:3000/graphql) — GraphQL server and IDE<br>

Now you can open your web app in a browser, on mobile devices and start
hacking. Whenever you modify any of the source files inside the `/src` folder,
the module bundler ([Webpack](http://webpack.github.io/)) will recompile the
app on the fly and refresh all the connected browsers.

For more info please refer to [getting started](./docs/getting-started.md) guide to download and run the project (Node.js >= 6.5)

## How can I support developers?
- Star our GitHub repo :star:
- Create pull requests, submit bugs, suggest new features or documentation updates :wrench:
- Follow [@ITopGun on Github](https://github.com/ITopGun).

## More from ITopGun
- [✔️ React Material Admin](https://github.com/ITopGun/React-MUI-Admin) - React Material Admin — Material-UI Dashboard
- [🚀 React Native Starter](https://github.com/ITopGun/React-Native-Starter) - A powerful react native starter template that bootstraps development of your mobile application
- [💦 B2B applications Dashboard](https://github.com/ITopGun/B2BAdmin-React.git) - A frontend Framework for building B2B applications running in the browser on top of REST/GraphQL APIs, using ES6, React and Material Design
- [❤️ Saleor Commerce](https://github.com/ITopGun/Saleore-combyPGDR.git) - A modular, high performance, headless e-commerce platform built with Python, GraphQL, Django, and React.
- [💥 Ant Design](https://github.com/ITopGun/ant-design.git) - An enterprise-class UI design language and React UI library.
