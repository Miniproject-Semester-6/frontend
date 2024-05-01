import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";

import illustration from "assets/illustration.jpg";

function Form({ email, password, setEmail, setPassword, onSubmitHandler }) {
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
        <form onSubmit={onSubmitHandler}>
          <input
            type="email"
            required
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
