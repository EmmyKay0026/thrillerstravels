import "./globals.css";

export const metadata = {
  title: "Thriller Travels",
  description:
    "Book your flights - Thrillers Travels: Migrating Nigerians to The Western Countries on Eagle's Wings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
