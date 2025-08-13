import React from 'react';
import NaviBar from '../component/NaviBar';
import Footer from '../component/Footer';
import './inside.css';
import ImageSlider from '../component/ImageSlider';

// Replace with your actual Cloudinary image URLs
const galleryItems = [
  {
    id: 1,
    title: 'Traveling',
    description: 'Road trip to Sinharaja Sooriyakanda.',
    images: [
      'https://res.cloudinary.com/da2wbtci0/image/upload/v1755109184/DSC_0712_ibzjny.jpg',
      'https://res.cloudinary.com/da2wbtci0/image/upload/v1755109168/DSC_0764_du05ea.jpg',
      'https://res.cloudinary.com/da2wbtci0/image/upload/v1755109162/DSC_0756_wsmncx.jpg',
      'https://res.cloudinary.com/da2wbtci0/image/upload/v1755109157/DSC_0715_j5lgys.jpg'
    ]
  },
  {
    id: 2,
    title: 'Party time',
    description: 'Enjoyble time with our OneZeroX team.',
    images: [
      'https://res.cloudinary.com/da2wbtci0/image/upload/v1755112359/MOV_0774.mp4_snapshot_03.46__2025.08.12_01.38.52_a94yby.jpg',
      'https://res.cloudinary.com/da2wbtci0/image/upload/v1755112358/MOV_0773.mp4_snapshot_04.08__2025.08.12_01.36.48_jqdys1.jpg',
      'https://res.cloudinary.com/da2wbtci0/image/upload/v1755112354/MOV_0773.mp4_snapshot_00.05__2025.08.12_01.34.41_xtz2pa.jpg'
    ]
  },
  {
    id: 2,
    title: 'Work time',
    description: 'Work colabaratly.',
    images: [
      'https://res.cloudinary.com/da2wbtci0/image/upload/v1755112586/MOV_0771.mp4_snapshot_03.17__2025.08.12_01.40.03_yrasfh.jpg',
      'https://res.cloudinary.com/da2wbtci0/image/upload/v1755112587/MOV_0771.mp4_snapshot_01.31__2025.08.12_01.39.38_jokk2x.jpg',
      'https://res.cloudinary.com/da2wbtci0/image/upload/v1755112574/MOV_0771.mp4_snapshot_00.57__2025.08.12_01.39.27_utujic.jpg'
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
