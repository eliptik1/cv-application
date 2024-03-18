import { Card, CardBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

function Personal() {
  return (
    <Card className="w-[400px] mt-6">
      <h2 className="text-xl">Personal Details</h2>
      <CardBody>
        <label htmlFor="name">Full name</label>
        <Input id="name" placeholder="Full name" type="name"></Input>

        <label htmlFor="email">Email</label>
        <Input id="email" placeholder="Email" type="email"></Input>

        <label htmlFor="phone">Phone Number</label>
        <Input id="phone" placeholder="Phone Number" type="tel"></Input>

        <label htmlFor="address">Address</label>
        <Input id="address" placeholder="Address"></Input>
      </CardBody>
    </Card>
  );
}

export default Personal;
