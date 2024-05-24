# Strong Password Validation

In this repo we want to talk about validating Password before sending it to database, so it reduces the possibility of getting leaked user's password.

## Simplest stucture of a good password

at leastt a good password must have :

- at least 8 characters
- lower case
- upper case
- digits
- some special character

## Installation

nothing needed, just open index.html locally on your brower.
only the logic matters so there is no libraries or packages to install and only pure JavaScript will be important.

### validating conditions

Regex will make it easy
if you don't know about it I recommand this article below:
https://www.programiz.com/javascript/regex

#### defining a phrase:

```JavaScript
const patternUpper = /[A-Z]/g;
```

#### using .match() to compare input value with patternUpper:

##### html

```html
<input id="pass" name="password" type="password" />
```

##### Javascript

```JavaScript
const pass = document.getElementById("pass");

form.onsubmit = (e) => {
  e.preventDefault();

  if (pass.value.match(patternUpper)) {
    location.reload();
  }
}
```

## &nbsp;

That's it other things are just about styling and details.
