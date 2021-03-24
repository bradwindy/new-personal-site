import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import SocialLinks from "../components/social-links";

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdCentre}>
        <SocialLinks />

        <h1 className="mb-4 mt-3 font-weight-bold">About Me</h1>

        <CardColumns>
          <Card bg="dark">
            <Card.Body>
              <Card.Title className="font-weight-bold">
                <FontAwesomeIcon
                  icon="mobile-alt"
                  className={utilStyles.rightSpacedIcon}
                  color="CornflowerBlue"
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
              <Card.Title className="font-weight-bold">
                <FontAwesomeIcon
                  icon="vial"
                  className={utilStyles.rightSpacedIcon}
                  color="LightGreen"
                />
                Testing Experience
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                At Trade Me I have worked in several teams in which developers
                have been involved in the testing process. I'm familiar with
                writing test plans and testing work. This also extends to
                developing with quality in mind, and I have experience in both
                in writing unit and automation tests.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon
                  icon="laptop"
                  className={utilStyles.rightSpacedIcon}
                  color="Coral"
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
                  icon="code-branch"
                  className={utilStyles.rightSpacedIcon}
                  color="Plum"
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
                  icon="code"
                  className={utilStyles.rightSpacedIcon}
                  color="PaleGoldenRod"
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
                  icon="sync-alt"
                  className={utilStyles.rightSpacedIcon}
                  color="LightBlue"
                />
                Agile Experience
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                I am the scrum master in my current squad at Trade me, and have
                experience with agile methodologies such as scrum and kanban,
                along with running retros and stand-ups. I am also familiar with
                tools to manage these processes such as Jira and Parabol.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon
                  icon="user-alt"
                  className={utilStyles.rightSpacedIcon}
                  color="BurlyWood"
                />
                Other Interests
              </Card.Title>
              <Card.Text className={utilStyles.cardText}>
                I'm really interested in photography, design, vinyl, watches and
                tinkering with computers of all kinds. I have also volunteered
                on Sprit of New Zealand and in both my local Rotary Club and
                Hospice Shop.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </section>
    </Layout>
  );
}
