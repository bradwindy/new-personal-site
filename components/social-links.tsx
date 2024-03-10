import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import utilStyles from "../styles/utils.module.css";

export default function SocialLinks() {
  return (
    <ButtonToolbar
      aria-label="Toolbar with links"
      className="justify-content-center mt-4"
    >
      <ButtonGroup aria-label="Social Links" className="mb-4 mr-1">
        <Button
          variant="dark"
          aria-label="Email"
          href="mailto:hello@windybank.net"
        >
          <FontAwesomeIcon icon="envelope" className={utilStyles.socialIcon} />
        </Button>
        <Button
          variant="dark"
          aria-label="GitHub Profile"
          href="https://github.com/bradwindy"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            className={utilStyles.socialIcon}
          />
        </Button>
        <Button
          variant="dark"
          aria-label="Linked In"
          href="https://www.linkedin.com/in/bradley-windybank-9a9701194"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className={utilStyles.socialIcon}
          />
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Download CV Button" className="ml-1 mb-4">
        <Button
          variant="dark"
          className={utilStyles.downloadButton}
          href="mailto:cv@windybank.net"
        >
          <FontAwesomeIcon
            icon="file-download"
            className={utilStyles.downloadIcon}
          />
          <div className={utilStyles.downloadText}>Request CV</div>
        </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}
