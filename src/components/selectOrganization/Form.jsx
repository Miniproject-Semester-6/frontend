import React from "react";
import { UserGroupIcon } from "@heroicons/react/24/solid";

import illustration from "assets/illustration.jpg";

function Form({ orgs, selectedOrg, setSelectedOrg, onSubmitHandler }) {
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
          <select
            value={selectedOrg.id}
            onChange={(e) =>
              setSelectedOrg(orgs.find((org) => org.id === e.target.value))
            }
          >
            <option value="">Select Organization</option>
            {orgs.map((org) => (
              <option key={org.id} value={org.id}>
                {org.name}
              </option>
            ))}
          </select>
          <button type="submit" className="btn btn--dark">
            <span>Select Organization</span>
            <UserGroupIcon width={20} />
          </button>
        </form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
}

export default Form;
