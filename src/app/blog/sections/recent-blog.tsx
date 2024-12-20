import Link from "next/link";
import Image from "next/image";

export default function RecentBlog() {
  return (
    <section className="flex flex-col gap-6">
      <p className="text-2xl font-medium">Recent Posts</p>

      <div className="flex flex-col gap-3">
        {recent.map((item, index) => (
          <RecentBlogCard key={index} image={item.image} header={item.header} />
        ))}
      </div>
    </section>
  );
}

function RecentBlogCard({ image, header }: Recent) {
  return (
    <Link href={`/`} className="flex gap-2.5">
      <Image
        src={image}
        alt=""
        height={80}
        width={80}
        className="rounded-[10px]"
      />

      <div className="flex flex-col justify-center">
        <p className="text-sm">{header}</p>
        <p className="text-xs text-[#9F9F9F]">17 Sept, 2024</p>
      </div>
    </Link>
  );
}

const recent: Recent[] = [
  {
    image: "/assets/r1.jpg",
    header: "Going all-in with millennial design",
  },
  {
    image: "/assets/r2.jpg",
    header: "Exploring new ways of decorating",
  },
  {
    image: "/assets/r3.png",
    header: "Handmade pieces that took time to make",
  },
  { image: "/assets/r4.png", header: "Modern home in Milan" },
  { image: "/assets/r5.png", header: "Colorful office redesign" },
];

interface Recent {
  image: string;
  header: string;
}