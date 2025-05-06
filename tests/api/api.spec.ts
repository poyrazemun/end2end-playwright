import { APIRequestContext, expect, request as playwrightRequest, test } from "@playwright/test";

test.describe.parallel("Api Testing", () => {
  const baseURL = "https://reqres.in/api/";
  let apiContext: APIRequestContext;

  test.beforeAll(async () => {
    apiContext = await playwrightRequest.newContext({
      baseURL: baseURL,
      extraHTTPHeaders: {
        "x-api-key": "reqres-free-v1",
      },
    });
  });

  test.afterAll(async () => {
    await apiContext.dispose();
  });

  test("Simple API Test - Assert Response Status - Happy Path", async ({}) => {
    const response = await apiContext.get("users/2");
    expect(response.status()).toBe(200);

    //const responseBody = JSON.parse(await response.text());
    //console.log(responseBody);
  });

  test("Simple API Test - Assert Response Status - Unhappy Path", async ({}) => {
    const response = await apiContext.get("users/23");
    expect(response.status()).toBe(404);
  });

  test("GET Request - Get User Detail", async ({}) => {
    const response = await apiContext.get("users/2");
    const responseBody = JSON.parse(await response.text());

    expect.soft(response.status()).toBe(200);
    expect.soft(responseBody.data.id).toBe(2);
    expect.soft(responseBody.data.email).toBe("janet.weaver@reqres.in");
    expect.soft(responseBody.data.avatar).toBeTruthy();
  });

  test("Post Request - Post a User", async ({}) => {
    const response = await apiContext.post("users", {
      data: {
        name: "Omer",
        job: "SDET Manager",
      },
    });
    const responseBody = JSON.parse(await response.text());
    expect.soft(response.status()).toBe(201);
    // console.log(responseBody);
    expect.soft(responseBody.createdAt).toBeTruthy();
    // console.log(parseInt(responseBody.id));
    expect.soft(parseInt(responseBody.id)).toBeGreaterThan(0);
  });

  test("Post Request - Successful Login", async ({}) => {
    const response = await apiContext.post("login", {
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    });

    const responseBody = JSON.parse(await response.text());
    expect.soft(response.status()).toBe(200);

    expect.soft(responseBody.token).toBe("QpwL5tke4Pnpja7X4");
  });

  test("POST Request - Failed login", async ({}) => {
    const response = await apiContext.post("login", {
      data: {
        email: "peter@klaven",
      },
    });

    const responseBody = JSON.parse(await response.text());
    expect.soft(response.status()).toBe(400);
    expect.soft(responseBody.error).toBe("Missing password");
  });

  test("PUT Request - Update a User", async ({}) => {
    const newName = "Fatih";
    const response = await apiContext.put("users/2", {
      data: {
        name: newName,
        job: "CEO",
      },
    });

    expect.soft(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    expect.soft(responseBody.name).toBe(newName);
    expect.soft(responseBody.updatedAt).toBeTruthy();
  });

  test("Delete Request", async ({}) => {
    const response = await apiContext.delete("users/2");
    expect(response.status()).toBe(204);
  });
});
