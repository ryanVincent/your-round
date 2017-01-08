# Introduction

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The application can be viewed at [your-round.herokuapp.com](https://your-round.herokuapp.com).
To run locally execute the following:

```
npm install
cd ./your-round
npm start
```

As this is just a prototype I haven't relied on any frameworks for state management and instead have made use of ```setState``` within Container components. Also, I have only applied some minor styling to the prototype as I know the CEO will want to change the colors later.

# API

the api required to drive this prototype is as follows: 

## GET /api/bars

Returns a list of all bars. The response should be a JSON object of the following format: 

property|type|description|example
--------|----|-----------|-------
id|int|unique identifier|12
name|string|name of the bar|The Clansman
address|string|address of the bar|32, High Street, Silicon Valley
distance_to|int|distance to the bar from current location in miles (optional)|32

### example

```
[
  {
    "id": 1,
    "name": "Trudoo",
    "address": "64182 Arkansas Place",
    "distance_to": 73
  }, 
  ...
]
```

## GET /api/bars/:barId/products

Returns a list of all products for the bar with the specified ```:barId```. The response should be a JSON object the following format:

property|type|description|example
--------|----|-----------|-------
id|int|unique identifier|12
name|string|product's name|Coors light
desc|string|product's description|Damn that's a light tasting beer
imageUrl|url|url to the thumbnail associated with te product|https://www.image.com/beer.png
currentPrice|float(money)|the current price of the product| 9.99

### example

```
[
  {
    "id": 1,
    "name": "house wine",
    "desc": "some delicious house wine",
    "imageUrl": "https://www.ocado.com/productImages/236/236564011_0_640x640.jpg?identifier=dbf09c042f393cde1cb29fb32af39a5f",
    "currentPrice": 9.99
  },
  ...
]
```




