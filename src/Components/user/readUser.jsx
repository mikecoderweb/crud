import React, { useState } from 'react';

const ReadUserCom = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <button
        onClick={openModal}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-lg mx-auto shadow-lg">
            <div className="text-lg font-semibold leading-6 space-y-2">
              <p><span className="text-blue-800">First Name:</span> {item.first_name}</p>
              <p><span className="text-blue-800">Last Name:</span> {item.last_name}</p>
              <p><span className="text-blue-800">Hobby:</span> {item.hobby}</p>
              <p><span className="text-blue-800">Address:</span> {item.address}</p>
              <p><span className="text-blue-800">Age:</span> {item.age}</p>
              <p><span className="text-blue-800">Gender:</span> {item.gender}</p>
              <p><span className="text-blue-800">University Name:</span> {item.university_name}</p>
              <p><span className="text-blue-800">Semester:</span> {item.semester}</p>
              <p><span className="text-blue-800">GPA:</span> {item.gpa}</p>
              <p><span className="text-blue-800">Nationality:</span> {item.nationality}</p>
            </div>
            <button onClick={closeModal} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadUserCom;







// import React, { useState } from 'react';

// const ReadUserCom = ({ item }) => {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   return (
//     <div>
//       <button
//         onClick={openModal}
//         type="button"
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Read
//       </button>

//       {showModal && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-8 rounded-lg max-w-lg mx-auto shadow-lg">
//             <div className="text-lg font-semibold leading-6 space-y-2">
//               <p><strong>First Name:</strong> {item.first_name}</p>
//               <p><strong>Last Name:</strong> {item.last_name}</p>
//               <p><strong>Hobby:</strong> {item.hobby}</p>
//               <p><strong>Address:</strong> {item.address}</p>
//               <p><strong>Age:</strong> {item.age}</p>
//               <p><strong>Gender:</strong> {item.gender}</p>
//               <p><strong>University Name:</strong> {item.university_name}</p>
//               <p><strong>Semester:</strong> {item.semester}</p>
//               <p><strong>GPA:</strong> {item.gpa}</p>
//               <p><strong>Nationality:</strong> {item.nationality}</p>
//             </div>
//             <button onClick={closeModal} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReadUserCom;







// import React, { useState } from 'react';

// const ReadUserCom = ({ item }) => {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   return (
//     <div>
//       <button
//         onClick={openModal}
//         type="button"
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Read
//       </button>

//       {showModal && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-8 rounded-lg max-w-lg mx-auto shadow-lg">
//             <h3 className="text-lg font-semibold leading-6 space-y-2">
//               {item.first_name} <br/> {item.last_name} <br/> {item.hobby} <br/> {item.address} <br/> {item.age} <br/> {item.gender} <br/> {item.university_name} <br/> {item.semester} <br/> {item.gpa} <br/> {item.nationality}
//             </h3>
//             <button onClick={closeModal} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReadUserCom;





// import React, { useState } from 'react';

// const ReadUserCom = ({ item }) => {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   return (
//     <div>
//       <button
//         onClick={openModal}
//         type="button"
//         class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Read
//       </button>

//       {showModal && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-4 rounded-lg">
//             <h3 className="text-lg font-semibold">{item.first_name} <br/> {item.last_name} <br/> {item.hobby} <br/> {item.address} <br/> {item.age} <br/> {item.gender} <br/> {item.university_name} <br/> {item.semester} <br/> {item.gpa} <br/> {item.nationality} </h3>
//             <button onClick={closeModal} className="bg-red-500 text-white p-2 rounded">Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReadUserCom;
