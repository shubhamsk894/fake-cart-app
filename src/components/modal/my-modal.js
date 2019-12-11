import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const MyModal = ({ children, toggle, isOpen, header, footer }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{header}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      {/* <ModalFooter>{footer}</ModalFooter> */}
    </Modal>
  );
};
export default MyModal;
