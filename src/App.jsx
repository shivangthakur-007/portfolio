import { useState } from "react";
import Itemlist from "./A";

let nextId = 3;

const initialList = [
  { id: 0, title: "Big", seen: false },
  { id: 1, title: "small", seen: false },
  { id: 2, title: "large", seen: true },
];

function Bucketlist() {
  const [list, setlist] = useState(initialList);

function handleToggle(artworkId, nextseen) {
  setlist(
    list.map((artwork) => {
      if (artwork.id === artworkId) {
        return { ...artwork, seen: nextseen };
      } else {
        return artwork;
      }
    })
  );
}
  return (
    <>
      <h1>Artwork BucketList</h1>
      <h2>My List of art to see: </h2>
      <Itemlist artworks={list} onToggle={handleToggle} />
    </>
  );

}
export default Bucketlist;

