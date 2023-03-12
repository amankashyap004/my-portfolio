export default function ColorContainer({ bgColor }) {
   return (
      <div
         className={`bg-${bgColor}-500 active:bg-${bgColor}-600 active:shadow-lg rounded-full p-4 w-3 h-3 border-2 border-gray-300 hover:border-gray-400 cursor-pointer m-1 transition-all duration-500 ease-in-out`}
      ></div>
   );
}
