// src/pages/Blog.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  category: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    title: 'การศึกษาในยุคดิจิทัล : การเติบโตของการเรียนกับติวเตอร์ออนไลน์',
    excerpt: 'ในยุคดิจิทัลเทคโนโลยีเข้ามามีบทบาทสำคัญในชีวิตประจำวัน หนึ่งในนั้นคือการเรียนกับ "ติวเตอร์ออนไลน์" กลายเป็นทางเลือก...',
    slug: 'digital-education-growth',
    date: '1 ส.ค. 2025',
    category: 'บทความ',
    image: '/images/blog-1.jpg',
  },
  {
    title: 'เพิ่มประสิทธิภาพการเรียนรู้ด้วยบริการติวเตอร์',
    excerpt: 'ในยุคที่การศึกษาเปลี่ยนแปลงไปอย่างรวดเร็ว การเรียนรู้แบบตัวต่อตัวช่วยเสริมสร้างความเข้าใจได้อย่างลึกซึ้ง...',
    slug: 'tutor-service-benefits',
    date: '2 ส.ค. 2025',
    category: 'บทความ',
    image: '/images/blog-2.jpg',
  },
  {
    title: 'ควอตวิชาหรือติวกับติวเตอร์ส่วนตัว : เลือกแบบไหนเหมาะกับคุณ',
    excerpt: 'การเลือกเรียนกับติวเตอร์หรือเรียนรวมควรพิจารณาความเหมาะสมของแต่ละบุคคล มาดูข้อดีข้อเสียของทั้งสองทางเลือก...',
    slug: 'private-vs-group',
    date: '3 ส.ค. 2025',
    category: 'บทความ',
    image: '/images/blog-3.jpg',
  },
  {
    title: 'การศึกษาในยุคดิจิทัล : การเติบโตของการเรียนกับติวเตอร์ออนไลน์ (ซ้ำ)',
    excerpt: 'บทความนี้พูดถึงภาพรวมของตลาดการศึกษาออนไลน์ในประเทศไทยและพฤติกรรมของผู้เรียนในปัจจุบัน...',
    slug: 'digital-edu-2',
    date: '4 ส.ค. 2025',
    category: 'บทความ',
    image: '/images/blog-1.jpg',
  },
  {
    title: 'เพิ่มประสิทธิภาพการเรียนรู้ด้วยบริการติวเตอร์ (ซ้ำ)',
    excerpt: 'เรียนรู้แนวทางการปรับตัวให้เข้ากับการเรียนออนไลน์ และวิธีเลือกติวเตอร์ที่เหมาะสมกับตนเอง...',
    slug: 'tutor-benefit-2',
    date: '5 ส.ค. 2025',
    category: 'บทความ',
    image: '/images/blog-2.jpg',
  },
  {
    title: 'ควอตวิชาหรือติวกับติวเตอร์ส่วนตัว : เลือกแบบไหนเหมาะกับคุณ (ซ้ำ)',
    excerpt: 'เปรียบเทียบระหว่างการเรียนแบบกลุ่มกับแบบตัวต่อตัว เพื่อช่วยให้ผู้เรียนตัดสินใจง่ายขึ้น...',
    slug: 'private-vs-group-2',
    date: '6 ส.ค. 2025',
    category: 'บทความ',
    image: '/images/blog-3.jpg',
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="bg-white min-h-screen text-blue-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">บทความและข่าวสาร</h1>

        {/* Search & Filter */}
        <div className="flex flex-wrap items-center gap-2 justify-between mb-8">
          <div className="flex-1 flex flex-wrap gap-2">
            {['ทั้งหมด', 'บทความ', 'ข่าวสาร', 'โปรโมชั่น'].map((cat) => (
              <button
                key={cat}
                className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm hover:bg-blue-200"
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="ค้นหาบทความ..."
              className="bg-blue-100 text-sm rounded-full px-4 py-2 pr-10 text-blue-800 focus:outline-none"
            />
            <span className="absolute right-3 top-2.5 text-blue-500">🔍</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full inline-block mb-2">
                  {post.category}
                </span>
                <h2 className="text-lg font-semibold mb-1">
                  <Link to={`/blog/${post.slug}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-blue-500 mb-2">{post.date}</p>
                <p className="text-sm text-blue-700">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition ${
                num === currentPage
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-200 text-blue-800 hover:bg-blue-300'
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
