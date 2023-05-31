import { BookContext } from "../Contexts/BookContext";
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

const UserBookList = () => {
  const { bookList, deleteBook, editBook } = useContext(BookContext);

  const handleDelete = (id) => {
    deleteBook(id);
    console.log("The book was deleted. ID: ", id);
  };

  const handleEdit = (book) => {
    // Düzenleme işlemini gerçekleştirecek kod buraya gelecek
    console.log("Book updated: ", book);
  };

  const showAllBook = () => {
    const template = bookList.map((book, index) => {
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
              onClick={() => handleEdit(book)}
              variant="warning"
            >
              Edit
            </Button>
            <Button
              className="delete-button"
              onClick={() => handleDelete(book.id)}
              variant="danger"
            >
              Delete
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

export { UserBookList };
