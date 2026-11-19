import type { ReactNode } from "react";

/**
 * The orange ribbon label, the one on every category post under the award name.
 *
 * One per section, one or two words, never body copy: white on #FD5406 is 3.4:1, which
 * clears AA for large text only. The size is locked here so it cannot be used small.
 */
export default function Ribbon({ children }: { children: ReactNode }) {
  return (
    <span className="ribbon">
      <span className="ribbon__fold" aria-hidden />
      <span className="ribbon__body">{children}</span>
      <span className="ribbon__fold ribbon__fold--r" aria-hidden />
    </span>
  );
}
