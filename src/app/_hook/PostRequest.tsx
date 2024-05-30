export async function PostPostRequest(body: { title: string; contents: string; userId: number }) {
  console.log("body: ", body);
  try {
    const fetchData: Response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, {
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
    const fetchData: Response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, {
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
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/post?limit=${limit}&lastId=${lastId}`,
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
    const fetchData: Response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${id}`, {
      method: "GET",
    });

    const post = await fetchData?.json();
    return post;
  } catch (err) {
    console.log("err: ", err);
  }
}

export async function PostRecentGetRequest(id: number) {
  try {
    const fetchData: Response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${id}/recent`,
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

export async function CommentPostRequest(postId: number, contents: string, writerId: number) {
  try {
    const fetchData: Response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/comment`,
      {
        method: "POST",
        body: JSON.stringify({ postId, contents, writerId }),
      }
    );
    const post = await fetchData?.json();
    return post;
  } catch (err) {
    console.log("err: ", err);
  }
}

export async function CommentGetRequest(postId: number) {
  try {
    const fetchData: Response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/comment?postId=${postId}`,
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
