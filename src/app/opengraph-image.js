import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "KUZAKEN.TECH preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage({ searchParams }) {
  const title = (searchParams?.title || "KUZAKEN.TECH").toString();
  const desc = (
    searchParams?.desc ||
    "Ken Francen G. Baylon – Web Development • Design • Broadcast Ops"
  ).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          display: "flex",
          position: "relative",
          background: "#141414",
          color: "#ffffff",
          padding: 64,
          fontFamily: "system-ui, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        {/* subtle radial red glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(800px 400px at 110% -10%, rgba(194,33,38,0.26), transparent 70%), radial-gradient(600px 300px at -10% 110%, rgba(194,33,38,0.18), transparent 70%)",
          }}
        />
        {/* content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 9999,
                background: "#c22126",
                boxShadow: "0 0 0 6px rgba(194,33,38,0.25)",
              }}
            />
            <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -1 }}>{title}</div>
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.85)" }}>{desc}</div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 64,
            bottom: 48,
            fontSize: 22,
            color: "rgba(255,255,255,0.7)",
            fontWeight: 600,
          }}
        >
          kuzaken.tech
        </div>
        {/* corner accent */}
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            height: 10,
            width: "100%",
            background:
              "linear-gradient(90deg, #c22126, rgba(194,33,38,0.8), rgba(194,33,38,0.35))",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
