export default function ProgressBar() {
   return (
      <div className="w-full p-4">
         <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-white">HTML</span>
            <span className="text-sm font-medium text-white">80%</span>
         </div>
         <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
         </div>
      </div>
   );
}
