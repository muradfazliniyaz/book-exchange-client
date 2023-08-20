// import React from "react";
// import { useLocation } from "react-router-dom";
// import { NavBar } from "./Navbar";
// import { Footer } from "./Footer";
// import RequestButton from "./RequestButton";
// import { RequestPopOverPage } from "./RequestPopOverPage";
// import { useAuth0 } from "@auth0/auth0-react";
// import {
//   Card,
//   CardImg,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
// } from "reactstrap";

// const SearchResults = () => {
//   const location = useLocation();
//   const results = location.state?.results || [];
//   const { isAuthenticated, user } = useAuth0();

//   return (
//     <>
//       <NavBar />
//       {results.map((result) => (
//         <Card className="col-lg-2 col-4 col-sm-12 col-md-6 m-3">
//           <CardImg
//             alt="Card image cap"
//             src="https://www.kitapvadisi.com.tr/beyaz-dis-jlondon-tomurcuk-yay-dunya-klasikleri-zambak-hikaye-yayinlari-kolektif-456124-25-B.jpg"
//             top
//             width="100%"
//           />
//           <CardBody>
//             <CardTitle tag="h5">{result?.title}</CardTitle>
//             <CardSubtitle className="mb-2 text-muted" tag="h6">
//               Author: {result?.author}
//             </CardSubtitle>
//             <CardSubtitle className="mb-2 text-muted" tag="h6">
//               Category: {result?.category}
//             </CardSubtitle>
//             <div>
//               {isAuthenticated ? <RequestButton /> : <RequestPopOverPage />}
//             </div>
//           </CardBody>
//         </Card>
//       ))}
//       <Footer />
//     </>
//   );
// };

// export default SearchResults;

import React from "react";
import { useLocation } from "react-router-dom";
import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import RequestButton from "./RequestButton";
import { RequestPopOverPage } from "./RequestPopOverPage";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row, // Import Row from reactstrap
  Col, // Import Col from reactstrap
} from "reactstrap";

const SearchResults = () => {
  const location = useLocation();
  const results = location.state?.results || [];
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <NavBar />
      <Row> {/* Start a new row */}
        {results.map((result) => (
          <Col key={result.id} lg="3" md="4" sm="6" xs="12" className="mb-3 mt-3" > {/* Use Col to create columns */}
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://www.kitapvadisi.com.tr/beyaz-dis-jlondon-tomurcuk-yay-dunya-klasikleri-zambak-hikaye-yayinlari-kolektif-456124-25-B.jpg"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">{result?.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Author: {result?.author}
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Category: {result?.category}
                </CardSubtitle>
                <div>
                  {isAuthenticated ? <RequestButton /> : <RequestPopOverPage />}
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row> {/* End the row */}
      <Footer />
    </>
  );
};

export default SearchResults;

