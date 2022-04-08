import React, { useRef } from "react";

const Form: React.FC<{ onAdd: (t: string) => void }> = ({ onAdd }) => {
  const todoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    if (todoRef.current!.value?.length > 0) {
      console.log(todoRef.current?.value)
      onAdd(todoRef.current!.value)
      todoRef.current!.value = ''
    } else {
      console.log("empty")
    }

  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" ref={todoRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
