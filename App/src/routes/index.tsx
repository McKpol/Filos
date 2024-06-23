import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { appWindow } from "@tauri-apps/api/window";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <>
      <all class="h-full w-full absolute flex flex-col rounded-xl overflow-hidden cursor-default">
        <topbar class="bg-neutral-950 flex-none flex w-full h-10 rounded-xl overflow-hidden" onMouseDown$={async ()=>{await appWindow.startDragging();}}>
          <left class="absolute w-full invert self-center ml-2"><Image src="folder.svg" height={28} width={28} /></left>
          <center class="absolute text-white w-full self-center font-semibold text-xl">
            <d class="text-zinc-400 font-medium left-1/4 absolute tracking-[0.25rem] -mt-0.5 cursor-grab">::::</d>Filos<d class="text-zinc-400 font-medium left-3/4 absolute tracking-[0.25rem] -mt-0.5 cursor-grab">::::</d>
          </center>
          <setbtn class="flex flex-row-reverse h-10 font-semibold text-2xl right-0 absolute text-white cursor-pointer rounded-r-xl overflow-hidden">
            <close class="px-3 duration-75 transition-all hover:bg-white/20" onMouseDown$={async ()=>{await appWindow.close();}}>x</close>
            <min class="-mt-1 px-3 duration-75 transition-all hover:bg-white/20" onMouseDown$={async ()=>{await appWindow.minimize();}}>_</min>
          </setbtn>
        </topbar>
        <content class="bg-neutral-900 h-full w-full mt-1 rounded-xl flex flex-row overflow-hidden">
          <leftbar class="bg-neutral-900 z-20 flex-none flex w-48 border-r-neutral-800 border-r text-white flex-col">
            <titte class="h-10 flex-none border-b-neutral-800 border-b font-black text-lg"><p class="ml-5 mt-1">Przypięte</p></titte>
            <baritem class="h-10 border-b-neutral-800 border-b flex flex-row items-center font-semibold overflow-hidden after:h-10 after:w-24 after:absolute after:z-50 after:pointer-events-none after:bg-gradient-to-r after:from-zinc-900 before:h-10 before:w-16 before:translate-x-[200%] before:absolute before:z-50 before:pointer-events-none before:bg-gradient-to-l before:from-zinc-900">
              <Image class="z-[60] invert ml-6 mr-1.5 -mt-0.5" src="/folder.svg" height={24} width={24} />
              <p class="w-full text-center mr-3.5 text-nowrap whitespace-nowrap horizontal-scroll">Dokumenty z Pracy Taty</p>
            </baritem>
          </leftbar>
          <workplace class="bg-neutral-900 flex flex-col w-[calc(100%-192px)] h-full flex-none">
            <topsearch class="flex flex-row bg-neutral-950 h-10 w-full top-0 border-b-neutral-800 border-b justify-center">
              <search class="cursor-pointer h-5/6 self-center w-2/3 bg-neutral-900 border border-zinc-800 rounded-lg hover:border-zinc-500 transition-all duration-100"></search>
              <filr class="cursor-pointer h-5/6 w-8 bg-zinc-900 border border-zinc-800 rounded-lg ml-0.5 self-center flex flex-col justify-center items-center hover:border-zinc-500 duration-150 trasistion-all">
              <lin class="bg-white h-0.5 rounded-full my-0.5 w-6" />
              <lin class="bg-white h-0.5 rounded-full my-0.5 w-4" />
              <lin class="bg-white h-0.5 rounded-full my-0.5 w-3" />
              </filr>
            </topsearch>
            <findeo window:onResize$={()=>{const find = document.getElementsByTagName("findeo")[0] as HTMLElement;console.clear();console.log(find.offsetWidth /100)}} class="grid gap-1 grid-rows-4">
                <folder class="h-24 w-24 bg-white"></folder>
                <folder class="h-24 w-24 bg-white"></folder>
                <folder class="h-24 w-24 bg-white"></folder>
                <folder class="h-24 w-24 bg-white"></folder>
                <folder class="h-24 w-24 bg-white"></folder>
                <folder class="h-24 w-24 bg-white"></folder>
                <folder class="h-24 w-24 bg-white"></folder>
                <folder class="h-24 w-24 bg-white"></folder>
                <folder class="h-24 w-24 bg-white"></folder>
                <folder class="h-24 w-24 bg-white"></folder>
                <folder class="h-24 w-24 bg-white"></folder>
            </findeo>
          </workplace>
        </content>
      </all>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
