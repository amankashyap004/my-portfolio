export default function InputField({ title, id, type, placeholder, name, onChange, value }) {
   return (
      <div className="flex justify-start items-start flex-col w-full my-2">
         <label htmlFor={id} className="text-gray-300 font-semibold text-lg pb-1">
            {title}
         </label>
         <input
            className="w-full px-3 py-2 rounded-md border-2 border-gray-500 focus:border-2 focus:border-blue-500 outline-none bg-gray-500"
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
