#### `components/`

This directory contains the React components used by the application. Each component is a self-contained unit that can be reused across different parts of the application. The components are organized by their function, such as character creation, gender selection, class selection, etc.

#### character.js

This file exports a React component of the character creation form.

Contains the `Character` component of the form for creating a new character.

The file contains the definition of the `Character` component, which represents the DnD character being created.

The `Character` component is responsible for rendering a form that allows users to create a new DnD character

It includes several input fields for the user to input their character's name, race, class, gender, and ability scores

The form also includes a submit button that dispatches an action to the Redux store when clicked.

The `Character` component makes use of other components, including `Gender`, `Class`, `Race`, and `Stats`, to render the various input fields for the user

These components are imported and used within the `render` function of the `Character` component.

The `Character` component also includes methods for handling form submissions and updating the component state when the user inputs data into the form

The state of the `Character` component is used to update the Redux store when the user submits the form.

#### other component files

The `step.js` file contains the definition of the `Step` component, which represents a step in the character creation process.

- gender.js: This file exports a React component that renders the gender selection form.

- class.js: This file exports a React component that renders the class selection form.

- race.js: This file exports a React component that renders the race selection form.

- stats.js: This file exports a React component that renders the ability scores form.