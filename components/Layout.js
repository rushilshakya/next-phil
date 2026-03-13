import { HeadMatter } from "./HeadMatter";
import { TopBar } from "./TopBar";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <HeadMatter />
      {/* Google Tag Manager (noscript) */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5B5RTP6"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
          `,
        }}
      />
      {/* End Google Tag Manager (noscript) */}
      <section className="display-none sm:display-block">
        <TopBar />
      </section>
      <Menu />
      {children}
      <Footer />
    </>
  );
};
