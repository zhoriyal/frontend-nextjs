import {Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";

export default function Home() {
  return (
    <main>
      <div className="w-full h-24 bg-blue-500 flex items-center justify-between px-6">
        <h1 className="text-white font-bold text-3xl">Web Framework</h1>

      <div className="flex items-center gap-3">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="Muhammad Zhoriyal Faqih" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <span className="text-white font-medium text-sm">Muhammad Zhoriyal Faqih</span>
        
      </div>

      </div>

      <div className="p-4">
        <p className="text-black">Halo, selamat datang di Web Framework</p>
      </div>
    </main>
  );
}