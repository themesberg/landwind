// src/pages/About.tsx
import React from "react";

const About = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">เกี่ยวกับเรา</h1>
          <p className="text-lg">
            เบื้องหลังทุกเทคโนโลยีของเราคือความตั้งใจในการสร้างสรรค์สิ่งที่มีคุณค่าต่อสังคม
          </p>
        </div>
      </section>

      {/* Company Vision */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">วิสัยทัศน์ของเรา</h2>
        <p className="mb-4 leading-relaxed">
          บริษัท <strong>เหนือเทค จำกัด</strong> มุ่งมั่นที่จะเป็นผู้นำด้านเทคโนโลยีที่ช่วยขับเคลื่อนสังคมไทยให้ก้าวหน้า ด้วยการพัฒนาโซลูชันที่ใช้งานได้จริง เข้าใจผู้ใช้ และมีความรับผิดชอบต่อผู้คนและประเทศชาติ
        </p>
        <p className="mb-4 leading-relaxed">
          เราเชื่อว่าเทคโนโลยีที่ดีไม่ควรเป็นของคนกลุ่มใดกลุ่มหนึ่ง แต่ควรเป็นของทุกคน โดยเฉพาะอย่างยิ่งในด้านการศึกษาและการเข้าถึงโอกาสทางเศรษฐกิจ
        </p>
      </section>

      {/* Our Project */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">โปรเจกต์หลักของเรา</h2>
          <p className="mb-4 leading-relaxed">
            เราภูมิใจนำเสนอ <strong><a href="http://guson.co" target="_blank" rel="noopener noreferrer">Guson.co</a></strong> — แพลตฟอร์มที่เปิดโอกาสให้ติวเตอร์ไทยสามารถสร้างเว็บไซต์ของตัวเองได้ฟรี พร้อมระบบแนะนำตัวอัตโนมัติ ระบบจับคู่ และระบบ SEO ช่วยให้เข้าถึงนักเรียนได้มากขึ้น
          </p>
          <p className="leading-relaxed">
            ด้วยเป้าหมายที่จะเป็นแหล่งเรียนรู้ที่ยุติธรรมที่สุดในประเทศไทย Guson ไม่ใช่แค่แพลตฟอร์ม แต่คือพื้นที่ที่ทุกคนสามารถเติบโตไปพร้อมกัน
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">สิ่งที่เราให้ความสำคัญ</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>นวัตกรรม:</strong> เราเชื่อในพลังของการทดลองและการคิดใหม่</li>
          <li><strong>คุณภาพ:</strong> ทุกโปรเจกต์ต้องมีมาตรฐานสูง พร้อมใช้งานจริง</li>
          <li><strong>ความโปร่งใส:</strong> การทำงานของเราชัดเจน ตรวจสอบได้</li>
          <li><strong>การเติบโตของลูกค้า:</strong> ความสำเร็จของลูกค้าคือความสำเร็จของเรา</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">อยากรู้จักเรามากกว่านี้?</h2>
          <p className="mb-6 text-lg">
            ติดต่อเราเพื่อพูดคุย แชร์ไอเดีย หรือร่วมมือสร้างสรรค์สิ่งใหม่ ๆ
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded hover:bg-gray-100 transition"
          >
            ติดต่อทีมงาน
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;