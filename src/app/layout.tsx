import Leftbar from "@/components/Leftbar";
import "./globals.css";
import Rightbar from "@/components/Rightbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-between">
          <div>
            <Leftbar />
          </div>
          <div>{children}</div>
          <div>
            <Rightbar />
          </div>
        </div>
      </body>
    </html>
  );
}
