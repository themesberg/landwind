import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'ครูแอน',
    role: 'ติวเตอร์ภาษาอังกฤษ',
    quote:
      'แพลตฟอร์ม guson ทำให้ดิฉันมีเว็บไซต์เป็นของตัวเองได้ในไม่กี่นาที นักเรียนสามารถหาดิฉันเจอง่ายขึ้น และมีงานสอนเข้ามาอย่างต่อเนื่อง',
    avatar: '/images/teacher1.jpg',
  },
  {
    name: 'คุณบี',
    role: 'เจ้าของธุรกิจ SME',
    quote:
      'ทางทีมเหนือเทคช่วยสร้างระบบจัดการออเดอร์ที่ใช้งานง่าย ทำให้เราลดเวลาการจัดการลงได้มากกว่า 50%',
    avatar: '/images/client1.jpg',
  },
  {
    name: 'ครูต้น',
    role: 'ติวเตอร์คณิตศาสตร์',
    quote:
      'ผมใช้ระบบ AI SEO ของ guson ในการโปรโมตคอร์สของผม และมันได้ผลเกินคาด ตอนนี้มีนักเรียนใหม่สมัครเข้ามาทุกสัปดาห์',
    avatar: '/images/teacher2.jpg',
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-10">รีวิวจากลูกค้า</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
          >
            {t.avatar && (
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
            )}
            <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
            <h3 className="font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
