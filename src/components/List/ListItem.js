import { AddButton } from "../AddButton/AddButton";
import { ListItem } from "./ListItem.styled";

export function List({ items, handleClick }) {
  return (
    <main>
      <ul>
        {items !== null &&
          items.map((el) => {
            return (
              <ListItem key={el.id}>
                <div>
                  <img
                    src={el.imageUrl}
                    alt="cat"
                    width="100px"
                    height="auto"
                  />
                  <div>{el.name}</div>
                </div>
                <AddButton handleClick={handleClick} />
              </ListItem>
            );
          })}
      </ul>
    </main>
  );
}
