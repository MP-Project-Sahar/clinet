<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/MP-Project-Sahar/server">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Rental website</h3>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />

  <p align="center">
    Clinet side Rental website built with Node.js, React, and Redux.
    <br />
    <a href="https://github.com/MP-Project-Sahar/server"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com">Demo</a>
    ·
    <a href="https://trello.com/b/79ifE5eG/mp-project-sahar">Trello</a>
    ·
    <a href="https://github.com">Slides</a>
    ·
    <a href="https://github.com/MP-Project-Sahar/server">Server</a>
  </p>
</div>

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy) 

<details>
  <summary>📝 Table of Contents</summary>
    <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#user-stories">User Stories</a></li>
    <li><a href="#uml-diagram">UML Diagram</a></li>
    <li><a href="#wireframes">Wireframes</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#react-router-routes">React Router Routes</a></li>
    <li><a href="#components">Components</a></li>
   </ul>
</details>



## About

### 🎯 Features


## User Stories 
- As a user, I can register for the website by entering my username, phone number and password

- As a user, I will receive a confirmation SMS once I have registered for the website

- As a user, I am required to enter a strong password when creating my account

- Acceptance criteria:
  - Must have at least 8 characters
  - Must contain at least 1 digit
  - Must contain at least 1 uppercase letter
  - Must contain at least 1 lowercase letter
  - Must contain at least 1 symbol

- As a user, I am required to enter a valid phone format when creating my account

- As a user, I can log into the website by entering my username or phone number and password

- As a user, I can reset my password if I have forgotten my password

- As a user, I can logout from the platform so no one else can use it

- As a user, I can view my profile and others profile

- As a user, I can change my password. I will receive a confirmation email to my email

- As a user, I can add my email. I will receive a confirmation email to my email

- As a user, I can view my ads and ratings

- As a user, I can add ads.

- Acceptance criteria:
  - Must have select type of ads.
  - Must have description
  - Must have available time
  - Must have image

- As a user, I can delete, edit my ads.

- As a user, I can rating and review a user who I rent from

- As a user, I can rating and review a user who I rent from me

- As a user, I can search for ads. by city and type

- As a user, I can chatting another user

- As an admin,  I can confirm, delete, edit, create users

- As an admin,  I can delete, edit ads.

- As an admin,  I can delete, edit rating

## UML Diagram
<img src="https://user-images.githubusercontent.com/92248067/146735595-64384873-0629-4f97-b8de-d8eb697ac615.jpg" width="500">

## Wireframes
[Wireframes](https://www.figma.com/file/9IZzMQcxoVd3SswUagdl0o/Untitled?node-id=0%3A1)

## Getting started
### Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)

First clone this repository.
```bash
$ git clone <project_name>
```

Install dependencies. [`npm`](https://www.npmjs.com/) installed in your system.
```bash
cd <project_name>
$ npm install
```

Run it
```bash
$ npm start
```

## Project Structure

## React Router Routes
| Path              | Component            | Permissions                | Behavior                                                     |
| ----------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`               | Home                 | anyone                     | Home page                                                    |
| `/items/:section` | items                | anyone                     | Show items in one type                                       |
| `/Item`           | Item                 | anyone                     | Show one itme                                                |
| `/Signup`         | Signup               | anyone                     | Signup form, link to posts if user or to dashboard if admin  |
| `/Login`          | Signin               | anyone                     | Signin form, link to posts if user or to dashboard if admin  |
| `/LoginGoogle`    | SigninGoogle         | anyone have google account | Signin form, link to post                                    |
| `/ForgotPassword` | ForgotPassword       | anyone                     | Forgot password form, user enter an email                    |
| `/ResetPassword`  | ResetPassword        | user who received an email | Reset password form, user enter a new password               |
| `/ActivateAccount`| ActivateAccount      | user who received an email | Activate user account                                        |
| `/Dashboard`      | Dashboard            | admin only                 | Shows all users                                              |
| `/ListItem`       | ListItem             | user                       | User's add ads.                                              |
| `/Profile`        | Profile              | user and admin             | User edit profile and show items                             |
| `/Inbox`          | Inbox                | user                       | Inbox messages                                               |
| `/Chat`           | Chat                 | user                       | User send message                                            |
| `/Rentals`        | Rentals              | user                       | The items you've rented from other                           |
| `/Favourites`     | Favourites           | user                       | The items and owners you favourite                           |
| `/UserProfile`    | UserProfile          | user and admin             | User show a user show rental shop, reviews                   |
| `/HowItWorks`     | HowItWorks           | anyone                     | How to rent on website                                       |


## Components
- NavBar
- Home
- items
- Signup
- Signin
- SigninGoogle
- ForgotPassword
- ResetPassword
- ActivateAccount
- Dashboard
- ListItem
- Profile
- Inbox
- Chat
- Rentals
- Favourites
- UserProfile
- HowItWorks
- Footer

<p align="right"><a href="#top">back to top</a></p>

