import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
   const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing); // schedule a state update to true
    // setIsEditing(!isEditing); // schedule a state update to true
    // both above two lines of code will do the same update on the previous value old isEditing
    // whether the next one will get the latest value for isEditing
    setIsEditing(editing => !editing)

    if (isEditing) {
      onChangeName(symbol, playerName)
    }
  }

  function handleChange(event) {
    console.log(event)
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
//   let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = <input type="text" value={playerName} onChange={handleChange} />; // two way binding
    // btn = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
