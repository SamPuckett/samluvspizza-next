import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Button = ({ children, href, onClick, type }) => {
  return (
    <Link href={href}>
      <button onClick={onClick && onClick}>
        {children}
        {type === "arrow" && (
          <FontAwesomeIcon icon={faChevronRight} className="chevron-right" />
        )}
      </button>
    </Link>
  );
};

export default Button;
