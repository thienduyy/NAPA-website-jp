import wow from "./wow.config";
import { useEffect } from "react";

const WowWrapper = ({ children }) => {
  useEffect(() => {
    wow.init();
  }, []);
  return children;
};

export default WowWrapper;
