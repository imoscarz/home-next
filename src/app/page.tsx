import Brief from "@/components/portfolio/brief";
import Education from "@/components/portfolio/education";
import Hitokoto from "@/components/portfolio/hitokoto";
import NewsSection from "@/components/portfolio/news";
import ProjectsSection from "@/components/portfolio/projects-section/projects-section";
import Skills from "@/components/portfolio/skills";
import SocialLinks from "@/components/portfolio/socallinks";
import { CustomReactMarkdown } from "@/components/react-markdown";
import { BlurFade } from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY, DATA } from "@/data";
import { getDictionary, getLocaleFromSearchParams } from "@/lib/i18n";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ searchParams }: PageProps) {
  const locale = await getLocaleFromSearchParams(searchParams);
  const dict = await getDictionary(locale);
  
  // Select data based on locale
  const isEnglish = locale === "en";
  const name = isEnglish ? DATA.name : DATA.chinese.name;
  const subtitle = isEnglish ? DATA.subtitle : DATA.chinese.subtitle;
  const description = isEnglish ? DATA.description : DATA.chinese.description;
  const summary = isEnglish ? DATA.summary : DATA.chinese.summary;

  return (
    <main className="mx-auto flex min-h-dvh max-w-7xl flex-col space-y-8 px-6 py-8 pb-24 sm:space-y-10 sm:px-16 md:px-20 md:py-16 md:pt-14 lg:px-24 lg:py-20 xl:px-32 xl:py-24">
      {/* Hero Section */}
      <section id="hero" className="mt-16 sm:mt-28">
        <BlurFade delay={BLUR_FADE_DELAY * 1}>
          <Brief
            name={name}
            firstName={isEnglish ? DATA.firstName : undefined}
            surname={isEnglish ? DATA.surname : undefined}
            initials={DATA.initials}
            subtitle={subtitle}
            description={description}
            avatarUrl={DATA.avatarUrl}
            className="mx-auto w-full max-w-2xl space-y-8"
          />
        </BlurFade>
      </section>

      {/* Social Links Section */}
      <section id="social">
        <BlurFade delay={BLUR_FADE_DELAY * 1}>
          <SocialLinks socials={DATA.contact.social} />
        </BlurFade>
      </section>

      {/* Hitokoto Section */}
      <section id="hitokoto">
        <Hitokoto delay={BLUR_FADE_DELAY * 2} />
      </section>

      {/* About Section */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 1}>
          <h2 className="text-xl font-bold">{dict.home.sections.about}</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="prose text-muted-foreground dark:prose-invert max-w-full font-sans text-sm text-pretty [&_img]:my-0 [&_img]:inline-block [&_img]:h-[1em] [&_img]:w-auto [&_img]:align-baseline">
            <CustomReactMarkdown>{summary}</CustomReactMarkdown>
          </div>
        </BlurFade>
      </section>

      {/* News Section */}
      <section id="news">
        <NewsSection news={DATA.news} delay={BLUR_FADE_DELAY * 2} />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="w-full space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="bg-foreground text-background inline-block rounded-lg px-3 py-1 text-sm">
                  {dict.home.projects.badge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {dict.home.projects.title}
                </h2>
              </div>
            </div>
          </BlurFade>
          <ProjectsSection
            projects={DATA.projects}
            delay={BLUR_FADE_DELAY * 3}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">{dict.home.sections.skills}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Skills skills={DATA.skills} />
          </BlurFade>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-xl font-bold">{dict.home.sections.education}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <Education educations={DATA.education} />
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
