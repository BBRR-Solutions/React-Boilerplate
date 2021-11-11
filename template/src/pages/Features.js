import { useSelector, useDispatch } from "react-redux";

import "../Body.css";

import { Increment } from "../helpers/Actions";
import { Decrement } from "../helpers/Actions";

const Features = () => {
  const CounterState = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  return (
    <div className="Body">
      <p>{CounterState}</p>
      <button onClick={() => dispatch(Increment)}>
        Increment State with Redux
      </button>
      <button onClick={() => dispatch(Decrement)}>
        Increment State with Redux
      </button>
    </div>
  );
};

export default Features;
