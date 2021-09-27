import { useState } from "react";
import "./styles.css";

export default function App() {
  var genres = {
    biography: [
      {
        img:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328011405l/10884.jpg",
        alt: "Einstein: His Life and Universe",
        author: "Walter Isaacson",
        rating: "3.5/5"
      },
      {
        img:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504936953l/35167685.jpg",
        alt: "Surely You're joking Mr.Feynman!",
        author: "Richard P. Feynman",
        rating: "5/5"
      },
      {
        img:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1518291452l/25541028.jpg",
        alt: "Elon Musk",
        author: "Ashlee Vance",
        rating: "4/5"
      }
    ],
    scifi: [
      {
        img:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1472119680l/27833670._SY475_.jpg",
        alt: "Dark Matter",
        author: "Blake Crouch",
        rating: "4.5/5"
      },
      {
        img:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1413706054l/18007564.jpg",
        alt: "The Martian",
        author: "Andy Weir",
        rating: "5/5"
      },
      {
        img:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618526890l/13335037._SY475_.jpg",
        alt: "Divergent",
        author: "Veronica Roth",
        rating: "3.5/5"
      }
    ],
    mystery: [
      {
        img:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630637257l/960._SX318_.jpg",
        alt: "Angels and Demons",
        author: "Dan Brown",
        rating: "4.5/5"
      },
      {
        img:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1164045516l/3590.jpg",
        alt: "The Adventures of Sherlock Holmes",
        author: "Sir Arthur Conan Doyle",
        rating: "5/5"
      },
      {
        img:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386922393l/16343.jpg",
        alt: "The Mysterious Affair at Styles",
        author: "Agatha Christie",
        rating: "5/5"
      }
    ]
  };

  var [selectedGenre, setGenre] = useState("biography");
  var genreList = Object.keys(genres);

  function onClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 style={{ marginTop: "3rem" }}>
        My
        <span style={{ color: "#60A5FA" }}> Books</span>
      </h1>
      <div className="btn-container">
        {genreList.map((genre) => (
          <button className="genres" onClick={() => onClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <div className="list-container">
        <ul className="list-item-container">
          {genres[selectedGenre].map((book) => (
            <li className="list-item-inline">
              <figure className="figure">
                <img className="list-image" src={book.img} alt={book.alt} />
                <figcaption>by {book.author}</figcaption>
                <figcaption>Rating: {book.rating}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: "3rem" }}>
        For more recommendations checkout my{" "}
        <a
          style={{ textDecoration: "none", color: "#60a5fa" }}
          href="https://www.goodreads.com/user/show/93287850-manvendra-singh"
          target="_blank"
          rel="noreferrer"
        >
          Bookshelves
        </a>
      </div>
    </div>
  );
}
