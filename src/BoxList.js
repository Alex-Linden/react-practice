import React, { useState } from "react";

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

  return (
    <div>
      {boxes.map(box => <Box(box) />)}
    </div>
  );
}