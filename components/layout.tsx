import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Bradley Windybank";
export const siteTitle = "Bradley Windybank";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The personal website of an Auckland, New Zealand based iOS developer. Currently working at Trade Me."
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="keywords"
          content="ios developer, developer, mobile apps, auckland mobile developer, ios app, new zealand mobile developer, app developer, nz, auckland"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="author" content="Bradley Windybank" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
      </Head>

      {home ? (
        <header className={styles.header}>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
      ) : (
        <header className={styles.headerAbout}>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>← &nbsp;&nbsp;{name}</a>
            </Link>
          </h2>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
}
