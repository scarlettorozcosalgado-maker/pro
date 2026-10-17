import { createSignal, type JSX } from 'solid-js';

interface Props {
  initValue: number;
  children?: JSX.Element;
}

export const Counter = (props: Props) => {
  const [counter, setCounter] = createSignal(props.initValue);

  return (
    <>
      {props.children}
      <h3 class="text-xl">Value: {counter()}</h3>

      <button
        onClick={() => setCounter((prev) => prev + 1)}
        class="bg-blue-500 p-2 mr-2 rounded text-white"
      >
        +1
      </button>
      <button
        onClick={() => setCounter((prev) => prev - 1)}
        class="bg-blue-500 p-2 mr-2 rounded text-white"
      >
        -1
      </button>
    </>
  );
};

