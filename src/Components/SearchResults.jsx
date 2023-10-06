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
//   Row, // Import Row from reactstrap
//   Col, // Import Col from reactstrap
// } from "reactstrap";

// const SearchResults = () => {
//   const location = useLocation();
//   const results = location.state?.results || [];
//   const { isAuthenticated, user } = useAuth0();

//   return (
//     <>
//       <NavBar />
//       <div className="container">
//         <div className="row">
//           <Row>
//             {" "}
//             {/* Start a new row */}
//             {results.map((result) => (
//               <Card className="col-lg-2 col-4 col-sm-12 col-md-6 m-3">
//                 <CardImg
//                   alt="Card image cap"
//                   src="https://www.kitapvadisi.com.tr/beyaz-dis-jlondon-tomurcuk-yay-dunya-klasikleri-zambak-hikaye-yayinlari-kolektif-456124-25-B.jpg"
//                   top
//                   width="100%"
//                 />
//                 <CardBody>
//                   <CardTitle tag="h5">{result?.title}</CardTitle>
//                   <CardSubtitle className="mb-2 text-muted" tag="h6">
//                     Author: {result?.author}
//                   </CardSubtitle>
//                   <CardSubtitle className="mb-2 text-muted" tag="h6">
//                     Category: {result?.category}
//                   </CardSubtitle>
//                   <div>
//                     {isAuthenticated ? (
//                       <RequestButton />
//                     ) : (
//                       <RequestPopOverPage />
//                     )}
//                   </div>
//                 </CardBody>
//               </Card>
//             ))}
//           </Row>{" "}
//           {/* End the row */}
//         </div>
//       </div>
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
  Row,
  Col,
} from "reactstrap";

const SearchResults = () => {
  const location = useLocation();
  const results = location.state?.results || [];
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          {results.length === 0 ? (
            <div className="col-12 text-center mt-5">
              <h2 className="result-note">No results matching your search criteria were found.</h2>
            </div>
          ) : (
            <Row>
              {results.map((result) => (
                <Card className="col-lg-2 col-4 col-sm-12 col-md-6 m-3">
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
                      {isAuthenticated ? (
                        <RequestButton />
                      ) : (
                        <RequestPopOverPage />
                      )}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </Row>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
