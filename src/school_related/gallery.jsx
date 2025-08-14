// src/components/Gallery.js

import React from 'react';
import '../assets/css/gallery.css';

// Import your gallery images here
import GalleryImage1 from '../assets/image/gallery_1.jpeg';
import GalleryImage2 from '../assets/image/gallery_2.jpeg';
import GalleryImage3 from '../assets/image/gallery_3.jpeg';
import GalleryImage4 from '../assets/image/gallery_4.jpeg';
import GalleryImage5 from '../assets/image/gallery_5.jpeg';
import GalleryImage6 from '../assets/image/gallery_6.jpeg';
import GalleryImage7 from '../assets/image/gallery_7.jpeg';
import GalleryImage8 from '../assets/image/gallery_8.jpeg';

const galleryPhotos = [
    { id: 1, src: GalleryImage1, alt: "বিনদন্মুলক কার্যক্রম" },
    { id: 2, src: GalleryImage2, alt: "শারীরিক ব্যায়াম" },
    { id: 3, src: GalleryImage3, alt: "শ্রেণিকক্ষ" },
    { id: 4, src: GalleryImage4, alt: "বিজ্ঞান মেলা" },
    { id: 5, src: GalleryImage5, alt: "শ্রেণিকক্ষ" },
    { id: 6, src: GalleryImage6, alt: "কম্পিউটার ল্যাব" },
    { id: 7, src: GalleryImage7, alt: "পুরস্কার বিতরণী" },
    { id: 8, src: GalleryImage8, alt: "শিক্ষার্থীদের সমাবেশ" },
    // Add more images as needed
];

const Gallery = () => {
    return (
        <div className="gallery-page-main">
            <h1 className="page-main-heading">আমাদের গ্যালারি</h1>
            <div className="gallery-content-wrapper">
                <p className="gallery-intro-paragraph">
                    আমাদের বিদ্যালয়ের বিভিন্ন কার্যক্রম ও স্মরণীয় মুহূর্তের ছবি এখানে দেখুন। এই ছবিগুলো আমাদের শিক্ষার্থীদের অর্জন, উৎসব এবং প্রতিদিনের শিক্ষাজীবনের প্রতিচ্ছবি।
                </p>

                <div className="image-grid">
                    {galleryPhotos.map(photo => (
                        <div className="image-item" key={photo.id}>
                            <img src={photo.src} alt={photo.alt} className="gallery-image" />
                            <div className="image-overlay">
                                <p className="image-caption">{photo.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;