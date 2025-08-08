import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('ส่งข้อความเรียบร้อย! (คุณสามารถเชื่อมต่อ API ได้ภายหลัง)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-blue-800">
      <h1 className="text-3xl font-bold text-center mb-8">ติดต่อเรา</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">ชื่อของคุณ</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">อีเมล</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">ข้อความ</label>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            ส่งข้อความ
          </button>
        </form>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">ที่อยู่บริษัท</h2>
            <p className="text-gray-700">
              บริษัท เหนือเทค จำกัด<br />
              4 หมู่2 ตำบลหนองหลวง<br />
              อำเภออุ้มผาง จังหวัดตาก 63170 ประเทศไทย
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">ช่องทางการติดต่อ</h2>
            <p className="text-gray-700">
              {/* โทรศัพท์: 095-xxx-xxxx<br /> */}
              อีเมล: contact@nueatech.co.th<br />
              Facebook: <a href="https://facebook.com/guson.co" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/guson.co</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">เวลาทำการ</h2>
            <p className="text-gray-700">วันจันทร์ – ศุกร์ เวลา 09:00 – 17:00 น.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
