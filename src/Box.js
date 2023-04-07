/*** Colored box presentation
 *
 * props:
 * Box: { id, width, height, backgroundColor }
 *
 * state:
 *  none
 * BoxList -> box
 */

function Box({ id, width = 5, height = 5, backgroundColor }) {

  return (
    <div className="Box">
      <div className="Box-box"
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: backgroundColor
        }}
      />
    </div>
  );

}

export default Box;