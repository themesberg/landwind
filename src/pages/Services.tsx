import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaRobot, FaLightbulb } from 'react-icons/fa';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'พัฒนาเว็บไซต์และระบบ',
    description:
      'ออกแบบและพัฒนาเว็บไซต์ / ระบบหลังบ้าน (Backoffice) / เว็บแอปพลิเคชันแบบครบวงจร รองรับทั้ง Desktop และ Mobile',
    icon: <FaLaptopCode size={40} className="text-blue-500" />,
  },
  {
    title: 'พัฒนาแอปมือถือ',
    description:
      'พัฒนา Mobile Application ทั้ง Android และ iOS ด้วยเทคโนโลยี React Native หรือ Flutter พร้อมดูแลตั้งแต่ UX จนถึงขึ้น Store',
    icon: <FaMobileAlt size={40} className="text-blue-500" />,
  },
  {
    title: 'AI และระบบอัตโนมัติ',
    description:
      'สร้างระบบ AI, OCR, RPA และระบบ Chatbot ที่ช่วยลดต้นทุน เพิ่มประสิทธิภาพในการทำงานภายในองค์กร',
    icon: <FaRobot size={40} className="text-blue-500" />,
  },
  {
    title: 'ที่ปรึกษาด้านเทคโนโลยี',
    description:
      'ให้คำปรึกษาการวางระบบ วางแผนเทคโนโลยี การคัดเลือกเครื่องมือ การจ้างทีม dev และการ scale ธุรกิจดิจิทัล',
    icon: <FaLightbulb size={40} className="text-blue-500" />,
  },
];

const Services = () => {
  return (
    <div className="relative bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">บริการของเรา</h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          เรามุ่งมั่นพัฒนาบริการที่ตอบโจทย์ธุรกิจในทุกมิติ ทั้งด้านเทคโนโลยี นวัตกรรม และการให้คำปรึกษาอย่างมืออาชีพ
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 text-left">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-lg border border-gray-200 p-6 transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-lg font-semibold text-blue-600 mb-2">{service.title}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
