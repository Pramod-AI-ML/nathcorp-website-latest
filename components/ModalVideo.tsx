"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  src: string;      // e.g. "/images/NathCorp-HA.mp4"
  poster?: string;  // optional poster image path
};

export default function ModalVideo({ open, onClose, src, poster }: Props) {
  useEffect(() => {
    // lock scroll when modal open
    if (typeof window === "undefined") return;
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    // Using portal-ish behavior: this will sit where component is rendered.
    // If you want an actual React portal, replace with createPortal.
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
        {/* close button */}
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/40 hover:bg-black/50 text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* video (rendered only when modal open) */}
        <div className="bg-black">
          <video
            key={src}                // important so it reloads when src changes
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            preload="metadata"       // don't preload full data
            className="w-full h-auto max-h-[80vh] bg-black"
          >
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </div>
  );
}
