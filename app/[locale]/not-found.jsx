import Image from 'next/image';
import notFound from '../assets/images/404-Space.png';

function Page404() {
   return (
      <div className="h-screen w-screen">
         <Image src={notFound} alt="not found" className="h-full w-full" />
      </div>
   );
}

export default Page404;
