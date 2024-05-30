export async function PostPostRequest(body: { title: string; contents: string; userId: number }) {
  console.log("body: ", body);
  try {
    const fetchData: Response = await fetch(`http://localhost:3000/api/post`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    const user = await fetchData?.json();
    return user;
  } catch (err) {
    console.log("err: ", err);
  }
}

export async function PostGetRequest() {
  try {
    const fetchData: Response = await fetch(`http://localhost:3000/api/post`, {
      method: "GET",
    });

    const post = await fetchData?.json();
    return post;
  } catch (err) {
    console.log("err: ", err);
  }
}

export async function PostGetPerPageRequest(limit: number, lastId: number) {
  try {
    const fetchData: Response = await fetch(
      `http://localhost:3000/api/post?limit=${limit}&lastId=${lastId}`,
      {
        method: "GET",
      }
    );

    const post = await fetchData?.json();
    return post;
  } catch (err) {
    console.log("err: ", err);
  }
}
export async function PostDetailGetRequest(id: number) {
  try {
    const fetchData: Response = await fetch(`http://localhost:3000/api/post/${id}`, {
      method: "GET",
    });

    const post = await fetchData?.json();
    return post;
  } catch (err) {
    console.log("err: ", err);
  }
}
