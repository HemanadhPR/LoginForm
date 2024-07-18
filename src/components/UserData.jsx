import React from "react";
import { TfiTrash } from "react-icons/tfi";

const UserData = ({ userData, setUserData }) => {
  const handleDelete = (index) => {
    const updatedUserData = [...userData];
    updatedUserData.splice(index, 1);
    setUserData(updatedUserData);
  };

  return (
    <div className="overflow-x-auto grid justify-center">
      <table className="border border-gray-300 ">
        <thead className="bg-gray-200">
          <tr className="">
            <th className="py-2 px-4 border-b border-gray-300">Email</th>
            <th className="py-2 px-4 border-b border-gray-300">Name</th>
            <th className="py-2 px-4 border-b border-gray-300">Role</th>
            <th className="py-2 px-4 border-b border-gray-300">Password</th>
            <th className="py-2 px-4 border-b border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {userData.map((item, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="py-2 px-6 border-gray-300">{item.email}</td>
              <td className="py-2 px-7 border-gray-300">{item.name}</td>
              <td className="py-2 px-7 border-gray-300">{item.role}</td>
              <td className="py-2 px-7 border-gray-300">{item.password}</td>
              <td className="py-2 px-4">
                <TfiTrash
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => handleDelete(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;