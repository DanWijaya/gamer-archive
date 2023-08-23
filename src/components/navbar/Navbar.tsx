import * as React from "react";
import Link from "next/link";
import "./Navbar.css";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import { IconButton } from "@mui/material";
import SearchInput from "@/components/SearchInput/SearchInput";

export default function Navbar() {
  return (
    <header>
    <nav>
      <div>
        <Link href="/">
            <SportsEsportsOutlinedIcon className="game-controller-icon"/>
        </Link>
        <SearchInput/>
      </div>
    </nav>
  </header>
  );
}
