// src/pages/Careers.tsx
import React from 'react';

interface Job {
  title: string;
  description: string;
  location: string;
  type: string;
}

const jobs: Job[] = [
  {
    title: 'Software Architect (SA)',
    description: 'ออกแบบระบบ Software Architecture ให้รองรับการ scale และ maintain ได้ระยะยาว พร้อมวางมาตรฐาน Clean Code และ DevOps',
    location: 'Remote',
    type: 'Part-time',
  },
  {
    title: 'Frontend Developer (React / Vue / Next.js)',
    description: 'พัฒนา UI ด้วย React หรือ Vue หรือ Next.js พร้อมเชื่อมต่อ API ฝั่ง Backend และออกแบบ UX ที่ตอบโจทย์ผู้ใช้งาน',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Backend Developer (Node.js / NestJS)',
    description: 'ดูแลและพัฒนา API ด้วย Node.js หรือ NestJS รวมถึงการออกแบบฐานข้อมูลและการจัดการ logic ธุรกิจ',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Full Stack Developer',
    description: 'ดูแลทั้งฝั่ง Frontend และ Backend ครบวงจร เหมาะกับทีมที่ต้องการคนที่จัดการได้ทั้งระบบ',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'DevOps Engineer',
    description: 'จัดการระบบ CI/CD, Monitoring, Server Management และ Infrastructure Automation บน Cloud',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'QA Engineer / Tester',
    description: 'ออกแบบ test cases, ทำ manual/automated testing เพื่อให้มั่นใจว่าระบบปล่อยออกไปโดยไม่มีบั๊กสำคัญ',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'AI Engineer / Data Scientist',
    description: 'พัฒนาโมเดล AI/ML ด้าน Matching, Recommendation และ NLP สำหรับงานอัตโนมัติ',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'UX/UI Designer',
    description: 'ออกแบบประสบการณ์ผู้ใช้ (UX) และหน้าตาแอป (UI) ให้สวยงาม ใช้งานง่าย และสื่อสารได้ชัดเจน',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Product Owner (PO)',
    description: 'ทำหน้าที่เป็นคนกลางระหว่างทีม dev และฝั่งธุรกิจ ช่วยจัดลำดับความสำคัญของฟีเจอร์และรับ feedback จากลูกค้า',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Digital Marketer / Growth Hacker',
    description: 'เชี่ยวชาญการทำ SEO, SEM, FB Ads, TikTok Ads, Conversion และวางกลยุทธ์การเติบโตแบบ Lean',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Content Creator / Content Writer (SEO)',
    description: 'เขียนบทความ Landing Page หรือคอนเทนต์แนว SEO ที่ตรงกับ search intent ของผู้ใช้งาน',
    location: 'Remote',
    type: 'Part-time / Freelance',
  },
  {
    title: 'Partnership Manager',
    description: 'สร้างและรักษาความสัมพันธ์กับพาร์ตเนอร์ธุรกิจ วางแผนความร่วมมือเชิงกลยุทธ์',
    location: 'Remote หรือเข้าออฟฟิศ (ตาก)',
    type: 'Full-time',
  },
  {
    title: 'Customer Success / Support',
    description: 'ให้บริการลูกค้า ตอบคำถาม แก้ปัญหา และช่วยให้ลูกค้าใช้ระบบได้อย่างมีประสิทธิภาพ',
    location: 'Remote หรือเข้าออฟฟิศ',
    type: 'Full-time',
  },
  {
    title: 'Accountant / Finance',
    description: 'จัดการบัญชีรายเดือน ภาษี รายงานงบการเงิน และระบบการเงินภายในบริษัท',
    location: 'เข้าออฟฟิศ (ตาก)',
    type: 'Full-time',
  },
  {
    title: 'HR / People Ops',
    description: 'สรรหาบุคลากร ดูแลวัฒนธรรมองค์กร กระบวนการ onboarding และ employee experience',
    location: 'Remote หรือ Hybrid',
    type: 'Part-time',
  },
  {
    title: 'Legal Advisor (ที่ปรึกษากฎหมาย)',
    description: 'ให้คำปรึกษาด้านสัญญา การจ้างงาน และความสอดคล้องกับกฎหมายเช่น PDPA',
    location: 'Remote',
    type: 'Freelance / Consulting',
  },
  {
    title: 'Generalist / Admin',
    description: 'ผู้ช่วยดูแลงานหลายด้าน เช่น อีเมล งานเอกสาร และประสานงานทั่วไป',
    location: 'Remote หรือเข้าออฟฟิศ',
    type: 'Full-time / Part-time',
  },
  {
    title: 'แม่บ้าน / พนักงานดูแลสำนักงาน',
    description: 'ดูแลความสะอาดของออฟฟิศ จัดเตรียมพื้นที่ทำงาน และดูแลอุปกรณ์สำนักงาน',
    location: 'เข้าออฟฟิศ (ตาก)',
    type: 'Full-time / Part-time',
  },
  {
    title: 'Intern ทุกสาย (Dev / AI / Marketing / UX / Biz / Finance / HR)',
    description: 'เปิดรับนักศึกษาฝึกงานในทุกสายงานที่เกี่ยวข้อง เพื่อเรียนรู้และเติบโตไปพร้อมกับเรา',
    location: 'Remote หรือเข้าออฟฟิศบางวัน',
    type: 'Internship',
  },
  {
    title: 'Project Manager / Scrum Master',
    description: 'วางแผน sprint, ติดตามความคืบหน้า และเป็นผู้ประสานระหว่างฝ่ายต่าง ๆ ในทีม dev',
    location: 'Remote หรือ Hybrid',
    type: 'Full-time',
  },
  {
    title: 'Customer Researcher / Business Analyst',
    description: 'วิจัยตลาด ศึกษา insight ของผู้ใช้ และวิเคราะห์ pain point เพื่อปรับปรุงผลิตภัณฑ์',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Investor Relations / Fundraising Manager',
    description: 'ดูแลการนำเสนอข้อมูลแก่ผู้ลงทุน วางแผนการระดมทุน และติดต่อกับ VC/Angel Investor',
    location: 'Remote',
    type: 'Freelance / Contract',
  },
];

const Careers = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-blue-800">
      <h1 className="text-3xl font-bold text-center mb-10">ร่วมเป็นส่วนหนึ่งกับทีมเรา</h1>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
        เรากำลังมองหาคนเก่งไฟแรงที่อยากร่วมสร้างเทคโนโลยีเพื่อเปลี่ยนแปลงระบบการศึกษาไทยและพัฒนาองค์กรให้เติบโตอย่างยั่งยืน
      </p>
      <div className="space-y-8">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {job.type} • {job.location}
            </p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <a
              href={`mailto:join@guson.co?subject=สมัครงานตำแหน่ง: ${encodeURIComponent(job.title)}`}
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              ส่งอีเมลสมัครงาน →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
