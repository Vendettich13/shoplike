import { Btn } from "./AddButton.style";

export function AddButton({ handleClick }) {
  return <Btn onClick={() => handleClick()}>Add</Btn>;
}
