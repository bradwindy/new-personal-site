import Head from "next/head";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Layout, { siteTitle } from "../components/layout";
import SocialLinks from "../components/social-links";
import utilStyles from "../styles/utils.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function WorkShowcase() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdCentre}>
        <SocialLinks />
        <h1 className="mb-4 mt-3 font-weight-bold">My Work</h1>
        <Container>
          <Row>
            <Col md>
              <Card className="bg-dark text-left mb-4">
                <Card.Img variant="top" src="/images/dynamic.jpg" />
                <Card.Body>
                  <Card.Title>Dynamic Ads</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    In the Trade Me Property iOS app, I implemented dynamic ad
                    slots into the search results. This allowed for any type of
                    ad to by dynamically requested and displayed, enabling
                    support for all types of ad creatives from our customers.
                  </Card.Text>
                  <a href="https://apps.apple.com/nz/app/trade-me-property/id550943614?itsct=apps_box&itscg=30200">
                    <Image
                      className={utilStyles.appleImage}
                      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1290038400&h=47b59d511386ee7e3ece3e78d93287c6"
                      height={40}
                      width={120}
                      alt="Download Trade Me Property on the App Store"
                    />
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="bg-dark text-left mb-4">
                <Card.Img variant="top" src="/images/homescreens.jpg" />
                <Card.Body>
                  <Card.Title>Property and Motors Home Screens</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    At Trade Me, we wanted a central place to host property and
                    motors specific content in the iOS app. We used Firebase
                    remote config to power the content displayed, instead of an
                    API, for quicker delivery.
                  </Card.Text>
                  <a href="https://apps.apple.com/nz/app/trade-me/id392567559?itsct=apps_box&itscg=30200">
                    <Image
                      className={utilStyles.appleImage}
                      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1290038400&h=47b59d511386ee7e3ece3e78d93287c6"
                      height={40}
                      width={120}
                      alt="Download Trade Me on the App Store"
                    />
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="bg-dark text-left mb-4">
                <Card.Img variant="top" src="/images/dealerShowroom.jpg" />
                <Card.Body>
                  <Card.Title>Dealer Showroom</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    Vehicle dealers love to show off branding and have places on
                    our platform that allow users to connect with their brand. I
                    worked to create a place in the iOS app to show more dealer
                    branding and info than we had previously shown.
                  </Card.Text>
                  <a href="https://apps.apple.com/nz/app/trade-me/id392567559?itsct=apps_box&itscg=30200">
                    <Image
                      className={utilStyles.appleImage}
                      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1290038400&h=47b59d511386ee7e3ece3e78d93287c6"
                      height={40}
                      width={120}
                      alt="Download Trade Me on the App Store"
                    />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md>
              <Card className="bg-dark text-left mb-4">
                <Card.Img variant="top" src="/images/reminderPlus.jpg" />
                <Card.Body>
                  <Card.Title>Reminder+</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    An exercise in using the Flutter framework, developed during
                    uni alongside my normal coursework. It was my first time
                    working on mobile, my first somewhat public app, and a great
                    learning opportunity.
                  </Card.Text>
                  <Button
                    variant="light"
                    className="mb-2"
                    href="https://github.com/bradwindy/reminderplus"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className={utilStyles.rightSpacedIcon}
                    />
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="bg-dark text-left mb-4">
                <Card.Img variant="top" src="/images/oneRoom.jpg" />
                <Card.Body>
                  <Card.Title>OneRoom</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    A web app developed using the MERN stack at Uni. It was
                    created around the idea of replacing the paper based study
                    room booking system at the uni with an online one complete
                    with accounts.
                  </Card.Text>
                  <Button
                    className="mb-2"
                    variant="light"
                    href="https://github.com/bradwindy/OneRoom"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className={utilStyles.rightSpacedIcon}
                    />
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="bg-dark text-left mb-4">
                <Card.Img variant="top" src="/images/vmApp.jpg" />
                <Card.Body>
                  <Card.Title>To-do List Web App</Card.Title>
                  <Card.Text className={utilStyles.cardText}>
                    A multi-VM web app created using the MERN stack on the Azure
                    cloud platform as a university project. An exercise in
                    learning about VM's in the cloud and cross communication
                    between them.
                  </Card.Text>
                  <Button
                    className="mb-2"
                    variant="light"
                    href="https://github.com/bradwindy/azure-multivm-webapp"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className={utilStyles.rightSpacedIcon}
                    />
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
