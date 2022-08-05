import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DeskstopLayout";

const Layout = ({ children }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return isLargerThan768 ? (
    <DesktopLayout>{children}</DesktopLayout>
  ) : (
    <MobileLayout>{children}</MobileLayout>
  );
};

export default Layout;
