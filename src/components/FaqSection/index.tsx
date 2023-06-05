import React from "react";
import { FaqSectionContainer, IconButton, FaqItem, FaqHero } from "./styles";
import { Heading } from "../Heading";
import { Activity, Bicycle, Leaf } from "iconoir-react";

import fullBike from "../../assets/fullBike.png"

export default function FaqSection() {
  return (
    <FaqSectionContainer>
          <Heading size="hg">Most common FAQ</Heading>

          <FaqItem>
            <div>
              <IconButton>
                <Activity />
              </IconButton>

              <Heading size="xs">Lorem ipsum dolor sit amet</Heading>
            </div>

            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex nisi ut aliquip."
            </p>
          </FaqItem>
          <FaqItem>
            <div>
              <IconButton>
                <Leaf />
              </IconButton>

              <Heading size="xs">I want to take this bike at Giro</Heading>
            </div>

            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex nisi ut aliquip."
            </p>
          </FaqItem>
          <FaqItem>
            <div>
              <IconButton>
                <Bicycle />
              </IconButton>

              <Heading size="xs">Is this bike enough for me?</Heading>
            </div>

            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex nisi ut aliquip."
            </p>
          </FaqItem>

          <FaqHero>
            <img src={fullBike} alt="" />
          </FaqHero>
        </FaqSectionContainer>
  )
}