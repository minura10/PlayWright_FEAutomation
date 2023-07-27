import { test, expect } from '@playwright/test';

let token: string;
let userId: string;

// Function to make a POST request and return the response JSON
async function makePostRequest(url: string, requestBody: any, headers?: Record<string, string>) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(requestBody),
  });
  return response.json();
}


// Function to make a DELETE request and return the response JSON
async function makeDeleteRequest(url: string, requestBody: any, headers?: Record<string, string>) {
  const response = await fetch(url, {
    method: 'Delete',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(requestBody),
  });
  return response.json();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const username = 'testUserMinu989'
const password = 'Test@123'

test('TC 01 API Test - Create User', async ({request}) => {
  const createUserUrl = 'https://demoqa.com/Account/v1/User';
  const createUserRequestBody = {
    userName: username,
    password: password,
  };

  const createUserResponse = await makePostRequest(createUserUrl, createUserRequestBody);

  // Log the POST request output to the terminal
  console.log('Create User Response:', createUserResponse);

  userId = createUserResponse.userID;

  // Assertions
  expect(createUserResponse).toHaveProperty('userID');
  expect(createUserResponse.userID).toBeTruthy();
});

test('TC 02 API Test - Generate Bearer Token', async ({}) => {
  const generateTokenUrl = 'https://demoqa.com/Account/v1/GenerateToken';
  const generateTokenRequestBody = {
    userName: username,
    password: password,
  };

  const generateTokenResponse = await makePostRequest(generateTokenUrl, generateTokenRequestBody);

  // Log the POST request output to the terminal
  console.log('Generate Bearer Token:', generateTokenResponse);

  // Save the Bearer token to be used in later tests
  token = generateTokenResponse.token;

  expect(generateTokenResponse).toHaveProperty('token');
  expect(generateTokenResponse.token).toBeTruthy();
});

test('TC 03 API Test - Create Books with Bearer Token and UserId', async ({}) => {
  const createBooksUrl = 'https://demoqa.com/BookStore/v1/Books';

  const requestBody = {
    userId: `${userId}`,
    collectionOfIsbns: [
      {
        isbn: '673403434',
      },
      {
        isbn: '895435535',
      },
    ],
  };

  // Make sure to replace $token with the actual token received from the previous test
  const createBooksResponse = await makePostRequest(createBooksUrl, requestBody, {
    'Authorization': `Bearer ${token}`,

       
  });
  // Log the POST request output to the terminal
  console.log('Create Books with Bearer Token and UserId:', createBooksResponse);


});


test('TC 04 API Test - Delete Book with Bearer Token and UserId', async ({}) => {
  const deleteBookUrl = 'https://demoqa.com/BookStore/v1/Book';

  const requestBody = {
    isbn: '895435535',
    userId: `${userId}`,
  };

  // Make sure to replace $token with the actual token received from the previous test
  const deleteBookResponse = await makeDeleteRequest(deleteBookUrl, requestBody, {
    'Authorization': `Bearer ${token}`,
  });

});