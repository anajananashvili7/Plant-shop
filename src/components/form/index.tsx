import { postApi } from "@/utils/api";
import { useState } from "react";
import styles from "./index.module.css"

type Props = {
  onAdd: () => void;
};

const Form = ({ onAdd }: Props) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    
    setErrorMessage("");
  };

  const handleAdd = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); 
    if (!input.trim()) {
      setErrorMessage("Please, insert your name and surname");
      return;
    }
    const newPost = { userId: 1, title: input };

    setInput("");
    setLoading(true);

    try {
      const res = await postApi(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      onAdd();
      console.log(res);
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.inputRow}>
        <input className={styles.Input} placeholder="Type your name and surname" name="title" type="text" value={input} onChange={handleChange} />
        <button className={styles.button33} onClick={handleAdd} disabled={loading}>
          Add
        </button>
      </div>
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default Form;

