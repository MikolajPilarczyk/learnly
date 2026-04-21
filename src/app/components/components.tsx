
export function MainButton({text}: {text: string}) {

    return(
        <button
            className="bg-gradient-to-r from-[#ffb59c] to-[#a93500] text-[#5c1900] font-label font-black uppercase py-4 tracking-widest active:scale-95 transition-transform px-4">
            {text}
        </button>


    );

}