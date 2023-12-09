## Environments

1. Client env -> window is an object
2. Server env -> window is not available

You can check your environment using `typeof window`

## Userful window methods

- `alert` - Alerts a message. Returns `undefined`.
- `prompt` - Ask user some information. Returns either value, null or empty string
- `confirm` - Confirm something with user. Returns boolean, either true or false
- `innerHeight` - Returns inner height of the screen
- `innerWidth` - Returns inner width of the screen
- `scrollTo(x,y)` - Scrolls to a particular set of coordinates in the document

**Shortcut** is to use just `alert, prompt` etc without `window`
Ex: `alert('Message'), prompt('question')`
