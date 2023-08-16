import { useMenuContext } from "@/contexts/MenuContext";
import LinkWrapper from "../LinkWrapper/LinkWrapper";
import styles from "./MenuIcon.module.scss";

interface Props {
  iconRef: React.RefObject<HTMLDivElement>;
}

export default function MenuIcon({ iconRef }: Props) {
  const { menuOpen, setMenuOpen } = useMenuContext();

  return (
    <LinkWrapper
      onClick={() => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
      }}
    >
      <div
        className={`${menuOpen && styles.open} ${styles.iconContainer}`}
        ref={iconRef}
      >
        <hr />
        <hr />
        <hr />
      </div>
    </LinkWrapper>
  );
}
