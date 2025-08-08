import React, { useState } from 'react';

interface Project {
  name: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: 'guson.co',
    description:
      'แพลตฟอร์มสำหรับติวเตอร์ไทย สร้างเว็บไซต์ส่วนตัวได้ภายใน 5 นาที พร้อมระบบปักหมุด รีวิว และ SEO อัตโนมัติ',
    image: '/images/logo.png',
    link: 'https://www.guson.co',
  },
  {
    name: 'OCR-RPA ระบบอัตโนมัติ',
    description:
      'ระบบแปลงเอกสารและกรอกฟอร์มอัตโนมัติ ด้วย AI OCR + RPA ลดเวลาทำงานซ้ำซ้อนในองค์กรได้กว่า 70%',
    image: '/images/ocr-rpa.jpg',
  },
  {
    name: 'แอปจองคิวร้านเสริมสวย',
    description:
      'Mobile App สำหรับจองคิวร้านเสริมสวยแบบเรียลไทม์ พร้อมระบบชำระเงินและแจ้งเตือนอัตโนมัติ',
    image: '/images/beautyapp.jpg',
  },
];

const Portfolio = () => {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-700">ผลงานที่ผ่านมา</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <div className="cursor-pointer" onClick={() => setZoomImage(project.image)}>
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{project.name}</h2>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 text-sm font-medium hover:underline"
                >
                  เยี่ยมชมเว็บไซต์ →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox แบบพื้นฐาน */}
      {zoomImage && (
        <div
          onClick={() => setZoomImage(null)}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center cursor-zoom-out"
        >
          <img
            src={zoomImage}
            alt="Zoomed"
            className="max-w-4xl max-h-[90vh] rounded shadow-xl border-4 border-white"
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
