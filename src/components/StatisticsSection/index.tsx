import React from "react";
import { Heading } from "../Heading";
import { Hero, Info, Infos, StatisticsSectionContainer, VerticalLine } from "./styles";

import hero from "../../assets/hero.png"
import { Button } from "../Button";

export default function StatisticsSection() {
  return (
    <StatisticsSectionContainer>
      <Infos>
        <Info>
          <Heading size="md">50%</Heading>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus excepturi hic mollitia, voluptas unde eligendi!
          </p>
        </Info>
        <Info>
          <Heading size="md">756 mi</Heading>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus excepturi hic mollitia, voluptas unde eligendi!
          </p>
        </Info>
        <Info>
          <Heading size="md">4 min</Heading>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus excepturi hic mollitia, voluptas unde eligendi!
          </p>
        </Info>
      </Infos>

      <Hero>
        <div className="left">
          <Heading size='md'>Carbon fiber frame with a sleek design</Heading>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>

            <Button variant='primary'>Pre-Order ($1,200)</Button>
          </div>
        </div>
        <VerticalLine />
        <div className="right">
          <img src={hero} alt="" />
        </div>
      </Hero>
    </StatisticsSectionContainer>
  )
}