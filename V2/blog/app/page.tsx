import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto p-4 sm:p-8">
        <div className="bg-[#547792]/10 dark:bg-[#547792]/10 rounded-lg sm:rounded-2xl p-4 sm:p-8 backdrop-blur-sm border border-[#94B4C1]/20">
          <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Profile Photo */}
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-lg sm:rounded-2xl overflow-hidden flex-shrink-0 mx-auto md:mx-0">
              <Image
                src="/images/profilePhoto2024.jpg"
                alt="Shih-Yu Ma"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Text Content */}
            <div>
              <h1 className="text-5xl font-bold mb-4 text-[#213448] dark:text-[#ECEFCA]">Shih-Yu Ma</h1>
              <p className="text-xl text-[#213448] dark:text-[#94B4C1] mb-6">
                Master's in Information Design @ Taiwan Tech | HCI • Mixed Reality • Cognitive Science
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="/cv.pdf" 
                  className="px-6 py-2 bg-[#213448] text-[#ECEFCA] dark:bg-[#547792] dark:text-[#ECEFCA] rounded-md hover:bg-[#547792] dark:hover:bg-[#94B4C1] transition-colors"
                >
                  Download CV
                </a>
                <a 
                  href="mailto:shihyu.ma@example.com" 
                  className="px-6 py-2 border border-[#213448] text-[#213448] dark:border-[#94B4C1] dark:text-[#94B4C1] rounded-md hover:bg-[#213448] hover:text-[#ECEFCA] dark:hover:bg-[#94B4C1] dark:hover:text-[#213448] transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-[#213448] dark:text-[#94B4C1]">About Me</h2>
            <p className="mb-4 text-[#213448] dark:text-[#ECEFCA]">
              <strong className="text-[#213448] dark:text-[#ECEFCA]">Shih-Yu Ma</strong> recently graduated with a master's degree in Information Design from the <strong className="text-[#213448] dark:text-[#ECEFCA]">National Taiwan University of Science and Technology (Taiwan Tech)</strong>, under the guidance of Professor Neng-Hao Yu, this past August 2023.
            </p>
            <p className="mb-4 text-[#213448] dark:text-[#ECEFCA]">
              I am an enthusiastic researcher with a strong emphasis on cutting-edge technologies, encompassing areas such as <strong className="text-[#213448] dark:text-[#ECEFCA]">mixed reality</strong>, artificial intelligence, machine learning, <strong className="text-[#213448] dark:text-[#ECEFCA]">cognitive science</strong>, and <strong className="text-[#213448] dark:text-[#ECEFCA]">haptic devices</strong>.
            </p>
            <p className="mb-4 text-[#213448] dark:text-[#ECEFCA]">
              My academic journey began with a dual major in electrical engineering and industrial design during the bachelor's degree at Taiwan Tech, providing a well-rounded foundation for tackling complex challenges.
            </p>
            <p className="mb-4 text-[#213448] dark:text-[#ECEFCA]">
              From February to August 2023, I had the distinct honor of serving as a visiting scholar at the <strong className="text-[#213448] dark:text-[#ECEFCA]">University of Colorado Boulder</strong>, closely collaborating with Professor Tom Yeh. During this period, I actively contributed to a captivating project that seamlessly integrates mixed reality with functional near-infrared spectroscopy (fNIRS). This unique experience allowed me to explore the vast potential applications of integrating MR and fNIRS technology, further enhancing expertise.
            </p>
            <p className="mb-6 text-[#213448] dark:text-[#ECEFCA]">
              My commitment remains steadfast in expanding the frontiers of knowledge within these captivating domains. Thriving on collaboration with fellow experts, I aspire to catalyze impactful research and drive innovation in these exciting fields.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-[#213448] dark:text-[#94B4C1]">Education</h3>
            <ul className="list-disc pl-6 mb-6 text-[#213448] dark:text-[#ECEFCA]">
              <li>M.S. in Information Design, National Taiwan University of Science and Technology, 2023</li>
              <li>B.S. in Electrical Engineering & Industrial Design, National Taiwan University of Science and Technology</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 text-[#213448] dark:text-[#94B4C1]">Research Interests</h3>
            <ul className="list-disc pl-6 text-[#213448] dark:text-[#ECEFCA]">
              <li>Mixed Reality (MR)</li>
              <li>Human-Computer Interaction (HCI)</li>
              <li>Cognitive Science</li>
              <li>Haptic Devices</li>
              <li>Functional Near-Infrared Spectroscopy (fNIRS)</li>
              <li>Artificial Intelligence & Machine Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
