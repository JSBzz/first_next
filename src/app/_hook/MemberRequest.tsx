export async function SignUpRequest(body: {
  email: string;
  password: string;
  passwordCheck: string;
  providerType?: string;
  providerCode?: string;
  nickname: string;
  image?: string;
}) {
  try {
    const fetchData: Response = await fetch(`http://localhost:3000/api/member/sign-up`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    //
    const user = await fetchData?.json();
    return user;
  } catch (err) {
    console.log("err: ", err);
  }
}
