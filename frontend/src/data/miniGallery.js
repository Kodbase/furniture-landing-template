const images = import.meta.glob('../assets/images/gallery/*.jpg', { eager: true });

const galleryData = [
  { category: 'Köşe', title: 'Jesofin' },
  { category: 'Kanepe', title: 'Relax' },
  { category: 'Kanepe', title: 'Confort' },
  { category: 'Kanepe', title: 'Roma' },
  { category: 'köşe', title: 'Jesofin' },
  { category: 'Kanepe', title: 'Jesofin' },
];

const galleryItems = Object.values(images).map((img, index) => ({
  id: index + 1,
  src: img.default,
  category: galleryData[index]?.category || `Proje ${index + 1}`,
  title: galleryData[index]?.title || `Proje Başlığı ${index + 1}`,
}));

export default galleryItems;