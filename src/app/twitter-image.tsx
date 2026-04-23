import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(244,247,250,1) 100%)",
          padding: "52px",
          color: "#0f172a",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            maxWidth: "860px"
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(15, 23, 42, 0.58)"
            }}
          >
            Learn Build Teach
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.05em"
            }}
          >
            If I can&apos;t explain it, I haven&apos;t learned it.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.45,
              color: "rgba(15, 23, 42, 0.72)",
              maxWidth: "820px"
            }}
          >
            A proof-of-learning portfolio built around studying, building, and teaching what I learn in tech.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px"
          }}
        >
          {["Learn", "Build", "Teach"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                border: "1px solid rgba(15, 23, 42, 0.12)",
                borderRadius: "999px",
                padding: "12px 22px",
                fontSize: 24,
                color: "rgba(15, 23, 42, 0.76)",
                background: "rgba(255,255,255,0.72)"
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
