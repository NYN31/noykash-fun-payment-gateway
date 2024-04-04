import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import Application from "./Application";
import { textData } from "../constants/text";
import swal from "sweetalert";

const ApplicationModal = ({ isOpen, onClose }) => {
  const {
    dearSirAndMadam,
    alertTitle,
    alertMessage1,
    alertMessage2,
    alertMessage3,
    yes,
    no,
  } = textData;

  const handleClose = () => {
    swal({
      title: alertTitle,
      text: alertMessage1,
      icon: "warning",
      buttons: [no, yes],
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        swal(alertMessage2, {
          icon: "success",
        });
      } else {
        swal(alertMessage3);
      }
    });
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      isCentered={true}
    >
      <ModalOverlay />
      <ModalContent maxWidth="750px">
        <ModalHeader color="#e2136e">{dearSirAndMadam}</ModalHeader>
        <ModalCloseButton onClick={handleClose} />
        <ModalBody>
          <Application />
        </ModalBody>

        <ModalFooter>
          <Button
            bg="#e2136e"
            color="#FFF"
            onClick={handleClose}
            _hover={{ bg: "#e2136e", color: "#FFF" }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ApplicationModal;
