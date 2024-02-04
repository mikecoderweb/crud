import React, { useState } from "react";
import { useCreateTable2Mutation } from "../../redux/slice/user";
import { toast } from "react-toastify";

const UserAddCom = () => {
  const [createUser] = useCreateTable2Mutation();

  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    address: "",
    university_name: "",
    semester: "",
    gpa: "",
    nationality: "",
    hobby: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const adData = async () => {
    try {
      await createUser(userInfo).unwrap();
      toast.success("User successfully added");
      setModal(false);
      setUserInfo({
        first_name: "",
        last_name: "",
        age: "",
        gender: "",
        address: "",
        university_name: "",
        semester: "",
        gpa: "",
        nationality: "",
        hobby: "",
      });
    } catch (error) {
      toast.error(
        `Error adding user: ${error.data?.error || "Please try again"}`
      );
    }
  };

  return (
    <div>
      <button
        onClick={() => setModal(true)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add User
      </button>

      {modal && (
        <div className="fixed top-0 left-[600px] right-0 bottom-0 p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add New User
              </h3>
              <button
                onClick={() => setModal(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <span className="sr-only">Close modal</span>X
              </button>
            </div>
            <div className="p-8 md:p-10">
              <div className="grid gap-8 mb-10 grid-cols-4"> 
                {Object.keys(userInfo).map((key) => (
                  <div key={key} className="col-span-2">
                    <label
                      htmlFor={key}
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {key.replace("_", " ").toUpperCase()} *
                    </label>
                    <input
                      type="text"
                      name={key}
                      value={userInfo[key]}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder={key.replace("_", " ").toUpperCase()}
                      required
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={adData}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAddCom;

// import React, { useState } from "react";
// import url from "../../api";

// const UserAddCom = () => {
//   const [modal, setModal] = useState(false);
//   const [userInfo, setUserInfo] = useState({
//     first_name: "",
//     last_name: "",
//     age: "",
//     gender: "",
//     address: "",
//     university_name: "",
//     semester: "",
//     gpa: "",
//     nationality: "",
//     hobby: "",
//   });
//   const adData = () => {
//     const formData = new FormData();
//     formData.append("first_name", userInfo?.first_name);
//     formData.append("last_name", userInfo?.last_name);
//     formData.append("age", userInfo?.age);
//     formData.append("gender", userInfo?.gender);
//     formData.append("address", userInfo?.address);
//     formData.append("university_name", userInfo?.university_name);
//     formData.append("semester", userInfo?.semester);
//     formData.append("gpa", userInfo?.gpa);
//     formData.append("nationality", userInfo?.nationality);
//     formData.append("hobby", userInfo?.hobby);
//     fetch(`${url}custom-users/`, {
//       method: "POST",
//       body: formData,
//     });
//   };
//   return (
//     <div>
//       <button
//         onClick={() => setModal(true)}
//         type="button"
//         class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         User qo'shish
//       </button>

//       {modal && (
//         <div class=" fixed top-0 left-[600px] right-0 bottom-0 p-4 w-full max-w-md max-h-full">
//           <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//             <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//               <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
//                 Create New Product
//               </h3>
//               <button
//                 onClick={() => setModal(false)}
//                 type="button"
//                 class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                 data-modal-toggle="crud-modal"
//               >
//                 <svg
//                   class="w-3 h-3"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 14"
//                 >
//                   <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                   />
//                 </svg>
//                 <span class="sr-only">Close modal</span>
//               </button>
//             </div>
//             <div class="p-4 md:p-5">
//               <div class="grid gap-4 mb-5 grid-cols-4">
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Ismi *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, first_name: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Familyasi *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, last_name: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Age *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, age: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Jinisi *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, gender: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Manzili *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, address: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     university_name *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({
//                         ...userInfo,
//                         university_name: e?.target?.value,
//                       })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Chorak *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, semester: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     gpa *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, gpa: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Yash joyi *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({
//                         ...userInfo,
//                         nationality: e?.target?.value,
//                       })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Mashg'uloti *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, hobby: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//               </div>
//               <button
//                 onClick={() => adData()}
//                 class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 <svg
//                   class="me-1 -ms-1 w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 Add new product
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserAddCom;

// import React, { useState } from "react";
// import url from "../../api";
// import { toast } from "react-toastify";
// import { useCreateTable2Mutation } from "../../redux/slice/user";

// const UserAddCom = () => {
//   const [modal, setModal] = useState(false);
//   const [UserAddCom] = useCreateTable2Mutation();

//   const [userInfo, setUserInfo] = useState({
//     first_name: "",
//     last_name: "",
//     age: "",
//     gender: "",
//     address: "",
//     university_name: "",
//     semester: "",
//     gpa: "",
//     nationality: "",
//     hobby: "",
//   });
//   const adData = () => {
//     const formData = new FormData();
//     formData.append("first_name", userInfo?.first_name);
//     formData.append("last_name", userInfo?.last_name);
//     formData.append("age", userInfo?.age);
//     formData.append("gender", userInfo?.gender);
//     formData.append("address", userInfo?.address);
//     formData.append("university_name", userInfo?.university_name);
//     formData.append("semester", userInfo?.semester);
//     formData.append("gpa", userInfo?.gpa);
//     formData.append("nationality", userInfo?.nationality);
//     formData.append("hobby", userInfo?.hobby);
//     fetch(`${url}custom-users/`, {
//       method: "POST",
//       body: formData,
//     }).then((res) => {
//       if (res.status === 201) {
//         setModal(false);
//         toast.success(`${userInfo.first_name} qo'shildi`);
//       }
//     });
//   };
//   return (
//     <div>
//       <button
//         onClick={() => setModal(true)}
//         type="button"
//         class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         User qo'shish
//       </button>

//       {modal && (
//         <div class=" fixed top-0 left-[600px] right-0 bottom-0 p-4 w-full max-w-md max-h-full">
//           <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//             <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//               <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
//                 Create New Product
//               </h3>
//               <button
//                 onClick={() => setModal(false)} >
//                 <svg
//                   class="w-3 h-3"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 14"
//                 >
//                   <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                   />
//                 </svg>
//                 <span class="sr-only">Close modal</span>
//               </button>
//             </div>
//             <div class="p-4 md:p-5">
//               <div class="grid gap-4 mb-5 grid-cols-4">
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Ismi *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, first_name: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Familyasi *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, last_name: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Age *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, age: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Jinisi *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, gender: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Manzili *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, address: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     university_name *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({
//                         ...userInfo,
//                         university_name: e?.target?.value,
//                       })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Chorak *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, semester: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     gpa *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, gpa: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Yash joyi *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({
//                         ...userInfo,
//                         nationality: e?.target?.value,
//                       })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Mashg'uloti *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, hobby: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//               </div>
//               <button
//                 onClick={() => adData()}
//                 class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 <svg
//                   class="me-1 -ms-1 w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 Add new product
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserAddCom;

// import React, { useState } from "react";
// import url from "../../api";
// import { toast } from "react-toastify";

// const UserAddCom = () => {
//   const [modal, setModal] = useState(false);
//   const [userInfo, setUserInfo] = useState({
//     first_name: "",
//     last_name: "",
//     age: "",
//     gender: "",
//     address: "",
//     university_name: "",
//     semester: "",
//     gpa: "",
//     nationality: "",
//     hobby: "",
//   });
//   const adData = () => {
//     const formData = new FormData();
//     formData.append("first_name", userInfo?.first_name);
//     formData.append("last_name", userInfo?.last_name);
//     formData.append("age", userInfo?.age);
//     formData.append("gender", userInfo?.gender);
//     formData.append("address", userInfo?.address);
//     formData.append("university_name", userInfo?.university_name);
//     formData.append("semester", userInfo?.semester);
//     formData.append("gpa", userInfo?.gpa);
//     formData.append("nationality", userInfo?.nationality);
//     formData.append("hobby", userInfo?.hobby);
//     fetch(`${url}custom-users/`, {
//       method: "POST",
//       body: formData,
//     }).then((res) => res.json())
//     .then((res) => {
//       if (res.stateus === 201) { // Changed '==' to '==='
//         setModal(false);
//         toast.success(`${userInfo.first_name} qo'shildi`);
//       }
//     });

//   };
//   return (
//     <div>
//       <button
//         onClick={() => setModal(true)}
//         type="button"
//         class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         User qo'shish
//       </button>

//       {modal && (
//         <div class=" absolute top-0 left-[600px] right-0 bottom-0 p-4 w-full max-w-md max-h-full">
//           <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//             <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//               <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
//                 Create New Product
//               </h3>
//               <button
//                 onClick={() => setModal(false)}
//                 type="button"
//                 class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                 data-modal-toggle="crud-modal"
//               >
//                 <svg
//                   class="w-3 h-3"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 14"
//                 >
//                   <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                   />
//                 </svg>
//                 <span class="sr-only">Close modal</span>
//               </button>
//             </div>
//             <div class="p-4 md:p-5">
//               <div class="grid gap-4 mb-5 grid-cols-4">
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Ismi *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, first_name: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                     >
//                     Familyasi *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, last_name: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Age *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, age: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Jinisi *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, gender: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Manzili *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, address: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     university_name *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({
//                         ...userInfo,
//                         university_name: e?.target?.value,
//                       })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Chorak *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, semester: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     gpa *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, gpa: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Yash joyi *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({
//                         ...userInfo,
//                         nationality: e?.target?.value,
//                       })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//                 <div class="col-span-2">
//                   <label
//                     for="name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Mashg'uloti *
//                   </label>
//                   <input
//                     onChange={(e) =>
//                       setUserInfo({ ...userInfo, hobby: e?.target?.value })
//                     }
//                     type="text"
//                     name="name"
//                     id="name"
//                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Isim..."
//                     required=""
//                   />
//                 </div>
//               </div>
//               <button
//                 onClick={() => adData()}
//                 class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 <svg
//                   class="me-1 -ms-1 w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//                 Add new product
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserAddCom
