import PhotoSwipeLightbox from '/node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from '/node_modules/photoswipe/dist/photoswipe.esm.js';
import PhotoSwipeDynamicCaption from '/node_modules/photoswipe-dynamic-caption-plugin/dist/photoswipe-dynamic-caption-plugin.esm.min.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery',
  children: 'a',
  pswpModule: PhotoSwipe,
  paddingFn: (viewportSize) => {
    return {
      top: 30, bottom: 30, left: 70, right: 70
    }
  }
});



const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
  // Plugins options, for example:
  type: 'aside',
});

lightbox.init();