import { FooterWrapper } from "./Footer.styled";
import { Container, Text, Paragraph } from "../../styles/global/default";
import { FOOTER_LINKS } from "../../constants/mockData";
import { FooterItemWrapper } from "./Footer.styled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date();
  return (
    <FooterWrapper>
      <Container>
        <div className="footer-top">
          <div className="footer-list grid">
            {FOOTER_LINKS.map((data) => {
              return <FooterItem key={data.id} data={data} />;
            })}
          </div>
        </div>
        <div className="footer-bottom flex items-center justify-center">
          <Paragraph className="copyright">
            &copy; {currentYear.getFullYear()} BingeHive. All rights reserved
          </Paragraph>
        </div>
      </Container>
    </FooterWrapper>
  );
};

const FooterItem = ({ data }) => {
  console.log(data);
  return (
    <FooterItemWrapper>
      <h4 className="item-title text-xl capitalize font-semibold">
        {data.link_title}
      </h4>
      {data?.link_type === "text" ? (
        <ul className="item-text-links">
          {data.links?.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.link_url}>
                  <Text className="capitalize font-medium">
                    {link.link_name}
                  </Text>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="item-icon-links flex items-center ">
          {data.links?.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  to={link.link_url}
                  className="item-icon-link bg-black10 inline-flex item-center justify-center"
                >
                  <img
                    src={`../../assets/icons${link.link_name}`}
                    alt={link.link_name}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </FooterItemWrapper>
  );
};
export default Footer;

FooterItem.propTypes = {
  data: PropTypes.object,
};
