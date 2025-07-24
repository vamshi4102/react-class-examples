import { IoIosPodium } from "react-icons/io";
import Category from "../components/category";
import { IoIosRocket } from "react-icons/io";

const Categories = () => {
  return (
    <div>
      <IoIosPodium size={"50"} />
      <IoIosRocket  size={"150"}/>

      <Category name={"Category - Hanuman"} />
      <Category name={"Category - Sri ram"} />
      <Category name={"Category - Durga matha"} />
      <Category name={"Category - Narsimha swamy"} />
      <Category name={"Category - Shivayya"} />
    </div>
  );
};
export default Categories;
