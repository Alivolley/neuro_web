import { Skeleton } from '@mui/material';

function OurTeamCardSkeleton() {
   return (
      <div className="flex gap-8 customXl:justify-end">
         <div className="h-60 w-[150px] customSm:h-72 customSm:w-[220px] customMd:mt-20 customMd:h-80 customMd:w-[250px]">
            <Skeleton variant="rounded" width="100%" height="100%" />
         </div>
         <div className="h-60 w-[150px] customSm:h-72 customSm:w-[220px] customMd:h-80 customMd:w-[250px]">
            <Skeleton variant="rounded" width="100%" height="100%" />
         </div>
         <div className="h-60 w-[150px] customSm:h-72 customSm:w-[220px] customMd:mt-20 customMd:h-80 customMd:w-[250px]">
            <Skeleton variant="rounded" width="100%" height="100%" />
         </div>
      </div>
   );
}

export default OurTeamCardSkeleton;
