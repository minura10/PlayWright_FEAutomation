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

class CreateUserPage {
  private readonly url = 'https://demoqa.com/Account/v1/User';

  async createUser(username: string, password: string) {
    const requestBody = {
      userName: username,
      password: password,
    };

    return makePostRequest(this.url, requestBody);
  }
}

class GenerateTokenPage {
  private readonly url = 'https://demoqa.com/Account/v1/GenerateToken';

  async generateToken(username: string, password: string) {
    const requestBody = {
      userName: username,
      password: password,
    };

    const generateTokenResponse = await makePostRequest(this.url, requestBody);

    return generateTokenResponse.token;
  }
}

class CreateBooksPage {
  private readonly url = 'https://demoqa.com/BookStore/v1/Books';

  async createBooks(userId: string, token: string) {
    const requestBody = {
      userId: userId,
      collectionOfIsbns: [
        {
          isbn: '673403434',
        },
        {
          isbn: '895435535',
        },
      ],
    };

    return makePostRequest(this.url, requestBody, {
      'Authorization': `Bearer ${token}`,
    });
  }
}

class DeleteBookPage {
  private readonly url = 'https://demoqa.com/BookStore/v1/Book';

  async deleteBook(userId: string, token: string) {
    const requestBody = {
      isbn: '895435535',
      userId: userId,
    };

    return makeDeleteRequest(this.url, requestBody, {
      'Authorization': `Bearer ${token}`,
    });
  }
}
