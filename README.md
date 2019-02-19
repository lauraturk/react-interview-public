Instructions for the person taking the test:

## Fixing the current system

1. You can do this exercise in one of three flavors: Ember Octane, Classic Ember, or React. Decide which you want to work with. Depending on your choice, you'll use one of three different directories:

- Ember Octane: `ember-colorpalette-es6`
- Ember Classic: `ember-colorpalette-classic`
- React: `colorpalette-react`

1. Make sure you have checked out the `master` branch and that there are no outstanding changes. If you are interviewing for the _senior_ javascript role, you should check out the `advanced-troubleshooting` branch.
1. Review `demo.mov` in the proper subdirectory to see how the system is supposed to behave.
1. Install dependencies and start the development server and see how the system _currently_ behaves.
1. Run the automated tests. Do they pass?
1. There are many things wrong with the system as compared to the demo. Please fix them.

> **Note:** there is likely more work to do here than you have time for and you have multiple independent things wrong and can start wherever you like. The interviewer will likely stop you before you're finished in order to ask you other questions.

## Writing new features

- Add a new feature to the system. Here are some choices for what you can do. These challenges go from less-difficult to more-difficult.
- Pick a challenge that you feel comfortable getting done in the time you have left.
- Make sure you write a test for whatever feature you add. For extra-credit, write the test first.

Feature choices

1. Make the form validate input: must have a name and a non-default color. Disable the submit button.
1. Make it so the "reset" button on the form does not have the same styling as the submit button.
1. Refactor the voting system. What would you do to make this look more beautiful and to make the code cleaner?
1. Add a mirage infrastructure and use Ember Data instead of an array.
