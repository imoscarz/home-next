import { Metadata } from "next";

import { BangumiCard } from "@/components/portfolio/bangumi-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY } from "@/data";
import { getBangumiCollections } from "@/lib/bangumi";
import { env } from "@/lib/env";
import { getDictionary, getLocaleFromSearchParams } from "@/lib/i18n";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const locale = await getLocaleFromSearchParams(searchParams);
  const dict = await getDictionary(locale);
  
  return {
    title: dict.anime.metadata.title,
    description: dict.anime.metadata.description,
  };
}

export default async function AnimePage({ searchParams }: PageProps) {
  const locale = await getLocaleFromSearchParams(searchParams);
  const dict = await getDictionary(locale);
  
  const collections = await getBangumiCollections(
    env.bangumiUsername,
    env.bangumiToken,
    3 // watching
  );

  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-14 md:pt-32 md:pb-16 lg:pt-36 xl:pt-40">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="mb-8 space-y-3">
            <h1 className="text-3xl font-semibold tracking-tighter md:text-4xl">
              {dict.anime.title}
            </h1>
            <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
              {dict.anime.description}
            </p>
          </div>
        </BlurFade>

        {collections.length === 0 ? (
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="text-center py-12">
              <p className="text-muted-foreground">{dict.anime.noAnime}</p>
            </div>
          </BlurFade>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
            {collections.map((collection, idx) => (
              <BlurFade
                key={collection.subject.id}
                delay={BLUR_FADE_DELAY * 2 + idx * 0.02}
              >
                <BangumiCard collection={collection} locale={locale} />
              </BlurFade>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
