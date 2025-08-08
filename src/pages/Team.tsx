// src/pages/Team.tsx
import React, { useState } from 'react';

interface Member {
  name: string;
  title: string;
  description: string;
  image?: string;
}

const teamMembers: Member[] = [
  {
    name: 'เอกชัย ฉัตรพงศ์เลอเลิศ',
    title: 'CEO / COO',
    description:
      'ประธานเจ้าหน้าที่บริหาร (CEO) และหัวหน้าฝ่ายปฏิบัติการ (COO) จบการศึกษาระดับปริญญาโท สาขาวิทยาการคอมพิวเตอร์ จากมหาวิทยาลัยธรรมศาสตร์ ผู้ก่อตั้งและผู้บริหารระบบเทคโนโลยีของบริษัท ประสบการณ์หลากหลายทั้งด้าน Mobile/Web Development, OCR-RPA, และการบริหารทีมพัฒนาผลิตภัณฑ์ซอฟต์แวร์ โปรเจกต์หลัก: guson.co',
    image: '/images/aekkachai.jpg',
  },
  {
    name: 'วันชนะ ฉัตรพงศ์เลอเลิศ',
    title: 'CMO / CTO',
    description:
      'หัวหน้าฝ่ายการตลาด (CMO) และหัวหน้าฝ่ายเทคโนโลยี (CTO) กำลังศึกษาระดับปริญญาตรี สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยรามคำแหง ดูแลการสื่อสารการตลาด การโปรโมตแพลตฟอร์ม guson และวางกลยุทธ์การเติบโตของแบรนด์ในโลกดิจิทัล รวมถึงร่วมดูแลด้านเทคโนโลยีในฐานะ CTO',
    image: '/images/wanchana.jpg',
  },
  {
    name: 'จีระอนันต์ ปวงรัตนคุณ',
    title: 'Head of Finance & Accounting',
    description:
      'จบการศึกษาสาขาการบัญชี จากมหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา ตาก ดูแลระบบบัญชี การเงิน ภาษี และรายงานงบการเงินของบริษัท เชี่ยวชาญการจัดทำบัญชีรายเดือนและประสานงานกับหน่วยงานภายนอก',
    image: '/images/jiraanan.jpg',
  },
];

const Team = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <main className="relative bg-gray-50 py-16">
      {/* Moving background dots */}
      <div className="absolute inset-0 -z-10">
        <iframe
          src="https://particles.js.org/examples/simple.html"
          title="animated-background"
          className="w-full h-full border-none"
          style={{ pointerEvents: 'none' }}
        ></iframe>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-10">
          ทีมงานของเรา
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          เราคือกลุ่มคนที่มีเป้าหมายเดียวกันในการสร้างสรรค์เทคโนโลยีเพื่อสังคมไทย ทีมของเราประกอบไปด้วยผู้เชี่ยวชาญที่พร้อมเดินหน้าไปกับคุณในทุกโปรเจกต์
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center transition"
            >
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border cursor-pointer hover:scale-110 transition"
                  onClick={() => setModalImage(member.image!)}
                />
              )}
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h2>
              <p className="text-sm text-blue-500 font-medium mb-3">{member.title}</p>
              <p className="text-sm text-gray-600 text-left leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="fullsize"
            className="max-w-full max-h-full rounded shadow-lg"
          />
        </div>
      )}
    </main>
  );
};

export default Team;
