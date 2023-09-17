import Header from "@/components/header";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sansthai text-white">
      <Header hello="name" />
      <main className="flex flex-col items-center justify-between p-24 flex-grow backgroundkenko">
        {/* Your main content here */}
        <h1 className="text-4xl font-bold">KENKO BEAUTY & MASSAGE</h1>
      </main>
    </div>
  );
}
