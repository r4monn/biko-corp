import React from "react";
import { DifferentialContainer, DifferentialMenu, Gallery, MenuDescription, MenuItem } from "./styles";
import { Heading } from "../Heading";

import seatIcon from "../../assets/seatIcon.png"
import handleIcon from "../../assets/handleIcon.png"
import chainIcon from "../../assets/chainIcon.png"
import gallery1 from "../../assets/gallery1.png"
import gallery2 from "../../assets/gallery2.png"
import gallery3 from "../../assets/gallery3.png"

export default function DifferentialSection() {
  return (
    <DifferentialContainer>
      <DifferentialMenu>
        <MenuDescription>
          <Heading size="md">Lorem impsum dolor sit amet, consectetur</Heading>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
          </p>
        </MenuDescription>

        <MenuItem>
          <h4>01.</h4>
          <Heading size="md" type="bold">Seat</Heading>

          <img src={seatIcon} alt="" />

          <p>
            Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </MenuItem>
        <MenuItem>
          <h4>02.</h4>
          <Heading size="md" type="bold">Handle</Heading>

          <img src={handleIcon} alt="" />

          <p>
            Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </MenuItem>
        <MenuItem>
          <h4>03.</h4>
          <Heading size="md" type="bold">Chain</Heading>

          <img src={chainIcon} alt="" />

          <p>
            Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </MenuItem>
      </DifferentialMenu>

      <Gallery>
        <div>
          <img src={gallery1} />
          <img src={gallery2} />
        </div>
        <div><img src={gallery3} /></div>
      </Gallery>
    </DifferentialContainer>
  )
}