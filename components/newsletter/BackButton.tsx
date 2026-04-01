"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import {
  getBackLink,
  BACK_BUTTON_CLASS,
  DEFAULT_BACK_LINK,
  BREVO_SESSION_KEY,
  getFromByReferrer,
  type BackLink,
} from "@/utils/backLinks";

export function BackButton({ from }: { from?: string }) {
  const [backLink, setBackLink] = useState<BackLink>(
    from !== undefined ? getBackLink(from) : DEFAULT_BACK_LINK,
  );

  useEffect(() => {
    if (from === undefined) {
      const stored = sessionStorage.getItem(BREVO_SESSION_KEY);
      if (stored) {
        setBackLink(getBackLink(stored));
        sessionStorage.removeItem(BREVO_SESSION_KEY);
      } else {
        const fromReferrer = getFromByReferrer();
        if (fromReferrer) setBackLink(getBackLink(fromReferrer));
      }
    }
  }, [from]);

  if (backLink.external) {
    return (
      <a
        href={backLink.href}
        rel="noopener noreferrer"
        className={BACK_BUTTON_CLASS}
      >
        <HiArrowLeft className="w-5 h-5" aria-hidden="true" />
        {backLink.label}
      </a>
    );
  }

  return (
    <Link href={backLink.href} className={BACK_BUTTON_CLASS}>
      <HiArrowLeft className="w-5 h-5" aria-hidden="true" />
      {backLink.label}
    </Link>
  );
}
