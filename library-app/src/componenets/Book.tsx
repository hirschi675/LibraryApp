import "./Book.css";

interface Props {
  id?: string;
  title?: string;
  color?: string;
  text?: string;
}

function showPages(text: string): void {
  alert(text);
}

const Book = ({
  id = "0",
  title = "Book Title",
  color = "#ffffff",
  text = "asdf asdf asdf"
}: Props) => {
  return (
    <div id={id} onClick={() => showPages(text)} className="book-styles" style={{backgroundColor: color}}>
     {title}
    </div>
  );
};

export default Book;
