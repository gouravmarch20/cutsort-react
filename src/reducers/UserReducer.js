import React from 'react'

export const UserReducer = (state, { type, action }) => {
  switch (type) {
    case "STEP":
      return { ...state, step: state.step + 1 }

    default:
      break
  }
}
