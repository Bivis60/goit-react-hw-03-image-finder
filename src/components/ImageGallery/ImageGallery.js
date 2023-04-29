import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imageData, openModal }) => {
  return (
    <ul className="gallery">
      <ImageGalleryItem images={imageData} openModal={openModal} />
    </ul>
  );
};
