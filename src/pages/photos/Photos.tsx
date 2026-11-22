import { Suspense, useState } from "react"
import "./Photos.css"
import { ErrorBoundary } from "../../ErrorBoundary";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import MotionButton from "../../components/Button/MotionButton";

const CATEGORIES = ['nature', 'travel', 'wallpapers'];

const Photos = () => {
  const [category, setCategory] = useState('nature');
  
  return (
    <div>
      <nav style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {CATEGORIES.map((item) => (
          <MotionButton key={item} onClick={() => setCategory(item)}>
            {item.toUpperCase()}
          </MotionButton>
        ))}
      </nav>

      {/* key={category} resets the ErrorBoundary when switching pages */}
      <ErrorBoundary key={category}>
        <Suspense fallback={<p>Loading {category} photos...</p>}>
          <ImageGrid category={category} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default Photos