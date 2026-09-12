import { ImageResponse } from "next/og";

import { getProfile } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const profile = getProfile();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#09090b",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#fafafa",
            marginBottom: 16,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a1a1aa",
            marginBottom: 32,
          }}
        >
          {profile.title}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#818cf8",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {profile.tagline}
        </div>
      </div>
    ),
    size,
  );
}
