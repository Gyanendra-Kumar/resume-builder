import { Loader2Icon, PlusSquareIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "../../../service/GlobalApi";
import { useNavigate } from "react-router-dom";

const AddResume = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { user } = useUser();

  const onCreate = () => {
    setIsLoading(true);
    const uuid = uuidv4();

    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userName: user?.fullName,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      },
    };
    console.log("data: ", data);

    GlobalApi.CreateNewResume(data).then(
      (res) => {
        // console.log("server response: ", res);
        setIsLoading(false);
        navigate(`/dashboard/resume/${res?.data?.data?.documentId}/edit`);
      },
      (error) => {
        console.log("error: ", error.message);
        setIsLoading(false);
      }
    );

    setIsDialogOpen(false);
  };

  return (
    <div>
      <div
        className="p-14 border-2 border-dashed flex items-center justify-center rounded-lg bg-secondary hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-md"
        onClick={() => setIsDialogOpen(true)}
      >
        <PlusSquareIcon size={22} />
      </div>

      <Dialog open={isDialogOpen}>
        <DialogContent>
          <DialogHeader className="space-y-2">
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <label htmlFor="resume-title">Add a title for new resume</label>
              <Input
                id="resume-title"
                className="my-2 "
                placeholder="Ex. FullStack Resume"
                value={resumeTitle}
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>

            <div className="flex justify-end items-center gap-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                disabled={!resumeTitle || isLoading}
                onClick={() => onCreate()}
              >
                {isLoading ? (
                  <Loader2Icon className="animate-spin" />
                ) : (
                  "Create"
                )}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
