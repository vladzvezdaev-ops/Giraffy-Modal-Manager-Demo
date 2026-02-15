import styles from "@/components/ui/button/Button.module.scss";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export function Button({ text, variant = "primary", onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
