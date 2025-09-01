import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "KUZAKEN.TECH Twitter preview";
export const size = {
  width: 1600,
  height: 900,
};
export const contentType = "image/png";

export default async function TwitterImage({ searchParams }) {
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
          padding: 80,
          fontFamily: "system-ui, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 500px at 110% -10%, rgba(194,33,38,0.25), transparent 70%), radial-gradient(700px 400px at -10% 110%, rgba(194,33,38,0.18), transparent 70%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 9999,
                background: "#c22126",
                boxShadow: "0 0 0 7px rgba(194,33,38,0.25)",
              }}
            />
            <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -1 }}>{title}</div>
          </div>
          <div style={{ fontSize: 34, color: "rgba(255,255,255,0.85)" }}>{desc}</div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 56,
            fontSize: 26,
            color: "rgba(255,255,255,0.7)",
            fontWeight: 600,
          }}
        >
          kuzaken.tech
        </div>
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
