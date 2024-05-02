import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import restClient from "restClient";
import wave from "assets/wave.svg";
import Form from "components/selectOrganization/Form";

function SelectOrganization() {
  const navigate = useNavigate();
  const [orgs, setOrgs] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState({});

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
