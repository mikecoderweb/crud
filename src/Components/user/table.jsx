import React, { useEffect, useMemo, useState } from "react";
import url from "../../api";
import UserAddCom from "./userAdd";
import UpdateUser from "./update";
import ReadUserCom from "./readUser";
import { useDeleteTbale2Mutation, useGetTable1Query } from "../../redux/slice/user";
import { toast } from "react-toastify";

const TableCom = () => {
  //   useStatte
  const [state] = useState(false);
  const [deleteTable] = useDeleteTbale2Mutation()
  const [search, setSearch] = useState("");
  const {data:datas } = useGetTable1Query()
  // const [modal, setModal] = useState(false);
  const [data, setData] = useState(datas);

  //   useeffect
  // useEffect(() => {
  //   fetch(`${url}custom-users/`)
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);

  useEffect(() => {
    if (state) {
      fetch(`${url}custom-users/`)
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, [state]);

  const DeletFun = async (id) => {
    try {
        await deleteTable({ id });
        toast.success("Delete!");
    } catch (err) {
        toast.error("---");
    }
}
     const filteredTeachers = useMemo(() => {
    if (search) {
      return datas?.filter(
        (value) =>
          value?.first_name.toLowerCase()?.includes(search?.toLowerCase()) ||
          value?.last_name.toLowerCase()?.includes(search?.toLowerCase()) ||
          value?.hobby.toLowerCase()?.includes(search?.toLowerCase()) ||
          value?.address.toLowerCase()?.includes(search?.toLowerCase())
      );
    } else {
      return datas;
    }
  }, [datas, search]);
  return (
    <div class= "  relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex  justify-between">
        <div>
          <input
             onChange={(e) => setSearch(e.target.value)}
                         type="text"
                         id="first_name"
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="Search....."
                         required
          />
        </div>

        <UserAddCom />
      </div>
      {/* <table class="w-full  h-[80vh] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> */}
       <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
       <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Ismi
            </th>
            <th scope="col" class="px-6 py-3">
              Familyasi
            </th>
            <th scope="col" class="px-6 py-3">
              Hobbe
            </th>
            <th scope="col" class="px-6 py-3">
              addres
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTeachers?.map((value) => {
            return (
              // <tr class="h-[60px] bg-red-500 e border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
              //   <th
              //     scope="row"
              //     class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
              //   >
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
                  {value?.first_name}
                </th>
                <td class="px-6 py-4">{value?.last_name}</td>
                <td class="px-6 py-4">{value?.hobby}</td>
                <td class="px-6 py-4">{value?.address}</td>

                <td class="px-6 py-4 flex gap-2 text-right">
                <ReadUserCom item={value} />
                  <button
                    onClick={() => DeletFun(value.id)}
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Delete
                  </button>
                  <UpdateUser item={value}/>
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableCom;




// import React, { useEffect, useMemo, useState } from "react";
// import url from "../../api";
// import UserAddCom from "./userAdd";
// import UpdateUser from "./update";

// const TableCom = () => {
//   // useState
//   const [data, setData] = useState([]);
//   const [state, setState] = useState(false);
//   const [search, setSearch] = useState([]);

//   //useffect
//   useEffect(() => {
//     fetch(`${url}custom-users/`)
//       .then((res) => res.json())
//       .then((res) => setData(res));
//   }, []);
//   useEffect(() => {
//     if (state) {
//       fetch(`${url}custom-users/`)
//         .then((res) => res.json())
//         .then((res) => setData(res));
//     }
//   }, [state]);

//   //DELETEFUNCTION
//   const DeletFun = (id) => {
//     fetch(`${url}custom-users/${id}/`, {
//       method: "DELETE",
//     })
//       .then((res) => res)
//       .then((res) => {
//         if (res.status === 204) {
//           setState(true);
//         }
//       });
//   };

//   const filteredTeachers = useMemo(() => {
//     const lowerCaseSearch =
//       typeof search === "string" ? search.toLowerCase() : "";
//     return search
//       ? data?.filter((value) => {
//           const firstName = value?.first_name?.toLowerCase() || "";
//           const lastName = value?.last_name?.toLowerCase() || "";
//           const hobby = value?.hobby?.toLowerCase() || "";
//           const address = value?.address?.toLowerCase() || "";
//           return (
//             firstName.includes(lowerCaseSearch) ||
//             lastName.includes(lowerCaseSearch) ||
//             hobby.includes(lowerCaseSearch) ||
//             address.includes(lowerCaseSearch)
//           );
//         })
//       : data;
//   }, [data, search]);
//   // const filteredTeachers = useMemo(() => {
//   //   if (search) {
//   //     return data?.filter(
//   //       (value) =>
//   //         value?.first_name.toLowerCase()?.includes(search?.toLowerCase()) ||
//   //         value?.last_name.toLowerCase()?.includes(search?.toLowerCase()) ||
//   //         value?.hobby.toLowerCase()?.includes(search?.toLowerCase()) ||
//   //         value?.address.toLowerCase()?.includes(search?.toLowerCase())
//   //     );
//   //   } else {
//   //     return data;
//   //   }
//   // }, [data, search]);
//   return (
//     <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
//       <div className="flex justify-between">
//         <div>
//           <input
//             onChange={(e) => setSearch(e.target.value)}
//             type="text"
//             id="first_name"
//             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Search....."
//             required
//           />
//         </div>
//         <div>
//           <UserAddCom />
//         </div>
//       </div>
//       <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th scope="col" class="px-6 py-3">
//               ISMI
//             </th>
//             <th scope="col" class="px-6 py-3">
//               FAMILIYASI
//             </th>
//             <th scope="col" class="px-6 py-3">
//               HOBBY
//             </th>
//             <th scope="col" class="px-6 py-3">
//               ADDRES
//             </th>
//             <th scope="col" class="px-6 py-3">
//               <span class="sr-only">Edit</span>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//         {filteredTeachers.map((value) => { 
//     console.log(value, "value");
//     return (
//       <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//         <th
//           scope="row"
//           class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//         >
//           {value?.first_name}
//                 </th>
//                 <td class="px-6  py-4">{value?.last_name}</td>
//                 <td class="px-6 py-4">{value?.hobby}</td>
//                 <td class="px-6 py-4">{value?.address}</td>
//                 <td class="px-6 py-4 flex gap-2 text-right">
//                   <button
//                     onClick={() => {
//                       DeletFun(value.id);
//                     }}
//                     type="button"
//                     class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//                   >
//                     Delete
//                   </button>
//                   <UpdateUser item ={value}/>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableCom;
