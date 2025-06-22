import "../css/globals.css";
import "../css/circular-bar.css";
import "../css/style.css";
import Header from "./common/header";
export const metadata = {
  title: "Next.hw",
  description: "Next.js 과제 제출. 정말 재밌다!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
