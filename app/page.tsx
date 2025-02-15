import Image from 'next/image';

import TypeAnimation from '@/components/type-animation';

export default function Home() {
  return (
    <div className="flex items-center justify-center mx-auto px-8 py-10 max-w-screen-lg min-h-full">
      <section>
        <div className="slide-enter-content flex flex-col items-center gap-6 mx-auto max-w-3xl text-center">
          <Image
            className="rounded-full"
            src="/avatar.png"
            alt="avatar"
            width={100}
            height={100}
          />
          <TypeAnimation
            className="min-h-7 text-xl"
            wrapper="p"
            cursor={false}
            speed={20}
            sequence={[`Hi，I'm Ming 👋`]}
          />
          <p className="text-4xl font-semibold">
          A Front-end Developer
          </p>
          <p >我喜欢学习新的技术和框架，目前正在寻找新的工作机会 🙏</p>
        </div>
      </section>
    </div>
  );
}
