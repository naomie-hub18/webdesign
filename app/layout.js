import "./globals.css";

export const metadata = {
  title: "Luma Skin",
  description: "A responsive skincare product listing page for Week 2 assignment"
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
