// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            พัฒนาธุรกิจของคุณด้วยเทคโนโลยีที่ล้ำสมัย
          </h1>
          <p className="text-lg md:text-xl mb-8">
            เราคือผู้เชี่ยวชาญด้าน Web, Mobile, AI และระบบอัตโนมัติ ที่พร้อมสร้างโซลูชันให้กับคุณ
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded hover:bg-gray-100 transition"
          >
            ติดต่อเรา
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">บริการของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(({ title, desc, icon }, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/services"
              className="text-blue-600 hover:underline text-sm"
            >
              ดูบริการทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            เริ่มต้นโปรเจกต์กับทีมมืออาชีพของเรา
          </h2>
          <p className="mb-6 text-lg">
            ปรึกษาเราฟรี ไม่มีค่าใช้จ่าย เราพร้อมให้คำแนะนำตั้งแต่ไอเดียจนถึงระบบเสร็จสมบูรณ์
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded hover:bg-gray-100 transition"
          >
            ขอใบเสนอราคา
          </Link>
        </div>
      </section>
    </main>
  );
};

const services = [
  {
    title: "พัฒนาเว็บไซต์",
    desc: "เว็บไซต์องค์กร ร้านค้า หรือระบบหลังบ้านแบบ Custom",
    icon: "🌐",
  },
  {
    title: "โมบายแอป",
    desc: "สร้างแอป iOS / Android รองรับ React Native หรือ Flutter",
    icon: "📱",
  },
  {
    title: "ระบบ AI & Automation",
    desc: "OCR, Chatbot, RPA, AI Matching และการประมวลผลอัตโนมัติ",
    icon: "🤖",
  },
];

export default Home;