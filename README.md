# Code name: Project Rooted

# description
This is a web application that allows users to use a terminal-style command-line user interface to load modules of courses and games

It is a simple application that guides users through the process like playing a MUD (Multi-User Dungeon)

But also like Codecademy.com in that short tests are always being gone through

The application uses Redux to manage the state of the application

And React to render the application

## Tech Stack 🛠️

- 📱 Expo Go for the application
- react native web
- 🌐 Redux.js for the state
- typescript
- React


## Development Process 🧑‍💻

- Develop a detailed plan for MVP, focusing on core mechanics and features of the system, including the CRGE, command line UI to be built and interactive tutorial 📈
- Create a flat file database schema and API endpoints that support the core gameplay mechanics and user interface features 
- Develop a command line UI that allows users to interact w/ the system world, use the CRGE, and engage w/ the various NPCs, as well as an interactive tutorial that teaches new users the mechanics of the system and  that looks like a command prompt or terminal, and handles user input using the TextInput component and is stylied using properties to make the TextInput look like a command prompt
- Test the MVP and gather feedback from users to identify areas that need improvement or additional features
- Refine and improve the game based on user feedback, adding new features as needed
- This project is a collaboration between ChatGPT and me

## MVP Plan 🎯

### User Stories 📖

* As a user, I want to be able to:
  1. select a module
  2. move my self around the system world using text-based commands 🚶
  3. interact w/ NPCs using text commands 🗣️
  4. see a list of available commands and their descriptions 📜
  5. see my user's status, including health and inventory 💪🎒
  6. engage in combat w/ NPCs using text commands ⚔️

### Tasks 📝

Implement User Stories

## roadmap

The next step is to adjust the user interface, user experience, and application flow

The interface will be a command-line, terminal, prompt style

There will be a series of questions and guidance and interactivity via user-typed commands that will feel very similar if not almost exactly the same as playing MUDs

### Further fleshing out

Eventually, the app will integrate solo TTRPG rules for gameplay and playing as a (solo)MUD

Probably CRGE Integration: The game should allow players to use the CRGE to generate events, NPCs, and other elements of the system world

Exploration and Interaction: Players should be able to navigate, interact w/ other NPCs, and perform various actions, such as completing quests, battling entities, and dealing w/ their unfinished business

Interactive Tutorial: The system should include a fun and interactive tutorial that teaches new users the mechanics of the system, including the CRGE and the command-line UI

#### Next

Afterwards, specific story campaigns and skill teaching will be implemented

Examples of skills to be taught would be new languages and that sort of thing, as well as new paradigms, mindsets, and traditions

The story campaigns will incorporate ritual and visionary "magic" with intention and catalyst-guided mediations played out as gameplay mechanics including Vision Questing, Defining(discovering) Intent and Catalyst, Initiating Transition, ritual Practices, tarot, pathworking, astral projection, divination, etc.

##### Backlog: Modules: Core Rules and PDF Reports

Addon modules will be developed for:

- World of Darkness: Dark Ages
- World of Darkness
- Chronicles of Darkness
- Consulting Accelerator
- Mind Movies
- Quareia
- Other mindset courses and TTRPG rulesets

Also, report generation of things like characters and adventure logs and mindset discovery.

## Purpose
one of the major purposes of this project is to create a modular JavaScript application architecture that is easily extensible, scalable, and maintainable

The architecture is designed to allow me to build scalable applications by breaking them down into smaller modules, each with its own set of actions, reducers, and components

This approach enables me to build applications in a way that is more modular, easier to test, and easier to maintain

Another major purpose is to play out some particular scenerios in a MUD style fasion

## Goals
The first tier of primary goals for this project are:
- To provide a modular architecture that is easy to use and extend
- To encourage code reusability/scalability and maintainability
- To enable me to build a scalable application by breaking it down into smaller, more manageable modules
- To make it easier for me to test my code

The next tier of goals for this project are:
- Create a text prompt style interactive navigation into various mystical simulations

