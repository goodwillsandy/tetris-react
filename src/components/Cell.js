import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => (
	<StyledCell type={type} color={TETROMINOS[type].color} >{console.log('re-rendering cell')}
  </StyledCell>
);

export default React.memo(Cell);
// React.memo() memorizes the cell component. Helps in optimisation
