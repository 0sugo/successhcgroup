import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import ChatBubble from "./chatBubble";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = localFont({
  src: "/fonts/Poppins-Regular.ttf",
});

export const metadata = {
  metadataBase: new URL("https://successhcgroup.com.au/"),
  icons: "/clearLogo.jpg",
  keywords:
    "Success Healthcare Group,success home care services, success home care,Success,Successhcgroup,success group,Success healthcare, NDIS, Disability, Support, Services,staffing,staffing agency,NDIS provider,NDIS services,NDIS support,NDIS support coordination,NDIS support services,NDIS support worker,NDIS support workers,NDIS supports,NDIS therapy,NDIS training,NDIS transport,NDIS worker,NDIS workers,NDIS workshop,NDIS workshops,NDIS youth,NDIS youth services,NDIS youth support,NDIS youth support services,NDIS youth worker,NDIS youth workers,NDIS youth workshops,NDIS youth workshops",
  title: {
    default: "Success Healthcare Group",
    template: `$s | SuccessHealthcareGroup`,
  },
  openGraph: {
    url: "https://successhcgroup.com.au/",
    site_name: "Success Healthcare Group",
    description: "Your Success, Our Promise",
    images: [""],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.className} ${geistMono.variable} antialiased`}
      >
        <Topbar />
        <div className="w-[90%] mx-auto">
          <Navbar />
        </div>
        {children}
        {/* <ChatBubble /> */}
        <elevenlabs-convai agent-id="aRLmOTy9tUkTkVvELKnr"></elevenlabs-convai><script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
      </body>
    </html>
  );
}
