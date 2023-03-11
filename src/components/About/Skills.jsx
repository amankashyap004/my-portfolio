import ProgressBar from "./ProgressBar";

export default function Skills() {
   return (
      <section className="w-1/2 p-4">
         <ProgressBar title="HTML" percentage="85%" />
         <ProgressBar title="CSS" percentage="70%" />
         <ProgressBar title="JAVASCRIPT" percentage="65%" />
         <ProgressBar title="REACT JS" percentage="60%" />
         <ProgressBar title="TAILWIND CSS" percentage="60%" />
      </section>
   );
}
