import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import { ModeToggle } from "../mode-toggle";

const Header = () => {
  const { user, isSignedIn, isLoaded } = useUser();

  return (
    <div className="relative shadow-md w-full py-3 px-6 dark:border-b border-gray-800 z-50">
      <div className="sticky top-0 flex justify-between items-center">
        <Link to="/">
          <img src="/header.svg" width="40px" height="20px" />
        </Link>

        <div className="flex gap-2">
          <ModeToggle />
          {isSignedIn && user && isLoaded ? (
            <div className="flex items-center gap-2">
              <Link to="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <UserButton />
            </div>
          ) : (
            <Link to="/auth/sign-in">
              <Button className="bg-[#9f5bff] hover:bg-[#a366f8]">
                Get Started
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
