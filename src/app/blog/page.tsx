
import BlogSection from "./sections/blog-section"
;
import { HeroHeader } from '@/components/hero-header'
import RecentBlog from "./sections/recent-blog";

export default function BlogPage() {
  return (
    <>
      <HeroHeader
         backgroundImage="/assets/backgroundimage1.png"
        breadcrumbItems={[
          { href: "/", label: "home" },
          { href: "/Contact", label: "Contact" },
        ]}
        title="Blog"
      />
     
      <div className="w-screen flex justify-center">
        <section className="w-[90%] flex flex-col lg:flex-row gap-[60px] py-[60px]">
          <BlogSection />
          <RecentBlog />
        </section>
      </div>
    </>
  );
}