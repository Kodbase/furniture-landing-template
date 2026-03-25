const images = import.meta.glob('../assets/images/gallery/*.jpg', { eager: true });

const galleryItems = Object.values(images).map((img, index) => ({
  id: index + 1,
  src: img.default,
  category: `Proje ${String(index + 1).padStart(2, '0')}`,
  title: `Proje Başlığı ${index + 1}`,
}));

export default galleryItems   