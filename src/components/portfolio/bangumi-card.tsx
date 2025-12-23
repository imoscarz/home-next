import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { BangumiCollection } from "@/lib/bangumi";

interface BangumiCardProps {
  collection: BangumiCollection;
  locale: "en" | "zh";
}

export function BangumiCard({ collection, locale }: BangumiCardProps) {
  const { subject } = collection;
  const displayName = locale === "zh" && subject.name_cn ? subject.name_cn : subject.name;
  const bangumiUrl = `https://bgm.tv/subject/${subject.id}`;
  
  // Get episode info from infobox
  const totalEpisodes = subject.total_episodes || 0;
  const watchedEpisodes = collection.ep_status;

  return (
    <Link
      href={bangumiUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-border bg-card focus-visible:ring-ring block h-full overflow-hidden rounded-xl border shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:outline-none"
    >
      <div className="flex h-full flex-col">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
          {subject.images?.large && (
            <Image
              src={subject.images.large}
              alt={displayName}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          )}
        </div>
        
        <div className="flex flex-1 flex-col p-3 sm:p-4">
          <h3 className="text-sm font-medium tracking-tight line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {displayName}
          </h3>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            {totalEpisodes > 0 && (
              <span>
                {locale === "zh" ? "进度" : "Progress"}: {watchedEpisodes}/{totalEpisodes}
              </span>
            )}
            {subject.rating?.score > 0 && (
              <Badge variant="secondary" className="text-xs">
                ⭐ {subject.rating.score.toFixed(1)}
              </Badge>
            )}
          </div>

          {subject.date && (
            <p className="text-xs text-muted-foreground mt-auto">
              {new Date(subject.date).getFullYear()}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
