# forum-front

## Prerequisites
Create a new file called ***api-config.js*** into src/api/ folder, and add following code into it:

Remember to tweak the properties for your needs.
```javascript
"use strict";

export default {
    url: "http://localhost:8081",
}
```

## Yarn commands
| Command        |                                  Meaning |
|:---------------|-----------------------------------------:|
| `yarn install` |                            Project setup |
| `yarn serve`   |   Compile and hot-reload for development |
| `yarn build`   |     Compiles and minifies for production |
| `yarn lint`    |                       Lint and fix files |
