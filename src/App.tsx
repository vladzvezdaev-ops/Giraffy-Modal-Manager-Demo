import React from "react";
import {
  useModalManager,
  StatusModal,
  MODAL_CONTENTS,
} from "./components/common/UseModalManager";

const App: React.FC = () => {
  const { activeModal, openModal, closeModal } = useModalManager();
  const current = activeModal ? MODAL_CONTENTS[activeModal] : null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: 50,
        alignItems: "center",
      }}
    >
      <h1>Giraffy Modal Manager Demo</h1>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button onClick={() => openModal("welcome")}>Тест: Вітаємо</button>
        <button onClick={() => openModal("error")}>Тест: Помилка</button>
        <button onClick={() => openModal("sendmessage")}>
          Тест: Надіслати повідомлення
        </button>
        <button onClick={() => openModal("successreview")}>Тест: Відгук</button>
        <button onClick={() => openModal("complaint")}>Тест: Скарга</button>
      </div>

      {current && (
        <StatusModal
          isOpen={!!activeModal}
          onClose={closeModal}
          title={current.title}
          description={current.description}
          buttonText={current.buttonText}
        />
      )}
    </div>
  );
};

export default App;
