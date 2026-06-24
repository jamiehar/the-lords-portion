import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 36% 30%, #9c4332, #6b2018 68%, #501007)",
          border: "4px solid rgba(0,0,0,0.35)",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: 78,
            color: "#eccca0",
            letterSpacing: "0.02em",
          }}
        >
          LP
        </span>
      </div>
    ),
    { ...size }
  );
}
