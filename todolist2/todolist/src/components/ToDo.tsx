import React, { useState } from 'react';

type Props = {
  isDone: boolean;
  title: string;
  onToggle: () => void;
  onEdit: (text: string) => void;
  onDelete: () => void;
};

function ToDo({ title, isDone, onToggle, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(title);

  const editText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const save = () => {
    onEdit(text);
    setIsEditing(false);
  };

  return (
    <div className={`ToDo ${isDone ? 'completed' : ''}`}>
      <input type="checkbox" checked={isDone} onChange={onToggle} />
      {isEditing ? (
        <input onChange={editText} type="text" value={text} />
      ) : (
        <p>{title}</p>
      )}
      <button onClick={() => (isEditing ? save() : setIsEditing(true))}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default ToDo;
