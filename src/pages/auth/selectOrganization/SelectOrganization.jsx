import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import restClient from "restClient";
import wave from "assets/wave.svg";
import Form from "components/selectOrganization/Form";

function SelectOrganization() {
  const orgname = localStorage.getItem("orgname");
  const orgid = localStorage.getItem("orgid");
  const role = localStorage.getItem("role");

  const navigate = useNavigate();
  const [orgs, setOrgs] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState({
    name: orgname || "",
    id: orgid || "",
    role: role || "",
  });

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

  const onSubmitHandler = (e) => {
    e.preventDefault();

    localStorage.setItem("orgname", selectedOrg.name);
    localStorage.setItem("orgid", selectedOrg.id);
    localStorage.setItem("role", selectedOrg.role);

    navigate("/home");
  };

  useEffect(() => {
    if (localStorage.getItem("orgid")) navigate("/home");
  }, []);

  useEffect(() => {
    getUserOrgs();
  }, []);

  return (
    <>
      <Form {...{ orgs, selectedOrg, setSelectedOrg, onSubmitHandler }} />
      <img src={wave} alt="" />
    </>
  );
}

export default SelectOrganization;
