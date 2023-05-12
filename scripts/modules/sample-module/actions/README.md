#### `actions/`

This directory contains the Redux action creators used by the application. Action creators are functions that create actions, which are dispatched to the reducers to update the application state.

#### actions.js

This file exports actions.

This file exports action creators that are used to update the state of the application in response to user interactions. The actions are dispatched to Redux reducers, which update the store with the new state.

##### `updateCharacterName(name: string)`

This action creator updates the name of the character being created. It takes a string `name` as its argument and returns an action object with type `UPDATE_CHARACTER_NAME` and a payload of `name`.

##### `updateCharacterRace(race: string)`

This action creator updates the race of the character being created. It takes a string `race` as its argument and returns an action object with type `UPDATE_CHARACTER_RACE` and a payload of `race`.

##### `updateCharacterClass(classType: string)`

This action creator updates the class of the character being created. It takes a string `classType` as its argument and returns an action object with type `UPDATE_CHARACTER_CLASS` and a payload of `classType`.

##### `updateCharacterGender(gender: string)`

This action creator updates the gender of the character being created. It takes a string `gender` as its argument and returns an action object with type `UPDATE_CHARACTER_GENDER` and a payload of `gender`.

##### `updateAbilityScore(ability: string, value: number)`

This action creator updates the ability scores of the character being created. It takes a string `ability` and a number `value` as its arguments and returns an action object with type `UPDATE_ABILITY_SCORE` and a payload of `{ ability, value }`.

##### `updateStep(step: number)`

This action creator updates the current step in the character creation process. It takes a number `step` as its argument and returns an action object with type `UPDATE_STEP` and a payload of `step`.

Note: The above actions are used by the reducers in the `scripts/modules/[module-name]/reducers` directory to update the state of the application.