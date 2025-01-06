import React from "react";
import { LoaderCircle } from "lucide-react";

interface SpinnerProps {
  size?: number; // Size of the spinner
  text?: string; // Optional loading text
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 50,
  text = "Loading...",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      <LoaderCircle
        width={size}
        height={size}
        className="text-primary animate-spin"
      />
      {text && <p style={{ fontSize: "14px", color: "#333" }}>{text}</p>}
    </div>
  );
};

export default Spinner;
