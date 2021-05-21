import React, { useState } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const CreateArea = ({ onAdd }) => {

  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const [isExpanded, setExpanded] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });

  };

  const handleSubmit = (e) => {
    onAdd(note);
    setNote({
      title: '',
      content: ''
    });
    e.preventDefault();
  };

  const expand = () => {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
          autoComplete="off"
          onChange={handleChange}
          name="title"
          value={note.title}
          placeholder="Title"
          />
        )}

        <textarea
        onClick={expand}
        autoComplete="off"
        onChange={handleChange}
        name="content"
        value={note.content}
        placeholder="Take a note ..."
        rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={handleSubmit}><AddCircleOutlineIcon /></Fab>
        </Zoom>
      </form>
    </div>
  )
};

export default CreateArea;