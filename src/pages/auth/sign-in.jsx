import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SignInPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 space-y-10">
      <TooltipProvider className="mt-1">
        <Tooltip>
          <TooltipTrigger>
            <Link to="/">
              <Button>
                <MdOutlineArrowCircleLeft size="24px" />
              </Button>
            </Link>
          </TooltipTrigger>

          <TooltipContent className="ml-36">
            <p>Go Back</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="flex justify-center items-center">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
