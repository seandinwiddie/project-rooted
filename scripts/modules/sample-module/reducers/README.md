#### `reducers/`

This directory contains the Redux reducers used by the application. Each reducer is responsible for updating a specific part of the application state in response to an action.

#### `reducers.js`

This file exports the main reducer function that combines all of the individual reducers into a single reducer for the application

The individual reducers are defined in separate files in this directory and imported into `reducers.js`

Contains the Redux reducers for updating the character's name, race, and class.

This file exports a reducer function that updates the state of the application in response to dispatched actions.

#### `characterReducer.js`

This file exports a reducer function that handles actions related to the character in the application. This includes updating the character's name, race, and class. The initial state of the character is defined in this file.

#### `inventoryReducer.js`

This file exports a reducer function that handles actions related to the character's inventory in the application. This includes adding or removing items from the inventory.

#### `locationReducer.js`

This file exports a reducer function that handles actions related to the character's location in the application. This includes updating the current location of the character.

#### `questReducer.js`

This file exports a reducer function that handles actions related to the character's quests in the application. This includes adding or removing quests from the character's quest log.

By providing more detailed information on each individual reducer, it becomes easier to remember how to understand how the state of the application is being managed and updated in response to user interactions. It also makes it easier for developers like me to add new features or modify existing ones without having to dig through complex code.