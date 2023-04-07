import React, { useState } from "react";
import Box from "./Box";

/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 */


function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /**add box with given {id, width, height, backgroundColor } */
  function add(newBox) {
    setBoxes(boxes => [...boxes, newBox]);
  }

  function remove(id) {
    setBoxes(boxes => boxes.filter(box => box.id != id));
  }

  return (
    <div>
      {boxes.map(({ id, width, height, backgroundColor }) =>
        <Box
          key={id}
          id={id}
          width={width}
          height={height}
          remove={remove}
          backgroundColor={backgroundColor}
        />)}
    </div>
  );
}

export default BoxList;