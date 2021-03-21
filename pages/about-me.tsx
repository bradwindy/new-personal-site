import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdCentre}>
        <ButtonToolbar
          aria-label="Toolbar with button groups"
          className="justify-content-center"
        >
          <ButtonGroup aria-label="Social Links" className="mb-4 mr-1">
            <Button variant="dark">
              <FontAwesomeIcon
                icon="phone"
                className={utilStyles.smallBrandIcon}
              />
            </Button>
            <Button variant="dark">
              <FontAwesomeIcon
                icon="sms"
                className={utilStyles.smallBrandIcon}
              />
            </Button>
            <Button variant="dark">
              <FontAwesomeIcon
                icon="envelope"
                className={utilStyles.smallBrandIcon}
              />
            </Button>
            <Button variant="dark">
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className={utilStyles.smallBrandIcon}
              />
            </Button>
            <Button variant="dark">
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className={utilStyles.smallBrandIcon}
              />
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Download CV" className="ml-1 mb-4">
            <Button variant="dark" className={utilStyles.smallButtonText}>
              <FontAwesomeIcon
                icon="file-download"
                className={utilStyles.smallNormalIconRightSpacing}
              />
              Download CV
            </Button>
          </ButtonGroup>
        </ButtonToolbar>

        <h3 className="mb-3 mt-3 font-weight-bold">About Me</h3>

        <CardColumns>
          <Card bg="dark">
            <Card.Body>
              <Card.Title className="font-weight-bold">
                <FontAwesomeIcon
                  icon="sms"
                  className={utilStyles.medBrandIcon}
                />
                Mobile Experience
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                My mobile experience primarily constists of native iOS
                development. Alongside that I have also created several apps in
                both Flutter and React Native and I am currently working on
                upskilling in native Android development.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon
                  icon="sms"
                  className={utilStyles.medBrandIcon}
                />
                Full Stack Experience
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                I have experience with, and developed in such frameworks,
                platforms, and languages as: React and the MERN stack, Cloud
                VMs, .NET, Docker, Angular and much, much more!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon
                  icon="sms"
                  className={utilStyles.medBrandIcon}
                />
                Other Development Experience
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                I am currently working on refreshing my ML knowledge, and
                creating my own operating system in Rust. Throughout university
                I also worked on several projects using Python, R, and Java and
                C too.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon
                  icon="sms"
                  className={utilStyles.medBrandIcon}
                />
                Agile Experience
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                I have experience with agile methodologies such as scrum and
                kanban. I am also familiar with tools to manage these processes
                such as Jira.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon
                  icon="sms"
                  className={utilStyles.medBrandIcon}
                />
                Version Control Experience
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                I use git for all my personal projects and have experiences with
                methodologies such as git workflow. I also have integrated git
                in many personal CI/CD pipelines.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon
                  icon="sms"
                  className={utilStyles.medBrandIcon}
                />
                Other Interests
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                Outside of software development, I am really interested in
                photography, design, vinyl, watches and tinkering with computers
                of all kinds. I have also volunteered on Sprit of New Zealand
                and in both my local Rotary Club and Hospice Shop.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </section>
    </Layout>
  );
}
