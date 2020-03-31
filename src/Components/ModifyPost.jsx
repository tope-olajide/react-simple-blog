import React from "react";
const ModifyPost = (props) => {
  return (
    <>
      <form>
        <h1>Modify Post</h1>
        <input type='text'
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          text
          placeholder="title"
          size="39"
        ></input>
        <br />
        <br />
        <textarea
          defaultValue={props.content}
          placeholder="content"
          onChange={props.savePostContentToState}
          rows="8"
          cols="41"
        ></textarea>
        <br />
        <br />
        <button onClick ={props.updatePost}>Update Post</button>
      </form>
    </>
  );
};
export default ModifyPost;
