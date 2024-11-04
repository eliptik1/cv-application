import { Card, CardBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

function Personal({ personalInfo, setPersonalInfo }) {
  function handlePersonalInfo(e) {
    let inputName = e.target.id;
    setPersonalInfo({ ...personalInfo, [inputName]: e.target.value });
  }

  return (
    <Card className="w-[400px] mt-6">
      <h2 className="text-xl">Personal Details</h2>
      <CardBody>
        <label htmlFor="name">Full name</label>
        <Input
          id="name"
          placeholder="Full name"
          type="name"
          value={personalInfo.name}
          onChange={handlePersonalInfo}
        ></Input>

        <label htmlFor="email">Email</label>
        <Input
          id="email"
          placeholder="Email"
          type="email"
          value={personalInfo.email}
          onChange={handlePersonalInfo}
        ></Input>

        <label htmlFor="phone">Phone Number</label>
        <Input
          id="phone"
          placeholder="Phone Number"
          type="tel"
          value={personalInfo.phone}
          onChange={handlePersonalInfo}
        ></Input>

        <label htmlFor="address">Address</label>
        <Input
          id="address"
          placeholder="Address"
          value={personalInfo.address}
          onChange={handlePersonalInfo}
        ></Input>

        <label htmlFor="address">Profile Description</label>
        <Input
          id="profileDescription"
          placeholder="Description"
          value={personalInfo.profileDescription}
          onChange={handlePersonalInfo}
        ></Input>
      </CardBody>
    </Card>
  );
}

export default Personal;
