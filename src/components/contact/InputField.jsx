export default function InputField({ title, id, type, placeholder, name, onChange, value }) {
   return (
      <div className="flex justify-start items-start flex-col w-full my-2">
         <label
            htmlFor={id}
            className="text-gray-700 dark:text-gray-300 font-semibold text-lg pb-1"
         >
            {title}
         </label>
         <input
            className="w-full px-3 py-2 rounded-md border-2 bg-gray-300 dark:bg-gray-600 border-gray-700 dark:border-gray-500 focus:border-2 focus:border-blue-500 dark:focus:border-blue-500 outline-none"
            id={id}
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
         />
      </div>
   );
}
