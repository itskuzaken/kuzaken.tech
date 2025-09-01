import { ImageResponse } from "next/og";

export const runtime = "edge"; // faster edge runtime
export const alt = "KUZAKEN.TECH preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#222",
          color: "#fff",
          fontSize: 64,
          fontWeight: 700,
        },
        children: "KUZAKEN.TECH",
      },
    },
    size
  );
}
