import Image from "next/image";
import main from "@/public/main.jpeg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className='container flex flex-col-reverse md:flex-row gap-5 h-[calc(100vh-4rem)] items-center'>
      <div className='basis-full flex flex-col justify-center md:basis-2/3'>
        <p className='special-word text-xs pb-2'>
          Mehmet Akif Ersoy Üniversitesi bünyesinde yer alan Bilgi Bilişim
          Topluluğu'yuz.
        </p>
        <h1 className='pb-5'>
          Bilgi <span className='special-word'>Bilişim</span> <br /> Topluluğu
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsum
          expedita eligendi, a doloribus dolorem voluptate excepturi nesciunt
          adipisci iure assumenda veritatis earum quas! Provident qui illum
          corrupti consequatur nulla!
        </p>
        <Link href={"/blog"}>
          <Button
            className={
              "cursor-pointer bg-primaryColor hover:bg-secondary hover:text-black w-64 mt-4 hover:scale-102"
            }
          >
            Bloglarımıza gözat!
          </Button>
        </Link>
      </div>
      <div className='basis-1/3'>
        <Image src={main} alt='Home' className='h-64 lg:h-full w-full rounded-xl' />
      </div>
    </div>
  );
}
