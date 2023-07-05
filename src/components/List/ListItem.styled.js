import { styled } from "styled-components";

export const ListItem = styled.li`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: aliceblue;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
