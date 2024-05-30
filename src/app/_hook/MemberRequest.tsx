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
    const fetchData: Response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/member/sign-up`,
      {
        method: "POST",
        body: JSON.stringify(body),
      }
    );
    //
    const user = await fetchData?.json();
    return user;
  } catch (err) {
    console.log("err: ", err);
  }
}
