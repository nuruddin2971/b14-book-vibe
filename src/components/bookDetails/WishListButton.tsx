"use client";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { BooksContext } from "@/context/BookContext";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleAddToWishlist = () => {
    console.log("read book btn triggered", book);

    setWishlist([...wishlist, book]);
    toast.success(`You have added "${book.bookName}" to your wishlist`);
  };
  return (
    <button
      className="btn btn-primary flex-1"
      onClick={() => handleAddToWishlist()}
    >
      Add to Wishlist
    </button>
  );
};

export default WishListButton;
