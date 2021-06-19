
Below is our feedback for your interview submission:

Code Review - 4/5

Code review is an important, but difficult skill. It's often harder to understand someone else's code than to write one's own, and providing valuable feedback is a skill that takes time to learn. We suggest reading this guide to code reviews which provides some insights into how to be a good code reviewer.

We used this guide when looking over the submissions, as a guide to helping us score them. The pull request you reviewed had at least two bugs in it.

You did a good job summarizing the changes in general and from a user’s perspective, and going through with specific explanations to show your understanding of the code changes. You asked a good question about the default date values. The purpose for the wide date span is because if the fields are left empty, we want to make sure to clearly include all of the results without filtering by date. These values are not displayed in the UI at any point. You brought up some good, but general, points about styling tools, code style, and process/PR size. There were a couple of issues and bugs in the code that you did not catch. Also, code reviews are an opportunity for someone unfamiliar with the codebase to ask questions with the goal of learning and gaining more context. I would expect someone new to the codebase to ask questions about some of the things that require context of the existing system, such as "why are things being redacted?" "what are tags?"

Coding Project - 3/5

Your form page looks great and is user-friendly. 

[x] Your validation mostly works according to the specifications, except your date input is required when it should be able to be left empty. 
- adjusted Yup validation to make date optional
- solution was to make date nullible and then add a conditional in the validation helper which would allow the empty input (empty string) to pass null to the formValues

[x] Your clear button mostly works, except it does not clear out validation errors or the "agree to be contacted" radio button. 
- window.location.reload();
- Add this to the handleClear()

Your form submits the correct data in the correct format. Nice job! 

A few minor nit-picks: 

[x] Your validation errors appear very early while the user is still filling out the form, which is a strange experience for the user. One idea is to wait for an input to be blurred before displaying validation errors. 
- move validation to the handleSubmit helper function from the handleChange helper


[x] The validation error for the date says “this must be a `date` type, but the final value was: `Invalid Date` (cast from the value `””`).” It would be nice to use a simpler error message rather than the raw error given to you by your validation tool. 
- changed Name validation error to more basic message  "username must be at least 2 characters long"
- changed Date validation error to more basic message
"this must be a valid date"


[x] The label for your radio button is not semantically linked to the radio button. You can do this by wrapping it in a <label> tag or by using the `htmlFor` attribute. This makes it easier to use the form because you can click the label to select the radio button.
- implemented <label> and `htmlFor` attribute on radio button