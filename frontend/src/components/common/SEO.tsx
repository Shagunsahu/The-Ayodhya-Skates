import { Helmet } from "react-helmet-async";

const BASE_URL = "https://glide-gain-growth.lovable.app";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const SITE_NAME = "The Ayodhya Skates";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: string;
}

const SEO = ({ title, description, path = "/", type = "website" }: SEOProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
    </Helmet>
  );
};

export default SEO;
