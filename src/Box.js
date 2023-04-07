/*** Colored box presentation
 *
 * props:
 * Box: { id, width, height, backgroundColor, remove }
 *
 * state:
 *  none
 * BoxList -> box
 */

function Box({ id, width = 5, height = 5, backgroundColor, remove }) {

  /**Remove a Box */
  function handleRemove() {
    remove(id);
  }

  return (
    <div className="Box">
      <div className="Box-box"
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: backgroundColor
        }}
      />
      <button
        className="Box-removeBtn"
        onClick={handleRemove}>
        Remove The Box!
      </button>
    </div>
  );

}

export default Box;