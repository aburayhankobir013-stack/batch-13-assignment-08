import {Spinner} from "@heroui/react";


export default function LoadingPage(){
  return(
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Spinner size="xl" />
    </div>
  );
}