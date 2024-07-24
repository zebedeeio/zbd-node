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
    throw (await makeError(response));
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
    throw (await makeError(response));
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
    throw (await makeError(response));
  }

  const result = await response.json();
  return result;
}

async function makeError(response: Response) {
  let errorBody: any;
  try {
    errorBody = await response.json();
  } catch (_) {
    errorBody = null;
  }

  return {
    status: response.status,
    message: errorBody?.message || "API request failed",
  };
}