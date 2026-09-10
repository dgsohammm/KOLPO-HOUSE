import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'KOLPO HOUSE — Strategy. Creativity. Content. Growth.',
  description: 'An immersive editorial digital marketing & creative agency experience. We build brands, not just content.',
  openGraph: {
    title: 'KOLPO HOUSE — Strategy. Creativity. Content. Growth.',
    description: 'An immersive editorial digital marketing & creative agency experience. We build brands, not just content.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KOLPO HOUSE — Strategy. Creativity. Content. Growth.',
    description: 'An immersive editorial digital marketing & creative agency experience. We build brands, not just content.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="antialiased selection:bg-[#DDD8EA] selection:text-[#292A28]">
        {children}
      </body>
    </html>
  );
}
