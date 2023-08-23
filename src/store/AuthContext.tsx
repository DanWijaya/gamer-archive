import React, { useState, createContext } from "react";

interface BookmarkedGames {
  [key: string] : any
}

const AuthContext = createContext({
  search: "",
  token: "",
  isLoggedIn: false,
  savedGames: [],
  signIn: (token : string) => {},
  signOut: () => {},
  searchGame: (search : string) => {},
  storeBookmarks: (bookmarkedGames : any) => {},
});

export const AuthContextProvider = (props : any) => {
  const initialToken: string = localStorage.getItem("token") ?? '';
  const [token, setToken] = useState<string>(initialToken);

  const initialSearch: string = localStorage.getItem("search") ?? '';
  const [search, setSearch] = useState<string>(initialSearch);

  const initialBookmarksJSON = localStorage.getItem("bookmarks");
  const initialBookmarks: any = initialBookmarksJSON ? JSON.parse(initialBookmarksJSON) : [];
  const [bookmarks, setBookmarks] = useState<any>(initialBookmarks);

  const userIsLoggedIn = !!token;

  const signInHandler = (token: string) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const signOutHandler = () => {
    setToken("");
    localStorage.removeItem('token');
  };

  const searchGameHandler = (newSearch: string) => {
    setSearch(newSearch);
    localStorage.setItem('search', search);
  };

  const storeBookmarksHandler = (bookmarkedGames: any) => {
    setBookmarks(bookmarkedGames);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  };

  const contextValue = {
    search: search,
    token: token,
    isLoggedIn: userIsLoggedIn,
    savedGames: bookmarks,
    signIn: signInHandler,
    signOut: signOutHandler,
    searchGame: searchGameHandler,
    storeBookmarks: storeBookmarksHandler
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
