import { Backdrop } from '@mui/material';
import { CircleLoader } from 'react-spinners';

function Loading() {
   return (
      <Backdrop open>
         <div className="flex h-full w-full items-center justify-center text-goldColor">
            <CircleLoader color="#CCAA60" size={100} />
         </div>
      </Backdrop>
   );
}

export default Loading;
