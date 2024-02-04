import React, { useState } from "react";
import url from "../../api";
import { toast } from "react-toastify";

const UserAddCom = ({ item }) => {
  console.log(item, "item");
  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState(item);
  const adData = () => {
    const formData = new FormData();
    formData.append("first_name", userInfo?.first_name);
    formData.append("last_name", userInfo?.last_name);
    formData.append("age", userInfo?.age);
    formData.append("gender", userInfo?.gender);
    formData.append("address", userInfo?.address);
    formData.append("university_name", userInfo?.university_name);
    formData.append("semester", userInfo?.semester);
    formData.append("gpa", userInfo?.gpa);
    formData.append("nationality", userInfo?.nationality);
    formData.append("hobby", userInfo?.hobby);
    fetch(`${url}custom-users/${userInfo?.id}/`, {
      method: "PUT",
      body: formData,
    }).then((res) => {
      if (res.status === 200) {
        setModal(false);
        toast.success(`${userInfo.first_name} O'zgartirildi`);
      }
    });
  };
  return (
    <div>
      <button
        onClick={() => setModal(true)}
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update
      </button>

      {modal && (
        <div class="fixed top-0 left-[600px] right-0 bottom-0 p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Product
              </h3>
              <button
                onClick={() => setModal(false)}
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-4 md:p-5">
              <div class="grid gap-4 mb-5 grid-cols-4">
                <div class="col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Ismi *
                  </label>
                  <input
                    value={userInfo?.first_name}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, first_name: e?.target?.value })
                    }
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Isim..."
                    required=""
                  />
                </div>
                <div class="col-span-2">
                  <label for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Familyasi *
                  </label>
                  <input
                    value={userInfo?.last_name}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, last_name: e?.target?.value })
                    }
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Isim..."
                    required=""
                  />
                </div>
                <div class="col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Age *
                  </label>
                  <input
                    value={userInfo?.age}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, age: e?.target?.value })
                    }
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Isim..."
                    required=""
                  />
                </div>
                <div class="col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Jinsi *
                  </label>
                  <input
                    value={userInfo?.gender}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, gender: e?.target?.value })
                    }
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Isim..."
                    required=""
                  />
                </div>
                <div class="col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Manzili *
                  </label>
                  <input
                    value={userInfo?.address} onChange={(e) =>
                      setUserInfo({ ...userInfo, address: e?.target?.value })
                    }
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Isim..."
                    required=""
                  />
                </div>
                <div class="col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    university_name *
                  </label>
                  <input
                    value={userInfo?.university_name}

                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        university_name: e?.target?.value,
                      })
                    }
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Isim..."
                    required=""
                  />
                </div>
                <div class="col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Chorak *
                  </label>
                  <input
                    value={userInfo?.semester}

                    onChange={(e) =>
                      setUserInfo({ ...userInfo, semester: e?.target?.value })
                    }
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Isim..."
                    required=""
                  />
                </div>
                <div class="col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    gpa *
                  </label>
                  <input
                    value={userInfo?.gpa}

                    onChange={(e) =>
                      setUserInfo({ ...userInfo, gpa: e?.target?.value })
                    }
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Isim..."
                    required=""
                  />
                </div>
                <div class="col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Yash joyi *
                  </label>
                  <input
                    value={userInfo?.nationality} onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        nationality: e?.target?.value,
                      })
                    }
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Isim..."
                    required=""
                  />
                </div>
                <div class="col-span-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mashg'uloti *
                  </label>
                  <input
                    value={userInfo?.hobby} 

                    onChange={(e) =>
                      setUserInfo({ ...userInfo, hobby: e?.target?.value })
                    }
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Isim..."
                    required=""
                  />
                </div>
              </div>
              <button
                onClick={() => adData()}
                class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Add new product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAddCom;





// import React from "react";

// function UpdateUser() {
//   return (
//     <div>
//       <button
//         type="button"
//         class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//       >
//         UPDATE
//       </button>
//     </div>
//   );
// }

// export default UpdateUser;

// import React, { useState } from "react";
// import url from "../../api";
// import { toast } from "react-toastify";

// const UpdateUser = ({item}) => {
//     console.log(item, 'item');
//   const [modal, setModal] = useState(false);
//   const [userInfo, setUserInfo] = useState({item});
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
//     fetch(`${url}custom-users/${userInfo?.id}/`, {
//       method: "PUT",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         if (res.stateus === 200) {
//           // Changed '==' to '==='
//           setModal(false);
//           toast.success(`${userInfo.first_name} o'zgartirildi`);
//         }
//       });
//   };
//   return (
//     <div>
//       <button
//         onClick={() => setModal(true)}
//         type="button"
//         class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//        Update
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
//                   value={userInfo?.first_name}
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
//                   value={userInfo?.last_name}
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
//                   value={userInfo?.age}
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
//                   value={userInfo?.gender}
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
//                   value={userInfo?.address}
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
//                   value={userInfo?.university_name}
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
//                   value={userInfo?.semester}
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
//                   value={userInfo?.gpa}
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
//                   value={userInfo?.nationality}
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
//                   value={userInfo?.hobby}
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
//                type="button"
//                     class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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

// export default UpdateUser;
