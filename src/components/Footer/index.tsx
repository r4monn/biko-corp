import React from "react";
import { FooterContainer, LastFooter } from "./styles";

import logoBlack from '../../assets/logoBlack.png'

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <div>
          <img src={logoBlack} alt="Biko Corp." />
        </div>

        <ul>
          <li>Style Guide</li>
          <li>Changelog</li>
          <li>Privacy Policy</li>
          <li>404</li>
          <li>Start Here</li>
        </ul>

        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Services Page (CMS)</li>
        </ul>

        <ul>
          <li>Blog</li>
          <li>Blog Single (CMS)</li>
        </ul>
      </FooterContainer>

      <LastFooter>
        <p>All right reserved © 2022 | atwww.design</p>

        <p>This template was developed by r4monn with love {'<3'}</p>
      </LastFooter>
    </>

  )
}