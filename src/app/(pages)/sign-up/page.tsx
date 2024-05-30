import Button from "@/app/components/atom/ButtonFrame";
import Input from "@/app/components/atom/InputFrame";
import { Fragment } from "react";

export default function Test() {
  return (
    <Fragment>
      <Input placeholder="id" />
      <br />
      <Input placeholder="password" />
      <br />
      <Input placeholder="pasword-check" />
      <br />
      <Button>Sign up</Button>
    </Fragment>
  );
}
