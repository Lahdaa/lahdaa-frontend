import NextHead from "next/head";

const defaultDescription =
  "Stevia is an Instructor-led online learning platform that provides digital skill training through hands-on projects and collaborative learning.";
const defaultKeywords =
  "online learning, digital courses, online courses, Learn from anywhere | Stevia";
const defaultOGURL = "https://steviapro.com";
const defaultOGImage = "https://steviapro.com/images/stevia.png";
const defaultOGTitle =
  "Boost your career - learn digital skills online | Stevia";

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  ogImage?: string;
}
const Head: React.FC<Props> = (props) => {
  const { title, description, keywords, url, ogImage } = props;
  const pageTitle = `Stevia | ${title}`;
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{pageTitle || ""}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/stevia.ico"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.webp"
      />
      <link rel="shortcut icon" href="/images/stevia.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/stevia.ico" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#000000" />

      <meta property="og:url" content={url || defaultOGURL} />
      <meta property="og:title" content={title || defaultOGTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:site" content={url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage || defaultOGImage} />
      <meta property="og:image" content={ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* <!-- Font awesome (icon) --> */}
      <script
        src="https://kit.fontawesome.com/6d51bc153f.js"
        crossOrigin="anonymous"
      ></script>

      {/* Google fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        // crossorigin={true}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>

      {/* <!-- Plyr CSS --> */}
      {/* <!-- <link rel="stylesheet" href="https://cdn.plyr.io/3.5.5/plyr.css"> --> */}
      <link rel="stylesheet" href="https://cdn.plyr.io/3.6.12/plyr.css" />
    </NextHead>
  );
};

export default Head;
