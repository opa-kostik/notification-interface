# Notifications

##Installation

1. This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.

2. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

3. Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

##Description

This app demonstarates output of JSON file stored as local assets and further async update from another file of the same structure.
Data itself represents user notifications and comes in the following format:

```json
{
    "invites": [{
        "invite_id": 1,
        "sender_id": "jeff",
        "sig_id": 25121,
        "invite": "some text",
        "vector": "Internal",
        "invite_time": 1398892261,
        "status": "read"
    },
    ...
    ]
}
```
Here is a screenshot of the app:

[screen]: ./src/assets/screen.PNG "Initial screen"

##Features

1. Displayed data can be updated in two ways:
    
    * Automatically - after 10 seconds, 
    * Manually - by pressing 'Update' button.

2. There is an additional option to filter notifications:
    
    * ALL - display all messages,
    * NEW - display messages with status other than 'read'. 