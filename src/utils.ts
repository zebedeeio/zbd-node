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
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(cleanup(body)),
  });

  if (!response.ok) {
    const errorBody = await response.json();
    const error = {
      status: response.status,
      message: errorBody.message || 'API request failed',
    };

    throw error;
  }

  const result = await response.json();
  return result;
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
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(cleanup(body)),
  });

  if (!response.ok) {
    const errorBody = await response.json();
    const error = {
      status: response.status,
      message: errorBody.message || 'API request failed',
    };

    throw error;
  }

  const result = await response.json();
  return result;
}

export async function getData({
  url,
  headers,
}: {
  url: string;
  headers?: any;
}) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });

  if (!response.ok) {
    const errorBody = await response.json();
    const error = {
      status: response.status,
      message: errorBody.message || 'API request failed',
    };

    throw error;
  }

  const result = await response.json();
  return result;
}