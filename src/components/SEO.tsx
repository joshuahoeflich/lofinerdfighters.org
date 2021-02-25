import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = (props) => {
  const { title, description } = props;
  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: "lo-fi nerdfighters",
  description: "Lofi Nerdfighter Art.",
};

export default SEO;
