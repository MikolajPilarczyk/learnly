

interface PlaylistWindowProps {
    title: string;  // poprawiłem literówkę z "tittle"
    vibe: string;
    tracks: number;
}


export function PlaylistWindow({title,vibe,tracks}:PlaylistWindowProps)
{

    return (
        <div
            className="group bg-[#1c1b1b] p-6 border-b-4 border-[#353534] hover:border-[#ffb59c] transition-all duration-300 relative">
            <div
                className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-[#ffb59c] transition-all duration-500"></div>
            <div
                className="aspect-square bg-[#0e0e0e] mb-4 border-4 border-[#464747] overflow-hidden">
                <img alt="Echoes of the Deep Mine"
                     className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                     data-alt="Deep dark subterranean cavern with glowing magma rivers and ancient carved stone pillars"
                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuASPxYpv21ZiKtjEiFLJ6RODM01gN1LfhXVnlinhEJcmqsZ-Y0_A5eUjdgykScdp9ruP-4PY90vunRvlGqoeoQ1PojWwfNYX7guRCaZvAsO3epEc3DgCAXgKKdrDQ97CbTiFz5xVrs_HRgo54tBcy7xHMC5TPTLRjxV2puMLNuCkRaeVXtAOvqrUQpgZgOF3Vlif2DSDrsHvbdS6_ietJztTZ0E6fNOJpJh7c-7E5dj3KyVAuwRuPBfqi8RWrg6qU9Mc_z0_Zu8O1xy"/>
            </div>
            <h3 className="font-headline text-xl font-bold text-[#e5e2e1] mb-1 group-hover:text-[#ffb59c] transition-colors">{title}</h3>
            <span
                className="font-label text-[10px] tracking-widest text-[#c7c6c6] uppercase font-bold">{tracks==1?(<div>• {tracks} utwór</div>):tracks>2&&tracks<5?(<div>• {tracks} utowry</div>):(<div>• {tracks} Utworów</div>)} • {vibe}</span>
        </div>
    );
}