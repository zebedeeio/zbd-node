export const cleanup = (obj: any) => {
  const newObj = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value !== null && value !== undefined) {
      // @ts-ignore
      newObj[key] = value;
    }
  }

  return newObj;
}

export async function postData({
  url,
  body,
  headers,
}: {
  url: string;
  body: any;
  headers?: any;
}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(cleanup(body)),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function patchData({
  url,
  body,
  headers,
}: {
  url: string;
  body: any;
  headers?: any;
}) {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(cleanup(body)),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getData({
  url,
  headers,
}: {
  url: string;
  headers?: any;
}) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody.message);
    }

    const result = await response.json();
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}