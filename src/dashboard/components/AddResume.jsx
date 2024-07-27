import { PlusSquareIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";

const AddResume = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");

  const onCreate = () => {
    const uuid = uuidv4();
    console.log(resumeTitle, uuid);
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
              <Button disabled={!resumeTitle} onClick={() => onCreate()}>
                Create
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
