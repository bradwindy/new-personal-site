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
        <Button variant="dark" aria-label="Call" href="tel:0221031605">
          <FontAwesomeIcon icon="phone" className={utilStyles.smallBrandIcon} />
        </Button>
        <Button variant="dark" aria-label="Text" href="sms:0221031605">
          <FontAwesomeIcon icon="sms" className={utilStyles.smallBrandIcon} />
        </Button>
        <Button
          variant="dark"
          aria-label="Email"
          href="mailto:trykryda@gmail.com"
        >
          <FontAwesomeIcon
            icon="envelope"
            className={utilStyles.smallBrandIcon}
          />
        </Button>
        <Button
          variant="dark"
          aria-label="GitHub Profile"
          href="https://github.com/bradwindy"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            className={utilStyles.smallBrandIcon}
          />
        </Button>
        <Button
          variant="dark"
          aria-label="Linked In"
          href="https://www.linkedin.com/in/bradley-windybank-9a9701194"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className={utilStyles.smallBrandIcon}
          />
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Download CV Button" className="ml-1 mb-4">
        <Button
          variant="dark"
          className={utilStyles.smallButtonText}
          href="/files/testcv.pdf"
        >
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
