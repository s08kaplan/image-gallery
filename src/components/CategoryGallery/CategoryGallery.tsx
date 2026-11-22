import { Suspense } from "react";
import { ErrorBoundary } from "../../ErrorBoundary";
import ImageGrid from "../ImageGrid/ImageGrid";
import "./CategoryGallery.css";

export type PhotoCategory = "nature" | "travel" | "wallpapers";

interface CategoryGalleryProps {
  title: string;
  category: PhotoCategory;
  className?: string;
}

const CategoryGallery = ({
  title,
  category,
  className = "",
}: CategoryGalleryProps) => {
  const sectionClassName = ["category-gallery", className]
    .filter(Boolean)
    .join(" ");
  return (
    <section className={sectionClassName}>
      <h1 className="category-gallery__title">{title}</h1>
      <ErrorBoundary key={category}>
        <Suspense fallback={<p>Loading {category} photos...</p>}>
          <ImageGrid category={category} />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};

export default CategoryGallery;
