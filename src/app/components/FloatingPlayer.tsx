import {Disc, Pause, Repeat, Shuffle, SkipBack, SkipForward} from "lucide-react";

export function FloatingPlayer()
{
return(
    <div className="fixed bottom-28 right-8 w-80 bg-[#353534] p-6 border-b-4 border-[#ffb4ab] shadow-[0_10px_40px_-10px_rgba(169,53,0,0.1)] z-[70] hidden lg:block">
        <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#0e0e0e] flex items-center justify-center text-[#ffb4ab]">
                <Disc size={24} className="animate-spin-slow" />
            </div>
            <div className="overflow-hidden">
                <p className="font-serif text-lg font-bold truncate leading-none mb-1 uppercase">Heart of the Mountain</p>
                <p className="text-[10px] tracking-widest text-[#ab8985] uppercase">Echoes of the Deep Mine</p>
            </div>
        </div>
        <div className="space-y-4">
            <div className="w-full h-1.5 bg-[#0e0e0e] relative">
                <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[#ffb59c] to-[#ffb4ab]"></div>
                <div className="absolute left-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#c7c6c6] rotate-45"></div>
            </div>
            <div className="flex justify-between items-center text-[#ffb59c]">
                <button><Shuffle size={18} /></button>
                <div className="flex items-center gap-4">
                    <button><SkipBack size={20} fill="currentColor" /></button>
                    <button className="bg-[#ffb59c] text-[#5c1900] p-2 rounded-sm">
                        <Pause size={20} fill="currentColor" />
                    </button>
                    <button><SkipForward size={20} fill="currentColor" /></button>
                </div>
                <button><Repeat size={18} /></button>
            </div>
        </div>
    </div>
);
}