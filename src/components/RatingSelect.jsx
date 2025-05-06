import { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";

const RatingSelect = ({ select }) => {
  const { feedbackEdit } = useContext(FeedbackContext);
  const [selected, setSelected] = useState();
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  useEffect(() => setSelected(feedbackEdit.item.rating), [feedbackEdit]);

  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          value="1"
          checked={selected === 1}
          onChange={handleChange}
          id="num1"
          name="rating"
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          value="2"
          checked={selected === 2}
          onChange={handleChange}
          id="num2"
          name="rating"
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          value="3"
          checked={selected === 3}
          onChange={handleChange}
          id="num3"
          name="rating"
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          value="4"
          checked={selected === 4}
          onChange={handleChange}
          id="num4"
          name="rating"
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          value="5"
          checked={selected === 5}
          onChange={handleChange}
          id="num5"
          name="rating"
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          value="6"
          checked={selected === 6}
          onChange={handleChange}
          id="num6"
          name="rating"
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          value="7"
          checked={selected === 7}
          onChange={handleChange}
          id="num7"
          name="rating"
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          value="8"
          checked={selected === 8}
          onChange={handleChange}
          id="num8"
          name="rating"
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          value="9"
          checked={selected === 9}
          onChange={handleChange}
          id="num9"
          name="rating"
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          value="10"
          checked={selected === 10}
          onChange={handleChange}
          id="num10"
          name="rating"
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
};
export default RatingSelect;
