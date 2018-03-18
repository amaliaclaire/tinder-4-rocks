import React from 'react'

let Rock = ({
  name,
  type,
  age,
  color,
  location,
  hardness
 }) => (
  <div>
    <div>{name}</div>
    <div>{type}</div>
    <div>{age}</div>
    <div>{color}</div>
    <div>{location}</div>
    <div>{hardness}</div>
  </div>
)



export default Rock
