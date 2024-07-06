import axios from "axios";
import React, { useEffect, useState } from "react";
// useEffect eka use kranne component ekak render wenkot mokkd wenn oni kiyal kiyan.
// mekedi nam home ekat yankot AllStudent component eka render wenn oni. AllStudent tika enne data base eken.
// data base eken e data tika enne array ekak widihata

function AllStudent() {
  // data base eken data enne object kihipayak thiyana array ekak widihata.
  // e array eka store kra gann variable ekak set krann oni
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudent() {
      axios
        .get("http://localhost:8070/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    // hadapu function eka call kranwa
    getStudent();
  }, []);
  return (
    <div>
      

      <div class="items-center relative shadow-md sm:rounded-lg">
        <table class=" lg:w-50 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Student Name
              </th>
              <th scope="col" class="px-6 py-3">
                Age
              </th>
              <th scope="col" class="px-6 py-3">
                Gender
              </th>

              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td class="px-6 py-4">{student.name}</td>
                <td class="px-6 py-4">{student.age}</td>
                <td class="px-6 py-4">{student.gender}</td>

                <td class="px-6 py-4 text-right">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllStudent;

/*
<table>
        <thead>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Age
                </th>
                <th>
                    Gender
                </th>
            </tr>
        </thead>
        <tbody>
        {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                        </tr>
                    ))}
        </tbody>
      </table>
*/
