import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";

import illustration from "assets/illustration.jpg";

function Form() {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <form>
          <input type="text" required placeholder="Email ID" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="btn btn--dark">
            <span>Login</span>
            <UserIcon width={20} />
          </button>
        </form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
}

export default Form;
