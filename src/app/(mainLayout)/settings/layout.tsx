import TabManager from "./TabManager";
import '@/styles/settings-styles/settings.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 

  return (
    <TabManager>{children}</TabManager>
  );
}
