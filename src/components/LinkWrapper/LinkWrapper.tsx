import styles from "./LinkWrapper.module.scss";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export default function LinkWrapper({ children, onClick }: Props) {
  const handleClick = () => {
    onClick();
  };
  return (
    <div className={styles.container} onClick={handleClick}>
      {children}
    </div>
  );
}
