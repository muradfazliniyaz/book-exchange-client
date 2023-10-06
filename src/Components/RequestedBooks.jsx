import { RequestedBookContext } from "../Contexts/RequestedBookContext";
import { useContext } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const RequestedBooks = () => {
  const { requestedBookList } = useContext(RequestedBookContext);

  const handleDelete = (id) => {
    // deleteBook(id);
    console.log("The book was deleted. ID: ", id);
  };

  const showAllBook = () => {
    const template = requestedBookList.map((book, index) => {
      return (
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
            <CardText>{book?.explanation}</CardText>
            <Button
              className="edit-button"
              onClick={() => handleDelete(book.id)}
              variant="danger"
            >
              Book Sent
            </Button>
          </CardBody>
        </Card>
      );
    });

    return template;
  };

  return (
    <div className="container">
      <div className="row">{showAllBook()}</div>
    </div>
  );
};

export { RequestedBooks };
