import React from "react";

import { Tile } from "../tile/Tile";

export const TileList = ({tiles}) => {
  return (
    <div>
      {tiles.map((contact, index) => {
        return <Tile key={index} contact={contact}/>
      })}
    </div>
  );
};
