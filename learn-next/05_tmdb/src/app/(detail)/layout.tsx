import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
