'use strict';



const server = require('../src/server').server;
const supergoose = require('@code-fellows/supergoose');


const mockRequest = supergoose(server);

let users = {
  admin: { username: 'admin', password: 'password' },
  editor: { username: 'editor', password: 'password' },
  user: { username: 'user', password: 'password' },
};

describe('Auth Router', () => {

  Object.keys(users).forEach(userType => {

    describe(`${userType} users`, () => {

      it('can create one', async () => {

        const response = await mockRequest.post('/signup').send(users[userType]);
        
        const userObject = response.body;
        console.log('*****************************************************');
        console.log("response object",userObject)
        console.log('*****************************************************');


        expect(response.status).toBe(201);
        expect(userObject._id).toBeDefined();
        expect(userObject.username).toEqual(users[userType].username)

      });

      it('can signin with basic', async () => {

        const response = await mockRequest.post('/signin')
          .auth(users[userType].username, users[userType].password);

        const userObject = response.body;
        expect(response.status).toBe(200);
        expect(userObject._id).toBeDefined();
        expect(userObject.username).toEqual(users[userType].username)

      });

      

    });

    describe('bad logins', () => {
      it('basic fails with known user and wrong password ', async () => {

        const response = await mockRequest.post('/signin')
          .auth('admin', 'xyz')
        const userObject = response.body;
        expect(response.status).toBe(403);
        expect(userObject.user).not.toBeDefined();

      });

      it('basic fails with unknown user', async () => {

        const response = await mockRequest.post('/signin')
          .auth('nobody', 'xyz')
        const userObject = response.body;

        expect(response.status).toBe(403);
        expect(userObject.user).not.toBeDefined();

      });

     
    }); 

  });

});