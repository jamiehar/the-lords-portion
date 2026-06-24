import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          border: "1px solid rgba(0,0,0,0.35)",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: 15,
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
