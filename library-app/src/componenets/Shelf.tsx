import React, { useState, ReactElement } from "react";
import "./Shelf.css";
import Book from './Book';

const Shelf = () => {
  const [children, setChildren] = useState<React.ReactElement[]>([]);

  function openBookModal() {
    const title: any = prompt('Title:');
    const color: any =  prompt('Hex Code Color:');
    const text: any = prompt('Book Text:');
    console.log(title, color, text)
    if(title != null && color != null && text != null ) {
      if(children.length < 10) {
        addBook(title, color, text);
      }
      else {
        alert("You have too many books");
      }
    }
    else {
      alert("Error: you did not put all the values");
    }
  }

  function addBook(title: string, color: string, text: string): void {
    // Generate a unique ID for the book
    const bookId: string = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36)
    console.log(typeof bookId)

    // Create a new Book component and add it to the state
    const newBook: JSX.Element = <Book key={bookId} id={bookId} title={title} color={color} text={text} />;
    setChildren(prevChildren => [...prevChildren, newBook]);
  }


  function removeBookAlert() {
    let position = prompt('position of book you want to remove 0 being farthest left');
    removeBook(Number(position))
  }
  function removeBook(index: number): void {
    // Remove the book at the specified index from the state
    setChildren(prevChildren => prevChildren.filter((_, i) => i !== index));
  }

  return (
    <div className="flex-wrapper">
      <button className="plus-button" onClick={openBookModal}>+</button>
      <div className="main-wrapper">
        {children.map((child, index) => (
          <div className="child-wrapper" key={index}>{child}</div>
        ))}
      </div>
      <button className="minus-button" onClick={() => removeBookAlert(0)}>-</button>
    </div>
  );
};

export default Shelf;