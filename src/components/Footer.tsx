// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold">บริษัท เหนือเทค จำกัด</h3>
          <p className="text-sm mt-1">นวัตกรรมเพื่อคนไทย — Thai Innovation for Everyone</p>

          <div className="mt-4 text-sm space-y-1">
            <p>เลขทะเบียนนิติบุคคล: 0635568000993</p>
            <p>Email: <a href="mailto:contact@nueatech.co.th" className="underline">contact@nueatech.co.th</a></p>
            <p>สำนักงานใหญ่: 4 บ้านเซอทะ หมู่ 2 ตำบลหนองหลวง อำเภออุ้มผาง จังหวัดตาก 63170</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-700 pt-6">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} บริษัท เหนือเทค จำกัด. สงวนลิขสิทธิ์.
          </p>

          <div className="flex gap-4">
            <Link to="/privacy" className="hover:underline">
              ข้อกำหนดการใช้งาน / Privacy Policy
            </Link>
            <Link to="/careers" className="hover:underline">
              ร่วมงานกับเรา
            </Link>
            <a href="https://facebook.com/gusonplatform" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
