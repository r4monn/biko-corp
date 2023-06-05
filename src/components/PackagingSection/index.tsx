import React from "react";
import { Actions, Divisor, Informations, PackagingSectionContainer } from "./styles";
import { Heading } from "../Heading";
import { Button } from "../Button";
import { MdSpeed } from "react-icons/md"
import { RxHeight, RxWidth, RxColorWheel } from 'react-icons/rx'
import { TbWeight } from "react-icons/tb"
import { GiCrossedChains } from "react-icons/gi"

export default function PackagingSection() {
  return (
    <PackagingSectionContainer>
          <Informations>
              <div>
                <header>
                  <TbWeight />
                  <span>Weight</span>
                </header>
                <Heading size="sm">10 kg</Heading>
              </div>

              <div>
                <header>
                  <MdSpeed />
                  <span>Speed</span>
                </header>
                <Heading size="sm">93 km/h</Heading>
              </div>
              <Divisor></Divisor>
              <div>
                <header>
                  <RxHeight />
                  <span>Height</span>
                </header>
                <Heading size="sm">1.23 m</Heading>
              </div>

              <div>
                <header>
                  <RxWidth />
                  <span>Width</span>
                </header>
                <Heading size="sm">2.04 m</Heading>
              </div>
              <Divisor></Divisor>
              <div>
                <header>
                  <RxColorWheel />
                  <span>Wheel Diameter</span>
                </header>
                <Heading size="sm">50 cm</Heading>
              </div>

              <div>
                <header>
                  <GiCrossedChains />
                  <span>Chain</span>
                </header>
                <Heading size="sm">90 cm</Heading>
              </div>
              <Divisor></Divisor>
              <div>
                <p>
                  All the components are made in USA and ansambled in Japan
                </p>
              </div>
          </Informations>

          <Actions>
            <Heading size="hg">Packaging</Heading>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore neque culpa consectetur explicabo repellat, labore eligendi, facere ipsa vero totam cumque! Harum doloremque natus animi cumque perferendis saepe minus.
            </p>

            <footer>
              <Button variant="secondary">Discover More</Button>
              <Button variant="primary">Pre-Order ($1,200)</Button>
            </footer>
          </Actions>

        </PackagingSectionContainer>
  )
}