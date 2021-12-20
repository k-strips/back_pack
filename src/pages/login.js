import React from "react";
import Link from "next/link";

import { Input, Button } from "../components";

const Login = () => {
  return (
    <div>
      <div>
        <form>
          <hgroup>
            <h4>backpack: all your notes in one place</h4>
            <h5>create and manage notes, add pages to notes.</h5>
          </hgroup>
          <Input
            type="text"
            label="username_email"
            className="border-dotted border-2"
          />
          <Input type="password" label="password" className="border-solid" />
          <Button
            className="border-solid border-dotted"
            onClick={(e) => {
              e.preventDefault();
              console.log(`I have been clicked`);
            }}
          >
            login
          </Button>
          <div>
            you don&apos;t have an account?{" "}
            <Link href="./signup">
              <a>
                <small>sign up</small>
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
