import { NavBar } from "./NavBar";
import { Introduction } from "./Introduction";
import { Featured } from "./Featured";
import { CenterText } from "./CenterText";
import { Divider } from "./Divider";
import { Footer } from "./Footer";

export const HomePageComplete = () => {
  return (
    <>
      <NavBar />
      <Introduction />
      <Featured />
      <CenterText />
      <Divider />
      <Footer />
    </>
  );
};
