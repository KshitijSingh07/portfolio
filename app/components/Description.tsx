import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function Description() {
  return (
    <Card className="shadow-xl border border-gray-200 dark:border-gray-700 rounded-2xl">
      <CardContent className="p-6 space-y-6">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          I&apos;m <strong>Kshitij Singh</strong>, a passionate <strong>Software Engineer and Full Stack Developer</strong> dedicated to building dynamic and efficient web applications. With a strong academic foundation in Computer Science &amp; Engineering from the Indian Institute of Information Technology (IIIT), Senapati, Manipur, I achieved a CGPA of 8.23 and consistently excelled in core subjects like C/C++ Programming.
        </p>

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          My technical toolkit spans across modern technologies. I&apos;m proficient in Java, C++, JavaScript, and Python. I specialize in web development using Next.js and the MERN Stack (MongoDB, Express.js, React.js, Node.js), along with Django. For UI/UX, I use React.js, HTML, CSS, Bootstrap, and Tailwind CSS. I also build powerful RESTful APIs and manage databases like MongoDB and MySQL.
        </p>

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          My strengths lie in Data Structures &amp; Algorithms, Object-Oriented Programming, and Competitive Programming. I&apos;m certified in DSA with Java. I&apos;m also comfortable using Git, GitHub, Render, and Postman — tools that support efficient development and deployment.
        </p>
      </CardContent>
    </Card>
  );
}
