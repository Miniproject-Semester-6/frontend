import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import restClient from "restClient";
import logomark from "assets/logomark.svg";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";

function Navigation() {
  const orgid = localStorage.getItem("orgid");
  const userrole = localStorage.getItem("role");
  const navigate = useNavigate();
  const [orgs, setOrgs] = useState([]);

  const getUserOrgs = async () => {
    try {
      const { data: response } = await restClient({
        method: "GET",
        url: "/userOrganization",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === "success") {
        setOrgs(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    localStorage.clear();

    toast.success("Logged out successfully");
    navigate("/login");
  };

  useEffect(() => {
    getUserOrgs();
  }, []);

  return (
    <nav>
      <NavLink className={"nav_link"} to="/home" aria-label="Go to home">
        <img src={logomark} alt="" height={30} />
        <span>Home</span>
      </NavLink>
      {userrole === "owner" && (
        <NavLink
          className={"nav_link"}
          to="/insights"
          aria-label="Go to insights"
        >
          <span>Insights</span>
        </NavLink>
      )}
      <div className="org_selector">
        <select
          value={orgid}
          onChange={(e) => {
            const org = orgs.find((org) => org.id === e.target.value);
            localStorage.setItem("orgname", org.name);
            localStorage.setItem("orgid", org.id);
            localStorage.setItem("role", org.role);

            navigate("/home");
            window.location.reload();
          }}
        >
          <option value="" disabled>
            Select Organization
          </option>
          {orgs.map((org) => (
            <option key={org.id} value={org.id}>
              {org.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="btn btn--warning"
        onClick={logoutHandler}
      >
        <span>Logout</span>
        <ArrowRightEndOnRectangleIcon width={20} />
      </button>
    </nav>
  );
}

export default Navigation;
