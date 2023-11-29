import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/slices/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="counter-block">
            <button
                type="button"
                className="counter-block__increment"
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Прибавить
            </button>
            <span className="counter-block__value">{count}</span>
            <button
                type="button"
                className="counter-block__decrement"
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Отнять
            </button>
            <br />
        </div>
    );
}

export default Counter;
