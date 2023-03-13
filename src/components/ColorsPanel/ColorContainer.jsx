export default function ColorContainer({ bgColor }) {
   return (
      <section className="flex justify-center items-center">
         <div className="bg-blue-500 active:bg-blue-600 active:shadow-lg rounded-full p-4 w-3 h-3 border-2 border-gray-300 hover:border-gray-400 cursor-pointer m-1 transition-all duration-500 ease-in-out"></div>
         <div className="bg-red-500 active:bg-red-600 active:shadow-lg rounded-full p-4 w-3 h-3 border-2 border-gray-300 hover:border-gray-400 cursor-pointer m-1 transition-all duration-500 ease-in-out"></div>
         <div className="bg-green-500 active:bg-green-600 active:shadow-lg rounded-full p-4 w-3 h-3 border-2 border-gray-300 hover:border-gray-400 cursor-pointer m-1 transition-all duration-500 ease-in-out"></div>
         <div className="bg-orange-500 active:bg-orange-600 active:shadow-lg rounded-full p-4 w-3 h-3 border-2 border-gray-300 hover:border-gray-400 cursor-pointer m-1 transition-all duration-500 ease-in-out"></div>
      </section>
   );
}
