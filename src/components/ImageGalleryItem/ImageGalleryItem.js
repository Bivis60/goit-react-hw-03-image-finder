export const ImageGalleryItem = ({ images, openModal }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li
          className="gallery-item"
          key={id}
          onClick={event => openModal(largeImageURL, tags)}
        >
          <img loading="lazy" src={webformatURL} alt={tags} />
        </li>
      ))}
    </>
  );
};
