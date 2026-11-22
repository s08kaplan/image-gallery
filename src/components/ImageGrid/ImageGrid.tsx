import { use, useEffect, useState } from "react";
import { getCategoryImages, type UnsplashPhoto } from "../../api-calls/image";
import "./ImageGrid.css";

interface ImageGridProps {
  category: string;
}

const ImageGrid = ({ category }: ImageGridProps) => {
  const images = use(getCategoryImages(category));
  const [selectedPhoto, setSelectedPhoto] = useState<UnsplashPhoto | null>(null);

  useEffect(() => {
    setSelectedPhoto(null);
  }, [category]);

  useEffect(() => {
    if (!selectedPhoto) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedPhoto]);

  return (
    <>
      <section className="gallery-grid" aria-label={`${category} photo gallery`}>
        {images.map((item) => {
          const photographer = item.user?.name || item.alt_description || category;
          const altText = item.alt_description || `Photo by ${photographer}`;

          return (
            <article className="gallery-card" key={item.id}>
              <div
                className="gallery-card__media"
                role="button"
                tabIndex={0}
                aria-label={`View photo by ${photographer}`}
                onClick={() => setSelectedPhoto(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedPhoto(item);
                  }
                }}
              >
                <img
                  className="gallery-card__img"
                  src={item.urls.small}
                  alt={altText}
                  loading="lazy"
                />
              </div>
              <p className="gallery-card__caption">{photographer}</p>
            </article>
          );
        })}
      </section>

      <div
        className={`lightbox ${selectedPhoto ? "lightbox--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={
          selectedPhoto
            ? `Photo by ${selectedPhoto.user?.name || selectedPhoto.alt_description || category}`
            : "Image preview"
        }
        onClick={() => setSelectedPhoto(null)}
      >
        <div
          className="lightbox__panel"
          onClick={(e) => e.stopPropagation()}
        >
          {selectedPhoto && (
            <>
              <img
                className="lightbox__img"
                src={selectedPhoto.urls.regular}
                alt={
                  selectedPhoto.alt_description ||
                  `Photo by ${selectedPhoto.user?.name || category}`
                }
              />
              <div className="lightbox__footer">
                <span>
                  {selectedPhoto.user?.name ||
                    selectedPhoto.alt_description ||
                    category}
                </span>
                <button
                  type="button"
                  className="lightbox__close"
                  onClick={() => setSelectedPhoto(null)}
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageGrid;