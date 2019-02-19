# General directions for the interviewer

## Preparation

Review the github history of the `master` branch (and the `advanced-troubleshooting` branch if this is a senior candidate). Examine each commit with a 💥 in it. Each of these commits represents a breaking change that was done which is intended to challenge the person being interviewed. There are CSS problems, JavaScript logic problems, eventing problems, ember-specific problems, and a small build problem.

Note that more difficult problems are introduced in the `advanced-troubleshooting` branch, so if this candidate is interviewing for the senior position, you should use that branch, which has a couple additional breaking changes.

Make sure you understand why each commit breaks the system and how to fix it. Spend a little time thinking of ways to coach the candidate on how to find the bug if they don't immediately figure it out. The goal is not to have the candidate get stuck on one hard problem for a long time; the goal is to get a good assessment of the candidate's skills across a large breadth of the Ember ecosystem.

This system provides both an Ember Octane implementation and a Classic Ember implementation. If you are not familiar with one of those systems, do not offer that as a choice to the candidate. Only test them using code that you yourself are familiar with.

Also note that this system is using `ember-component-css` which results in styles being in weird places. Make sure you're familiar with this system so you can guide the candidate to the correct locations to make style-changes if need be.

## Administering the test

Show the candidate the `README.md` file and make sure they read through all the instructions and understand them before they start hacking on code.

Make sure that the candidate does not look at the git history for this repository, as that will reveal the answers to the challenges. The history is for you and not for the candidate.

You're going to want to watch the clock on this thing, because it's highly unlikely that the candidate will get through all the troubleshooting work at the beginning. You should dedicate about half your time to the troubleshooting phase. Make sure the candidate understands that it's perfectly okay that they not get through the entire troubleshooting exercise in one shot, and when the time is up move on to the `Writing new features` section of the test.

As for the _Writing new features_ part of the test, there is a menu of about four things they could do that are all independent of each other. Ask the candidate to choose one and let them run with it. If they run into roadblocks, you could either coach them through it or you could invite them to try a different area of improvement. Again, time is important here. Make sure the candidate has time to write tests for the feature they're producing.

## Rubric for evaluation

### Basic Ember/JS/CSS/HTML knowledge

- CSS:

  - **Good**: Able to get the system to get within 10% (roughly) of the demo
  - **Great**: Able to get the system to look 100% like the demo (including fonts – demo uses "Roboto")
  - **Extra** **credit**: able to clean up the styles and make them more efficient.

- Eventing:

  - **Good**: Able to explain why `preventDefault()` submits the form and reloads the page without help

- Wiring components:

  - **Good**: Able to figure out how to make the delete button work without assistance

- Basic JavaScript
  - **Good**: Able to understand how to break a CSS color up into its component parts and parse them into integers
  - **Great**: Able to explain color theory and discuss why some colors are "brighter" than others

### Advanced Ember knowledge

- Pre-wiring contextual components

  - **Good**: Able to discuss the value of contextual components and how and why they are used
  - **Great**: Able to discover the bug that the submit button was not pre-wired with the `onClick` action.

- Observability:

  - **Good**: Able to explain why `A` is used in `routes/index.ts` instead of an `Array` object
  - **Great**: Able to figure out on their own that the `Array` object should be replaced with an `A` object

- Familiarity with Ember Octane
  - **Good**: no familiarity with Ember Octane
  - **Great**: able and willing and proficient in the use of either TS/ES6 or classic Ember/JS
