import React, { useState } from "react";
import { Router, Link } from "@reach/router";

const Header = () => (
  <nav>
    <Link to="/">Home</Link> {" | "}
    <Link to="game-history">Gane History</Link>
    {" | "}
    <Link to="about">About</Link>
  </nav>
);

export default Header;
