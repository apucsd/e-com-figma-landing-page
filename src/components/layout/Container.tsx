import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="py-2  px-[150px]">{children}</div>;
};

export default Container;
