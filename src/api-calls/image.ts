export interface UnsplashPhoto {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
}

const promiseCache = new Map<string, Promise<UnsplashPhoto[]>>();

export const fetchImagesByCategory = async (
  category: string,
): Promise<UnsplashPhoto[]> => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(category)}&per_page=12&client_id=${import.meta.env.VITE_ACCESS_KEY}`,
    );
    if (!res.ok)
      throw new Error(`Images API call failed with status ${res.status}`);
    const data: { results: UnsplashPhoto[] } = await res.json();
    return data.results;
  } catch (error) {
    console.error(`Images cannot be fetched: ${error}`);
    throw error;
  }
};

export const getCategoryImages = (
  category: string,
): Promise<UnsplashPhoto[]> => {
  let promise = promiseCache.get(category);
  if (!promise) {
    promise = fetchImagesByCategory(category).catch((err: unknown) => {
      promiseCache.delete(category);
      throw err;
    });
    promiseCache.set(category, promise);
  }
  return promise;
};
