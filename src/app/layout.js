import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

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
  metadataBase: newURL("https://successhcgroup.com.au/"),
  keywords: "Success Healthcare Group,Success,Successhcgroup,success group,Success healthcare, NDIS, Disability, Support, Services,staffing,staffing agency,NDIS provider,NDIS services,NDIS support,NDIS support coordination,NDIS support services,NDIS support worker,NDIS support workers,NDIS supports,NDIS therapy,NDIS training,NDIS transport,NDIS worker,NDIS workers,NDIS workshop,NDIS workshops,NDIS youth,NDIS youth services,NDIS youth support,NDIS youth support services,NDIS youth worker,NDIS youth workers,NDIS youth workshops,NDIS youth workshops",
  title:{
    default: "SuccessHealthcareGroup",
    template:`$s | SuccessHealthcareGroup`,
  },
  openGraph: {
    url: "https://successhcgroup.com.au/",
    site_name: "Success Healthcare Group",
    description: 'Your Success, Our Promise',
    images: ['']
  },
}
 
export default function Page() {}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
