# NBA Players Node Server API

This is an API for Creating, Reading, Updating, and Deleting
'Players / NBA Players' using Node and Express.


## Install

    npm install

## Run the app

    npm start


# Endpoints

The Endpoints for CRUD is described below.

## Return all players

### Request
    GET /players

#### Response

```json
[
    {
        "id":"4312b117-2a4d-4059-b341-70b0ada893bb",
        "firstname":"Steph",
        "lastname":"Curry",
        "age":32
    },

    {
        "id":"b09c9b37-ac30-488d-b79c-e8c9deaa3678",
        "firstname":"Lebron",
        "lastname":"James",
        "age":38
    }
]
```

## Return specific player

### Request
    GET /players/:id

#### Response

```json
{
    "id":"4312b117-2a4d-4059-b341-70b0ada893bb",
    "firstname":"Steph",
    "lastname":"Curry",
    "age":32
}
```

## Create new player

### Request
    Post /players

```json
{
    "firstname":"James",
    "lastname":"Harden",
    "age": 31
}
```
    
#### Response

```json
{
    "firstname":"James",
    "lastname":"Harden",
    "age": 31
}
```

## Update Player

### Request
    Put /players/:id

```json
{
    "age": 32,
    "team": "Rockets"
}
```
    
#### Response

```json
{
    "firstname":"James",
    "lastname":"Harden",
    "age": 32,
    "team": "Rockets"
}
```

## Delete Player

### Request
    Delete /players/:id

    
#### Response

`[Player first name] [Player last name]` has been deleted.

