# restapi



## Configuring Project : 

Install sails - framework on top of express & node 

$ sudo npm -g install sails

### Database 

Install dependencies : 

$ npm install sails-mysql



 * Modify connection.js inside config directory: 
	 ```
		  someMysqlServer: {
		    adapter: 'sails-mysql',
		    host: 'localhost',
		    user: 'database_username', //optional
		    password: 'database_password', //optional
		    database: 'database_name' //optional
		  },
	 ```

  * Modify models.js inside config directory : 
	  ```
	    connection: 'someMysqlServer',
	  ```


## RUN SERVER : 

	```
	$ sails lift
	```

* Now open POSTMAN and Fire Up APIs- GET,POST,PUT,DELETE on Doctor and Practice models.


## Create practice :
----------------

POST http://localhost:1337/practices
----

  Parameters to be passed : 
  ```
    { name: 'Fortis Hospital,
      address: 'Bannerghatta road',
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
    }
  ```
## Create Doctor :
----------------

POST http://localhost:1337/doctors
----

  Parameters to be passed : 
  ```
  {
    "name": "Abdul Qadir Faridi",
    "email": "aqfaridi@gmail.com",
    "gender": "male",
    "about": "Dentist",
  }
  ```

## Doctor updated his profile : practice in which he works
------------------------------

PUT http://localhost:1337/doctors/:id
---
  ```
  Parameters to be passed : 

  {
  	practices : '1'
  }
  ```


## Practice can assign doctor itself : 
------------------------------------

PUT http://localhost:1337/practices/:id
---
  ```
  Parameters to be passed : 

  {
  	doctors : '2'
  }
  ```


# Query APIs
------------

* To Get All doctors with paginations (max. 10 entries per page)

- GET http://localhost:1337/doctors/:pageid

Sample response:
  ```
  [
    {
      "name": "Abdul Qadir Faridi",
      "email": "aqfaridi@gmail.com",
      "gender": "male",
      "about": "Dentist",
      "id": 1,
      "createdAt": "2016-06-17T12:51:16.000Z",
      "updatedAt": "2016-06-17T12:51:16.000Z"
    },
    {
      "name": "Akash Mishra",
      "email": "akash@gmail.com",
      "gender": "male",
      "about": "Dentist",
      "id": 2,
      "createdAt": "2016-06-17T13:00:22.000Z",
      "updatedAt": "2016-06-17T13:00:22.000Z"
    },
    {
      "name": "Abdul",
      "email": "abdul@gmail.com",
      "gender": "male",
      "about": "Dentist",
      "id": 3,
      "createdAt": "2016-06-17T13:00:35.000Z",
      "updatedAt": "2016-06-17T13:00:35.000Z"
    }
  ]
  ```

* To Get All practices with paginations (max. 10 entries per page)

- GET http://localhost:1337/practices/:pageid

Sample response:
  ```
  [
    {
      "name": "Fortis Hospital",
      "address": "Bannerghatta Road",
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India",
      "id": 1,
      "createdAt": "2016-06-17T13:01:13.000Z",
      "updatedAt": "2016-06-17T13:02:03.000Z"
    },
    {
      "name": "Appollo Hospital",
      "address": "Bannerghatta Road",
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India",
      "id": 2,
      "createdAt": "2016-06-17T13:01:22.000Z",
      "updatedAt": "2016-06-17T13:02:32.000Z"
    }
  ]
  ```

* To Get the details  of doctor and get the details of all practices where doctor works

- GET http://localhost:1337/doctor/:id

Sample response: 
  ```
  {
    "practices": [
      {
        "name": "Fortis Hospital",
        "address": "Bannerghatta Road",
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India",
        "id": 1,
        "createdAt": "2016-06-17T13:01:13.000Z",
        "updatedAt": "2016-06-17T13:02:03.000Z"
      },
      {
        "name": "Appollo Hospital",
        "address": "Bannerghatta Road",
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India",
        "id": 2,
        "createdAt": "2016-06-17T13:01:22.000Z",
        "updatedAt": "2016-06-17T13:02:32.000Z"
      }
    ],
    "name": "Abdul Qadir Faridi",
    "email": "aqfaridi@gmail.com",
    "gender": "male",
    "about": "Dentist",
    "id": 1,
    "createdAt": "2016-06-17T12:51:16.000Z",
    "updatedAt": "2016-06-17T12:51:16.000Z"
  }
  ```

* To Get the details of practice  and get the details of all doctors who works

- GET http://localhost:1337/practice/:id


Sample response:

  ```
  {
    "doctors": [
      {
        "name": "Abdul Qadir Faridi",
        "email": "aqfaridi@gmail.com",
        "gender": "male",
        "about": "Dentist",
        "id": 1,
        "createdAt": "2016-06-17T12:51:16.000Z",
        "updatedAt": "2016-06-17T12:51:16.000Z"
      }
    ],
    "name": "Fortis Hospital",
    "address": "Bannerghatta Road",
    "city": "Bangalore",
    "state": "Karnataka",
    "country": "India",
    "id": 1,
    "createdAt": "2016-06-17T13:01:13.000Z",
    "updatedAt": "2016-06-17T13:02:03.000Z"
  }
  ```



