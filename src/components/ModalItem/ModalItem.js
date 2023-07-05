import { Modal, Backdrop } from "./ModalItem.module";

export function ModalItem({ items, active, handleClick }) {
  return (
    <>
      {active === true && (
        <Backdrop onClick={() => handleClick()}>
          <Modal>
            <div>Count: </div>
          </Modal>
        </Backdrop>
      )}
    </>
  );
}
