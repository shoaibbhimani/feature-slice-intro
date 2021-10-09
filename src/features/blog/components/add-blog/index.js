import { useState } from "react";

import { Button } from "shared";

export const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <form onSubmit={() => {}}>
      <div>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </label>
      </div>

      <div>
        <Button />
      </div>
    </form>
  );
};