## Target Audience
One target audience of this project could be JavaScript developers who are interested in building particular applications that are easy to maintain and extend, such as myself

designed for developers who want to learn about modular application architectures and rapid development practices for building large-scale applications

The project assumes a basic understanding of JavaScript, React, and Redux, but it is designed to be accessible to developers of all skill levels

another audience could be those interested in a unique way of discovering and unlocking veins of gold with in the cyber dimension
explicitly in learning languages, play rpgs, and going through courses

## Architecture

The project consists of the following files and directories

directory/file structure with the action types and reducers separated out into individual files
with only one * (action,reducer,component,etc) per file so that the files are really short

The project follows a modular architecture that separates the source code into distinct directories and files

This allows for scalability, organization, and maintainability of the codebase

Each file is responsible for a specific part of the application making it easy to understand and maintain

to handle selecting which module to start the app with a routing system is used

create a set of routes that correspond to each module in the modules/ directory

When the user navigates to one of these routes, the corresponding module will be loaded and displayed

the interface will be a command-line, terminal, prompt style and handles user input

there will be a series of questions and guidance and interactivity via user-typed commands that will feel very similar if not almost exactly the same as playing MUDs

the landing page terminal will start with the question "Which module would you like to select?"

initially the only module will be "sample"

## Directory Structure

directory structure and a brief explanation of each file

```
project-root/
  ├ README.md
  ├ favicon.ico
  ├ package.json
  ├ tsconfig.json
  ├ app.json
  ├ App.tsx
  ├ babel.config.js
  └ styles/
  │├ README.md
  │└ style.css
  └ assets/
  │├ icon.png
  │└ splash.png
  └ scripts/
    ├ README.md
    ├ store.tsx
    └ modules/
      ├ README.md
      └ sample-module/
        ├ components/
        │├ README.md
        │└ *.tsx
        └ reducers/
          │├ README.md
          │└ *.tsx
          └ actions/
            ├ README.md
            └ *.tsx
              └ actionTypes/
                ├ README.md
                └ *.tsx
```

- `root/`: A directory that contains the public files used by the web application
- `README.md`: Provides a brief overview of the project and links to documentation.
- `favicon.ico`: The icon file that appears in the browser tab.
- `package.json`: The file that contains information about the project, such as the name, version, dependencies, and scripts.
- `READMEs/`: A directory that contains documentation files for the project.
- `scripts/`: A directory that contains the scripts for the application.
- `modules/`: A directory that contains the modules for the application. Module types include language and mindset teaching courses and also MUD style games.
- `actions/`: A directory that contains the Redux action creators used by the application.
- `actionTypes/`: A directory that contains the constants used by the Redux actions.
- `reducers/`: A directory that contains the Redux reducers used by the application.
- `components/`: A directory that contains the React components used by the application.
- `styles/`: A directory that contains the CSS styles used by the application.

#### `App.tsx`
defines and renders the top-level React component
The "main" script file for the application

#### store.tsx

sets up and manages the Redux store

## Installation and setup
- You can clone the repository to your local machine by running `git clone https://github.com/seandinwiddie/project-root.git` in your terminal. This will create a copy of the project on your computer.

- Install Expo CLI globally on your machine by running `npm install -g expo-cli` in your terminal. This will allow you to use the Expo CLI command globally on your machine.

Create a new Expo project by running the following command in your terminal: `expo init project-root`
This will create a new project in a directory called my-app and install all necessary dependencies.

- Navigate to the project directory by running `cd project-root`. This will move you into the root directory of the project.

- Install the project dependencies by running `npm install` in your terminal. This will download and install the required packages and libraries for the project to function properly.


- Run the application by running `expo start` in your terminal. This will start the development server and launch the project in a web browser or simulator.

## Usage

Once you open the application, you will be taken through a step-by-step process to select a module

The application will guide you through selecting your user's ability scores

To use the application, follow the steps below

Follow the step-by-step process to create a user:

- Assign ability scores

Once you have completed all the steps, you will be able to view the details of your newly created user.