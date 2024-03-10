import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import SocialLinks from "../components/social-links";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <SpeedInsights />
        <Analytics />
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdCentre}>
        <p className="mb-2 font-weight-bold">iOS Developer @ Trade Me</p>
        <SocialLinks />
      </section>
    </Layout>
  );
}
