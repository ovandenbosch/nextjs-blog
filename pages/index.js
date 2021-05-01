import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <strong>Oliver.</strong> I'm a student currently learning
          Next.js (a React.js framework) and Rust. You can see what I do by
          visiting my <a href="https://github.com/ovandenbosch">GitHub.</a>
        </p>
      </section>
    </Layout>
  );
}
