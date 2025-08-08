import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">ไม่พบหน้าที่คุณต้องการ</h2>
      <p className="text-gray-600 mb-6">
        หน้าที่คุณพยายามเข้าชมไม่มีอยู่ในระบบ หรืออาจถูกย้ายไปแล้ว
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        กลับสู่หน้าแรก
      </Link>
    </div>
  );
};

export default NotFound;
