import React from 'react'

function Loading2() {
  return (
    <div>
        <button classname="btn btn-primary" type="button" disabled>
            <span classname="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span classname="visually-hidden">Loading...</span>
        </button>
    </div>
  )
}

export default Loading2