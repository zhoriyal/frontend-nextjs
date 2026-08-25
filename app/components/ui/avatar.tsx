"use client";

import { cn } from "@/lib/utils";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

/**
 * Built on @radix-ui/react-avatar. Its main advantage over a plain `<img>`:
 * `AvatarImage` automatically hides itself and `AvatarFallback`
 * automatically shows itself when the image fails to load (404, network
 * error, etc) — Radix tracks `idle` -> `loading` -> `loaded`/`error`
 * internally, no manual `onError` handler needed at the call site.
 * `AvatarFallback` also accepts a `delayMs` prop (left at its default here,
 * so the fallback shows immediately with no delay) — set it if you want to
 * avoid a fallback "flash" while a fast-loading image is still in flight.
 *
 * No size variants — `Avatar` defaults to 40px (`h-10 w-10`) and every
 * other size is a one-off `className` override at the call site (e.g.
 * `h-32 w-32` for a profile-page avatar, `h-20 w-20` for a team card).
 *
 * `AvatarFallback`'s background is `bg-surface-alt`, not the source's
 * `bg-muted` — this bundle's `--muted` token is a dark slate meant for
 * muted *text*, not a background; `surface-alt` is the actual light-neutral
 * equivalent.
 */
export const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
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

export const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "bg-surface-alt flex h-full w-full items-center justify-center rounded-full",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
