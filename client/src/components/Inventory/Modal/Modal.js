import React, { useState } from "react";

function Modal(props) {

  const [input, setInput] = useState();
  const [newItem, setNewItem] = useState()

  const handleInputChange = event => {
    console.log(event.target.value)
    setInput(event.target.value)
  }

  console.log(props)

    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Alter {props.item}?</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>{props.item}: <input onChange={handleInputChange}></input></p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    );
}

export default Modal