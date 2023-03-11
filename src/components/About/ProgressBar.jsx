export default function ProgressBar({ title, percentage }) {
   return (
      <div className="w-full py-2">
         <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-white">{title}</span>
            <span className="text-sm font-medium text-white">{percentage}</span>
         </div>
         <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
               className="bg-blue-600 h-2.5 rounded-full"
               style={{ width: `${percentage}` }}
            ></div>
         </div>
      </div>
   );
}
