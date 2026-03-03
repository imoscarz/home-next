"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { getImageProps } from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

// const AvatarImage = React.forwardRef<
//   React.ElementRef<typeof AvatarPrimitive.Image>,
//   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
// >(({ className, ...props }, ref) => (
//   <AvatarPrimitive.Image
//     ref={ref}
//     className={cn("aspect-square h-full w-full", className)}
//     {...props}
//   />
// ));
// AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// ref: https://github.com/radix-ui/primitives/issues/2230#issuecomment-2568587173
type AvatarImageProps = {
  src?: string;
  alt: string;
  /**
   * Whether to skip Next.js image optimization.
   * Defaults to true (unoptimized) to conserve Vercel image optimization quota.
   * Small avatars (≤64px) typically don't need optimization.
   */
  unoptimized?: boolean;
  sizes?: string;
} & React.ComponentProps<typeof AvatarPrimitive.Image>;

function AvatarImage({ src, alt, className, unoptimized = true, sizes = "48px", ...rest }: AvatarImageProps) {
  if (!src) return null;
  // Derive the rendered pixel size from the sizes string.
  // Match the *last* `\d+px` segment, which is the fallback (no-condition) value
  // in a `sizes` string like `(max-width: 768px) 48px, 96px`. Falling back to 48.
  const requestedPx = (() => {
    const matches = [...String(sizes).matchAll(/(\d+)px/g)];
    const last = matches[matches.length - 1];
    const parsedSize = last ? parseInt(last[1], 10) : 48;
    return Number.isFinite(parsedSize) && parsedSize > 0 ? parsedSize : 48;
  })();

  // If the src is a GitHub avatar, add s=<size> query to reduce upstream bytes
  let finalSrc = src;
  try {
    const u = new URL(src);
    if (u.hostname === "avatars.githubusercontent.com") {
      const hasSize = u.searchParams.has("s") || u.searchParams.has("size");
      if (!hasSize) {
        u.searchParams.set("s", String(requestedPx));
      }
      finalSrc = u.toString();
    }
  } catch {
    // ignore invalid URL (likely local image path)
  }

  const { props } = getImageProps({ src: finalSrc, alt, fill: true, sizes, unoptimized });
  return <AvatarPrimitive.Image {...props} {...rest} className={className} />;
}

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "bg-muted flex h-full w-full items-center justify-center rounded-full",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
