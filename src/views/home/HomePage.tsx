"use client";

import styles from "@/views/home/HomePage.module.scss";
import stylesButton from "@/components/ui/button/Button.module.scss";

import {
  useModalManager,
  StatusModal,
  MODAL_CONTENTS,
} from "../../components/common/UseModalManager";

export default function HomePage() {
  const { activeModal, openModal, closeModal } = useModalManager();
  type ModalKey = keyof typeof MODAL_CONTENTS;
  const current = (
    activeModal ? MODAL_CONTENTS[activeModal as ModalKey] : null
  ) as (typeof MODAL_CONTENTS)[ModalKey] | null;

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
      <h1 className={styles.title}>Giraffy Modal Manager Demo</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: 1080,
          gap: 25,
          flexWrap: "wrap",
        }}
      >
        <button
          className={stylesButton.button}
          onClick={() => openModal("welcome")}
        >
          Вітаємо
        </button>
        <button
          className={stylesButton.button}
          onClick={() => openModal("error")}
        >
          Помилка
        </button>
        <button
          className={stylesButton.button}
          onClick={() => openModal("sendmessage")}
        >
          Надіслати повідомлення
        </button>
        <button
          className={stylesButton.button}
          onClick={() => openModal("successreview")}
        >
          Відгук
        </button>
        <button
          className={stylesButton.button}
          onClick={() => openModal("complaint")}
        >
          Скарга
        </button>
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
}
