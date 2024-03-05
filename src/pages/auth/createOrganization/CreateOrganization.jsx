import wave from "assets/wave.svg";
import Form from "components/createOrganization/Form";

function CreateOrganization() {
  return (
    <>
      <Form />
      <img src={wave} alt="" />
    </>
  );
}

export default CreateOrganization;
