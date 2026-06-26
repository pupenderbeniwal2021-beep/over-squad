import ImageCard from "./ImageCard";
import Loader from "./Loader";

function Gallery({ userData }) {
  if (userData.length === 0) {
    return <Loader />;
  }

  return (
    <>
      {userData.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </>
  );
}

export default Gallery;
