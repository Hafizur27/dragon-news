import LeftContent from "../../pages/shared/LeftContent/LeftContent";
import NavBar from "../../pages/shared/NavBar/NavBar";
import NewsContent from "../../pages/shared/NewsContent/NewsContent";
import RightContent from "../../pages/shared/RightContent/RightContent";

const MainLayout = () => {
  return (
    <div className="p-10">
      <NavBar />
      <div className="grid grid-cols-[1fr_4fr_1fr] pt-10">
        <LeftContent />
        <NewsContent />
        <RightContent />
      </div>
    </div>
  );
};

export default MainLayout;
