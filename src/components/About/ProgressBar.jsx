export default function ProgressBar({ title, percentage, icon }) {
   return (
      <div className="w-full py-2">
         <div className="flex justify-between mb-1">
            <div className="flex justify-center items-center">
               <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                  {title}
               </span>
               <div className="text-gray-600 dark:text-gray-500 ml-2">{icon}</div>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
               {percentage}
            </span>
         </div>
         <div className="w-full bg-slate-600 dark:bg-slate-200 rounded-full h-2.5">
            <div
               className="bg-blue-600 h-2.5 rounded-full"
               style={{ width: `${percentage}` }}
            ></div>
         </div>
      </div>
   );
}
