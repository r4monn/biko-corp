import React from "react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { TestimonialsContainer, FeedbacksContainer } from "./styles";
import Card from "../Card";

export default function TestimonialsSection() {
  return (
    <>
      <TestimonialsContainer>
          <Heading size='hg'>Testimonials</Heading>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ipsa reiciendis quas ipsam. In repellendus ad et magnam atque fugit, cupiditate eligendi eveniet debitis possimus hic magni consectetur dicta sunt!
          </p>

          <Button>discover the benefits</Button>
        </TestimonialsContainer>

        <FeedbacksContainer>
          <Card autor="John Doe" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ipsa reiciendis quas ipsam. In repellendus ad et magnam atque fugit, cupiditate eligendi eveniet debitis possimus hic magni consectetur dicta sunt!" />
          <Card autor="John Doe" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,  sed do eiusmod tempor, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,  sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumsed do eiusmod tempor,  sed do eiusmod tempor, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,  sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eisum sed do eiusmod tempor,  sed do eiusmod tempor, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,  sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eisum sed do eiusmod tempor,  sed do eiusmod tempor, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,  sed do eiusmod tempor ed do eisum sed do eiusmod tempor,  sed do eiusmod tempor, lorem ipsum dolor sit amet," />
          <Card autor="John Doe" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ipsa reiciendis quas ipsam. In repellendus ad et magnam atque fugit, cupiditate eligendi eveniet debitis possimus hic magni consectetur dicta sunt!" />
          <Card autor="John Doe" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ipsa reiciendis quas ipsam. In repellendus ad et magnam atque fugit, cupiditate eligendi eveniet debitis possimus hic magni consectetur dicta sunt!" />
          <Card autor="John Doe" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ipsa reiciendis quas ipsam. In repellendus ad et magnam atque fugit, cupiditate eligendi eveniet debitis possimus hic magni consectetur dicta sunt!" />
        </FeedbacksContainer>
    </>
  )
}