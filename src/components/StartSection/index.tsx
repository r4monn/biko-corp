import React from "react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Description, Line, StartSectionContainer } from "./styles";

export default function StartSection() {
  return (
    <StartSectionContainer>
      <Description>
            <Heading size='hg'>Marathon Bike</Heading>
            <Line />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellendus, possimus suscipit ut laboriosam voluptatum! Minima eaque aperiam saepe voluptatum.
              </p>
              <Button>DISCOVER THE BENEFITS</Button>
            </div>
          </Description>
    </StartSectionContainer>
  )
}