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

## ACCESSING DOM ELEMENTS

#### getElementById

- Access elements by their id property
- If not element found, returns `null`

#### getElementsByClassName

- Access elements by their class property
- if element(s) exist return HTMLCollection with elements
- if not, returns empty HTMLCollection
- Think HTMLCollection as a regular array.

### getElementsByTagName

- Access elements by their tag name
- if element(s) exist returns HTMLCollection with elements
- if not, returns empty HTMLCollection
- Think HTMLCollection as a regular array.

### querySelector()

- Universal way of accessing an element. Ex: id, class, tag, etc
- Returns single element(nodes)
- If it encouters multiple elements with same property, returns the first one

### querySelectorAll()

- Universal way of accessing an elements. Ex: id, class, tag, etc
- Returns NodeList of elements(nodes)
- If not found, retuns empty NodeList

## STYLING ELEMENTS

- Every node/element contains object called CSSStyleDeclaration that contains all CSS properties of that node/element.
- You can change those css values

## innerHTML

- Every DOM node has the innerHTML property.
- innerHTML has all the HTML and content of its children.
- It can be used to view or change the HTML of a node.
- You can also use `innerText` or `textContent` similarly
- We can also add html content using innerHTML.Ex: `articleEl.innerHTML = "<h2>Article Heading</h1>"`
