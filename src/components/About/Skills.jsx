import ProgressBar from "./ProgressBar";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTailwind } from "react-icons/tb";

export default function Skills() {
   return (
      <section className="w-1/2 p-4">
         <ProgressBar title="HTML" icon={<FaHtml5 />} percentage="85%" />
         <ProgressBar title="CSS" icon={<FaCss3Alt />} percentage="70%" />
         <ProgressBar title="JAVASCRIPT" icon={<TbBrandJavascript />} percentage="65%" />
         <ProgressBar title="REACT JS" icon={<FaReact />} percentage="60%" />
         <ProgressBar title="TAILWIND CSS" icon={<TbBrandTailwind />} percentage="60%" />
      </section>
   );
}
