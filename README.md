Instructions for the person taking the test:

## Fixing the current system

1. Review `demo.mov` to see how the system is supposed to behave
2. Get the system running to see how it currently looks
3. Decide if you want to work with ES6 classes and TypeScript or Ember classes and JavaScript: Extra credit for ES6 classes. If you want to work with JavaScript, check out the `convert-to-javascript` branch; otherwise stay on `master` for TypeScript.
4. There are many things wrong with the system. Please fix them to that the system acts like the demo.
5. Get tests running to see if they pass
6. Note that there is likely more work to do here than you have time for and you have multiple independent things wrong and can start wherever you like. The interviewer will likely stop you before you're finished in order to ask you other questions.

## Writing new features

1. Refactor the voting system. What would you do to make this look more beautiful and to make the code cleaner?
2. Make the form validate input: must have a name and a non-default color. Disable the submit button.
3. Add a mirage infrastructure and use Ember Data instead of an array.
4. Make it so the "reset" button on the form does not have the same styling as the submit button.
5. Look at the way ui-button was made and how it's customized. How would you improve on this design?

## Testing

1. Open up `create-color-test.ts`. Follow instructions there in whatever order you like. How would you make the application more easily testable? What kinds of tests have the most impact? Where would you spend your testing effort in this project first?
