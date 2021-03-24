import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import SocialLinks from "../components/social-links";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdCentre}>
        <p className="mb-3 font-weight-bold">iOS Developer @ Trade Me</p>

        <div className="mb-2">
          <Link href="/about-me">
            <Button variant="info" className="px-4 mr-2 mt-2 font-weight-bold">
              About Me
            </Button>
          </Link>
          <Link href="/work-showcase">
            <Button variant="info" className="mt-2 px-4 font-weight-bold">
              Work Showcase
            </Button>
          </Link>
        </div>

        <SocialLinks />

        <p className={utilStyles.openingPara}>
          From iOS to React, Flutter, and much, much more. I love learning new
          skills wherever possible. Check out the links above for more about me
          and my skills, along with examples of my professional and personal
          work and my GitHub profile.
        </p>
      </section>
    </Layout>
  );
}
