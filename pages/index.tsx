import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdCentre}>
        <p className="mb-4 font-weight-bold">iOS Developer @ Trade Me</p>

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

        <p className="mb-4">
          From iOS to React, Flutter, and much, much more. I love learning new
          skills wherever possible. Check out the links below for examples of my
          professional and personal work, along with my development blog.
        </p>

        <div>
          <Link href="/about-me">
            <Button variant="info" className="mr-2 mt-2 px-4 font-weight-bold">
              About Me
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="info" className="mr-2 mt-2 px-4 font-weight-bold">
              Work Showcase
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="info" className="px-4 mt-2 font-weight-bold">
              Blog
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
