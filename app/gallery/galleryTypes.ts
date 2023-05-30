type ImageGalleryItem = {
  original: string;
  thumbnail: string;
  originalTitle?: string;
  thumbnailTitle?: string;
  description?: string;
  srcSet?: string;
};

export type ImageGalleryProps = {
  items: ImageGalleryItem[];
  showFullscreenButton?: boolean;
  showPlayButton?: boolean;
  showBullets?: boolean;
  showThumbnails?: boolean;
  thumbnailPosition?: 'top' | 'right' | 'bottom' | 'left';
  startIndex?: number;
  slideDuration?: number;
  slideInterval?: number;
  lazyLoad?: boolean;
  infinite?: boolean;
  useBrowserFullscreen?: boolean;
  disableKeyDown?: boolean;
  disableSwipe?: boolean;
  disableThumbnailScroll?: boolean;
  disableArrowKeys?: boolean;
};