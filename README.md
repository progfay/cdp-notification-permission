# cdp-notification-permission

## Output

```js
[
  {
    "type": "string",
    "value": "Notification.permission"
  },
  {
    "type": "string",
    "value": "denied"
  }
]
[
  {
    "type": "string",
    "value": "query"
  },
  {
    "type": "object",
    "className": "PermissionStatus",
    "description": "PermissionStatus",
    "objectId": "-7003650536473411300.2.1",
    "preview": {
      "type": "object",
      "description": "PermissionStatus",
      "overflow": false,
      "properties": [
        {
          "name": "state",
          "type": "string",
          "value": "granted"
        },
        {
          "name": "onchange",
          "type": "object",
          "value": "null",
          "subtype": "null"
        }
      ]
    }
  }
]
[
  {
    "type": "string",
    "value": "request"
  },
  {
    "type": "string",
    "value": "granted"
  }
]
[
  {
    "type": "string",
    "value": "Notification.permission2"
  },
  {
    "type": "string",
    "value": "denied"
  }
]
```

## Usage

### with docker-compose

Run headless-chrome and Node.js at the same time:

```sh
docker-compose up --build
```

Run only headless-chrome in background:

```sh
docker-compose up -d chrome
```

Run Node.js with build before executing:

```sh
docker-compose up --build node
```

### with Local Environment

1. Run only headless-chrome in background
2. Execute built Javascript code

```sh
docker-compose up -d chrome
npm start
```
