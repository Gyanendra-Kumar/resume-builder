import React, { useState } from "react";
import PersonalDetailForm from "./forms/PersonalDetailForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enabledNext, setEnabledNext] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Button className="flex gap-1" size="sm" variant="outline">
          <LayoutGrid />
          Theme
        </Button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              variant="secondary"
              size="sm"
              data-tooltip-id="go-back"
              data-tooltip-content="Go Back"
              onClick={() => setActiveFormIndex((prev) => prev - 1)}
            >
              <ArrowLeft />
            </Button>
          )}

          <Button
            className="flex gap-1"
            disabled={!enabledNext}
            size="sm"
            onClick={() => setActiveFormIndex((prev) => prev + 1)}
          >
            Next <ArrowRight size={20} />
          </Button>
        </div>
      </div>
      {/* personal details */}
      {activeFormIndex === 1 ? <PersonalDetailForm enabledNext={(v) => setEnabledNext(v)}/> : null}

      {/* Summary */}
      {/* Experience */}
      {/* Education */}
      {/* skills */}

      <Tooltip id="go-back" place="left" />
    </div>
  );
};

export default FormSection;
