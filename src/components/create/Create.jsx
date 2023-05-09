import React from "react";
import { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" name="fname" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
      )
    </>
  );
};

export default Create;
