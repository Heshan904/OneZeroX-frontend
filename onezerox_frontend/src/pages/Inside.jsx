import React from 'react';
import NaviBar from '../component/NaviBar';
import Footer from '../component/Footer';
import './inside.css';
import ImageSlider from '../component/ImageSlider';

const formatDriveLink = (id) => `https://drive.google.com/uc?export=view&id=${id}`;

const galleryItems = [
  {
    id: 1,
    title: 'Traveling',
    description: 'Road trip to singharaja sooriyakanda.',
    images: [
      formatDriveLink('1oaK1RU7L5La3CbkrD1Lv81oYMLpAqR5e'),
      formatDriveLink('1I7J3_Tdk7UZnbrx9qSCGijUgIJdTTzKY'),
      formatDriveLink('1Xvf1d7I5BP-JVYn-NnrNMPj--xrn9aNN'),
      formatDriveLink('1yMOTeiqUYMOmu-5eDwsEbepS7Ne_yRGZ'),
      formatDriveLink('14njx3iSWXdC9zOskKqm-q9ytnukJx83M')
    ]
  },
  {
    id: 1,
    title: 'Traveling',
    description: 'Road trip to singharaja sooriyakanda.',
    images: [
      formatDriveLink('1oaK1RU7L5La3CbkrD1Lv81oYMLpAqR5e'),
      formatDriveLink('1I7J3_Tdk7UZnbrx9qSCGijUgIJdTTzKY'),
      formatDriveLink('1Xvf1d7I5BP-JVYn-NnrNMPj--xrn9aNN'),
      formatDriveLink('1yMOTeiqUYMOmu-5eDwsEbepS7Ne_yRGZ'),
      formatDriveLink('14njx3iSWXdC9zOskKqm-q9ytnukJx83M')
    ]
  }
];

function Inside() {
  return (
    <>
      <NaviBar />
      <div className="gallery-container">
        <h1 className="gallery-title">Our Gallery</h1>
        <p className="gallery-subtitle">A glimpse into our workspace, culture, and creations.</p>

        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-card">
              <ImageSlider images={item.images} interval={4000} />
              <div className="gallery-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Inside;
