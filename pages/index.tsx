import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          From iOS to React, Flutter, and much, much more. I love learning new
          skills wherever possible. Check out the links below for my latest
          personal projects, examples of my professional work, and my
          development blog.
        </p>
        <p>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
