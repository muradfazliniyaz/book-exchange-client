import { BookContext } from "../Contexts/BookContext";
import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import RequestButton from "./RequestButton";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { RequestPopOverPage } from "./RequestPopOverPage";

const LastAddedList = () => {
  const { bookList } = useContext(BookContext);
  const { isAuthenticated, user } = useAuth0();

  const showAllBook = () => {
    const template = bookList.map((book, index) => {
      return (
        <>
          <Card className="col-lg-2 col-4 col-sm-12 col-md-6 m-3">
            <CardImg
              alt="Card image cap"
              src="https://www.kitapvadisi.com.tr/beyaz-dis-jlondon-tomurcuk-yay-dunya-klasikleri-zambak-hikaye-yayinlari-kolektif-456124-25-B.jpg"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">{book?.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Author: {book?.author}
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Category: {book?.category}
              </CardSubtitle>
              {/* <CardText>{book?.explanation}</CardText> */}
              <div>
                {isAuthenticated ? <RequestButton /> : <RequestPopOverPage />}
              </div>
            </CardBody>
          </Card>
        </>
      );
    });

    return template;
  };

  return (
    <div className="container last-added">
      <h1 className="recently-added">Recently Added</h1>
      <div className="row">{showAllBook()}</div>
    </div>
  );
};

export { LastAddedList };
