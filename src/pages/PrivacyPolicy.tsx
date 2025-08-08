import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">นโยบายความเป็นส่วนตัว (Privacy Policy)</h1>

      <p className="mb-4">
        บริษัทของเราให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้งานทุกคน โดยเราจะเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของคุณอย่างโปร่งใส และตามหลักกฎหมายที่เกี่ยวข้อง
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. ข้อมูลที่เราเก็บรวบรวม</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>ชื่อ-นามสกุล</li>
        <li>อีเมล เบอร์โทรศัพท์</li>
        <li>พฤติกรรมการใช้งานเว็บไซต์</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. การใช้ข้อมูล</h2>
      <p className="mb-4">
        เราใช้ข้อมูลเพื่อตอบสนองต่อการใช้งานของคุณ เช่น การติดต่อกลับ การพัฒนาบริการ และการวิเคราะห์เพื่อปรับปรุงประสบการณ์ผู้ใช้
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. การเปิดเผยข้อมูล</h2>
      <p className="mb-4">
        เราจะไม่ขาย แลกเปลี่ยน หรือถ่ายโอนข้อมูลส่วนบุคคลของคุณให้บุคคลที่สาม เว้นแต่ได้รับอนุญาตจากคุณ หรือกฎหมายกำหนดไว้
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. สิทธิของผู้ใช้งาน</h2>
      <p className="mb-4">
        คุณมีสิทธิ์ในการเข้าถึง แก้ไข หรือร้องขอให้ลบข้อมูลส่วนบุคคลของคุณได้ตลอดเวลา โดยติดต่อผ่านช่องทางที่ระบุในหน้า "ติดต่อเรา"
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. การปรับปรุงนโยบาย</h2>
      <p>
        เราอาจปรับปรุงนโยบายนี้เป็นระยะ ๆ โดยจะแจ้งให้ทราบผ่านหน้าเว็บไซต์
      </p>
    </div>
  );
};

export default PrivacyPolicy;
