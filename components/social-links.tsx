import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import utilStyles from "../styles/utils.module.css";

export default function SocialLinks() {
  return (
    <ButtonToolbar
      aria-label="Toolbar with links"
      className="justify-content-center"
    >
      <ButtonGroup aria-label="Social Links" className="mb-4 mr-1">
        <Button variant="dark" aria-label="Call">
          <FontAwesomeIcon icon="phone" className={utilStyles.smallBrandIcon} />
        </Button>
        <Button variant="dark" aria-label="Text">
          <FontAwesomeIcon icon="sms" className={utilStyles.smallBrandIcon} />
        </Button>
        <Button variant="dark" aria-label="Email">
          <FontAwesomeIcon
            icon="envelope"
            className={utilStyles.smallBrandIcon}
          />
        </Button>
        <Button variant="dark" aria-label="GitHub Profile">
          <FontAwesomeIcon
            icon={["fab", "github"]}
            className={utilStyles.smallBrandIcon}
          />
        </Button>
        <Button variant="dark" aria-label="Linked In">
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className={utilStyles.smallBrandIcon}
          />
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Download CV Button" className="ml-1 mb-4">
        <Button variant="dark" className={utilStyles.smallButtonText}>
          <FontAwesomeIcon
            icon="file-download"
            className={utilStyles.smallNormalIconRightSpacing}
          />
          Download CV
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}
