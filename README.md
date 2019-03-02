# Simple Node.js status page

Simple status page created to learn a bit of a web development. It's a learning project in the making, considering it's my first time with the JavaScript & Node.js I will be honestly surprised if it turns out usable.

## Planned features

### Status page

- Status page with customizable title & description
- Site wide custom information message
- List of websites and their statuses
  - Website name and description
  - Ping based OK/Outage status
  - Admin enabled maintenance mode
  - Time since maintenance/outage started
  - Custom information message
 - List of past incidents
  - Type of incident
  - Affected site
  - Time of incident
  - How long it lasted

### Admin panel

- Ability to login and logout of the panel
- First time admin user setup
- Ability to manage site configuration: name, description, url, global information message
- Ability to manage websites
  - Add new websites
  - Delete existing websites
  - Edit website data: name, description, URL, information message, maintenance mode.
  - Delete previous incidents

## Used technologies

JavaScript, Node.js, Express.js, MangoDB, Mangoose, Bootstrap, jQuery, EJS Templates, Passport.js

## Mock-ups

<img src="https://user-images.githubusercontent.com/1345297/53684220-18b59a00-3d0b-11e9-8112-88c085c4d518.png" alt="screenshot" width="256"/> <img src="https://user-images.githubusercontent.com/1345297/53684226-21a66b80-3d0b-11e9-9ba1-944555d7ed35.png" alt="screenshot" width="256"/> <img src="https://user-images.githubusercontent.com/1345297/53684222-18b59a00-3d0b-11e9-979a-6eba4f03cb7b.png" alt="screenshot" width="256"/> <img src="https://user-images.githubusercontent.com/1345297/53684223-194e3080-3d0b-11e9-9222-600912c37ec1.png" alt="screenshot" width="256"/>

## Todo

- [x] Project setup
- [x] Basic models, controllers and routes
- [x] Layout mock-ups
- [ ] Connect with real data
- [ ] Display real data on main page
- [ ] Handle login, register, logout and authorization
- [ ] Display real data on admin page
- [ ] Handle global configuration admin actions
- [ ] Display real data on website page
- [ ] Handle website admin actions

## Further development

- Proper configuration file
- Proper installation script
- Ability to use ping, curl with grep or nc to monitor websites
- Granular configuration of timeouts and retries
- Ability to manage admin users
- Twitter integration


