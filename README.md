# LAB - 06
# Deployment Test
## Author: Motasem Meqbel
### test report : https://github.com/motasemAlsqoor/basic-auth/actions

## Setup
### .env requirements
 ### PORT - Port Number :3030

## Running the app
### npm start
 end-point 
 /signin 
 response : 
 ```
 {
    "_id": "6069ef041dd7f92c1ee46d70",
    "username": "test26",
    "password": "$2b$10$KrrS2ETkprH3mcwtD1VDbun3ijUVVEOt3gUTJ2TcTeZ4ZMRBMcEC.",
    "__v": 0
}
```
/sigup
response :
```
{
    "_id": "606af79c763ac412729fd72a",
    "username": "test26",
    "password": "$2b$10$hlDqajmRZWsq6Yu3Kb/3N.vpJdELaFpfvmwQoNgGUtKIbh3.n6wlG",
    "__v": 0
}
```

## Tests

### Unit test : ```npm run test```


a REST API using Express and Mongo Db

![whitebord](https://github.com/motasemAlsqoor/basic-auth/blob/main/assest/basic-auth.png)

[deployed link](https://basic-auth-c6.herokuapp.com/)