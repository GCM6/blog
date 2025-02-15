import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '关于',
};

export default function About() {
  return (
    <div className="mx-auto max-w-screen-lg px-8 py-10">
      <h1 className="mb-10 text-3xl font-semibold">关于</h1>

      <div className="slide-enter-content prose dark:prose-invert space-y-10">
        <section>
          <h3>我是谁</h3>
          <p>
            嗨，我是 Ming，一个 Web 开发者，正在往大前端方向努力，喜欢玩游戏，喜欢学习新的技术和框架。
          </p>
        </section>

        <section>
          <h3>我在做什么</h3>
          <p>
            目前我正在学习react、nextjs、vue3，也在学习 AI 相关的知识
          </p>
        </section>

        <section>
          <h3>我的技能</h3>

          <div>
            <p className="font-semibold">前端</p>
            <ul>
              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--html]" />
                HTML、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--css]" />
                CSS、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--javascript]" />
                JavaScript，熟练使用。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--typescript]" />
                TypeScript
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--react-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--react-light] hidden dark:inline-block" />
                React、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vuejs-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vuejs-light] hidden dark:inline-block" />
                Vue、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--svelte]" />
                Svelte，啥都想尝试
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--nextjs-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--nextjs-light] hidden dark:inline-block" />
                NextJS，能够进行独立项目开发，目前正在努力学习中
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--webpack-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--webpack-light] hidden dark:inline-block" />
                Webpack、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vite-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vite-light] hidden dark:inline-block" />
                Vite
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">后端</p>
            <ul>
              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--nestjs-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--nestjs-light] hidden dark:inline-block" />
                NestJS，规划后面进行学习
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--postgresql-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--postgresql-light] hidden dark:inline-block" />
                PostgreSQL、
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--prisma]" />
                Prisma，能写简单的 SQL语句，目前基本使用 ORM 框架。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--docker]" />
                Docker，正在学习
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--nginx]" />
                Nginx，正在学习
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">其它</p>
            <ul>
              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--git]" />
                Git，能分清 merge 和 rebase。
              </li>

              <li>
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vscode-dark] dark:hidden" />
                <i className="mr-1 translate-y-0.5 icon-[skill-icons--vscode-light] hidden dark:inline-block" />
                VSCode，写代码最爱
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3>联系我</h3>
          <p>你可以通过以下方式联系我 👇</p>

          <div className="space-x-3">
            <Link
              className="hover:opacity-75 transition-opacity"
              href="https://github.com/GCM6/blog"
              target="_blank"
            >
              <i className="size-7 icon-[skill-icons--github-dark] dark:hidden" />
              <i className="size-7 icon-[skill-icons--github-light] hidden dark:inline-block" />
            </Link>

            <Link
              className="hover:opacity-75 transition-opacity"
              href="mailto:mingicelucky@gmail.com"
            >
              <i className="size-7 icon-[skill-icons--gmail-dark] dark:hidden" />
              <i className="size-7 icon-[skill-icons--gmail-light] hidden dark:inline-block" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
