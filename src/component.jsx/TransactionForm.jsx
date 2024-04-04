import { Button, Flex, useToast } from "@chakra-ui/react";
import InputField from "./InputField";
import { useState } from "react";
import { textData } from "../constants/text";
import ApplicationModal from "./ApplicationModal";

const SENDER_PHONE = "SENDER_PHONE";
const RECEIVER_PHONE = "RECEIVER_PHONE";
const AMOUNT = "AMOUNT";
const digits = "+0123456789";

const TransactionForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [senderPhone, setSenderPhone] = useState();
  const [receiverPhone, setReceiverPhone] = useState();
  const [amount, setAmount] = useState();
  const toast = useToast();

  const modalCloseHandler = () => {
    setShowModal(false);
  };

  const {
    senderPhoneNumber,
    receiverPhoneNumber,
    moneyAmount,
    phonePlaceholder,
    amountPlaceholder,
    send,
    wrongSenderPhoneNoMessage,
    wrongReceiverPhoneNoMessage,
    minimumMoneyAmountMessage,
    maximumMoneyAmountMessage,
    samePhoneNumberMessage,
    globalMessage,
  } = textData;

  const toastResult = (title, description, status) => {
    toast({
      title: title,
      description,
      status: status,
      duration: 5000,
      isClosable: true,
    });
  };

  const phoneValidation = (phoneNumber) => {
    return !(
      (phoneNumber.startsWith("01") ||
        phoneNumber.startsWith("+8801") ||
        phoneNumber.startsWith("8801")) &&
      (phoneNumber.length === 11 ||
        phoneNumber.length === 14 ||
        phoneNumber.length === 13)
    );
  };

  const checkSamePhoneNumber = () => {
    return (
      senderPhone.replace("+8801", "") === receiverPhone.replace("+8801", "") ||
      senderPhone.replace("8801", "") === receiverPhone.replace("8801", "") ||
      senderPhone.replace("01") === receiverPhone.replace("01")
    );
  };

  const handleSenderPhone = (type, value) => {
    const len = value.length;
    if (type === SENDER_PHONE || type === RECEIVER_PHONE) {
      if (value.length > 11) value = value.slice(0, len - 1);
    }
    if (!digits.includes(value[len - 1])) {
      value = value.slice(0, len - 1);
    }

    if (type === SENDER_PHONE) setSenderPhone(value);
    else if (type === RECEIVER_PHONE) setReceiverPhone(value);
    else if (type === AMOUNT) setAmount(value);
  };

  const onSubmitForTransaction = () => {
    if (senderPhone && phoneValidation(senderPhone)) {
      toastResult("", wrongSenderPhoneNoMessage, "error");
      return;
    }
    if (receiverPhone && phoneValidation(receiverPhone)) {
      toastResult("", wrongReceiverPhoneNoMessage, "error");
      return;
    }
    if (amount && Number(amount) <= 100) {
      toastResult("", minimumMoneyAmountMessage, "error");

      return;
    }
    if (amount > 50000) {
      toastResult("", maximumMoneyAmountMessage, "error");
      return;
    }

    if (senderPhone && receiverPhone && amount) {
      if (checkSamePhoneNumber()) {
        toastResult("", samePhoneNumberMessage, "error");
        return;
      }
      setShowModal(true);
    } else {
      toastResult("", globalMessage, "warning");
      return;
    }
  };

  return (
    <Flex direction="column" gap="24px" width={["95%", "95%", "500px"]}>
      {showModal && (
        <ApplicationModal isOpen={showModal} onClose={modalCloseHandler} />
      )}
      <InputField
        label={senderPhoneNumber}
        placeholder={phonePlaceholder}
        value={senderPhone}
        onChangeSenderPhone={(e) =>
          handleSenderPhone(SENDER_PHONE, e.target.value)
        }
      />
      <InputField
        label={receiverPhoneNumber}
        placeholder={phonePlaceholder}
        value={receiverPhone}
        onChangeSenderPhone={(e) =>
          handleSenderPhone(RECEIVER_PHONE, e.target.value)
        }
      />
      <InputField
        label={moneyAmount}
        placeholder={amountPlaceholder}
        value={amount}
        onChangeSenderPhone={(e) => handleSenderPhone(AMOUNT, e.target.value)}
      />
      <Button
        bg="#e2136e"
        color="#FFF"
        p="2px"
        fontSize={["14px", "16px"]}
        _hover={{
          bg: "#e2136e",
          color: "#FFF",
        }}
        onClick={onSubmitForTransaction}
      >
        {send}
      </Button>
    </Flex>
  );
};

export default TransactionForm;
