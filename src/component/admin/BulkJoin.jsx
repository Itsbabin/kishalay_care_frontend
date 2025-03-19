import axios from "axios";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { BackendURL } from "../../../const";

export default function BulkJoin() {
  const [agents, setAgents] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);

      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);

      let stringAgent = JSON.stringify(parsedData, null, 2);
      let agent = JSON.parse(stringAgent);
      setAgents(agent);
    };
    reader.readAsArrayBuffer(file);
  };

  const iterateAgents = () => {
    agents.forEach((agent) => {
      agent.address = {
        careof: agent.careof,
        address_line_1: agent.address_line_1,
        address_line_2: agent.address_line_2,
        post: agent.post,
        policestation: agent.policestation,
        town: agent.town,
        district: agent.district,
        state: agent.state,
        introducer : {
          id: agent.introducer_id,
          name: agent.introducer_name
      }
      };
      delete agent.careof;
      delete agent.address_line_1;
      delete agent.address_line_2;
      delete agent.post;
      delete agent.policestation;
      delete agent.town;
      delete agent.district;
      delete agent.state;
      delete agent.introducer_id;
      delete agent.introducer_name;
    });
  };

  useEffect(() => {
    iterateAgents();
    console.log(agents);
  }, [agents]);

  let uploadAgents = async () => {
    if (agents.length != 0) {
      axios
        .post(`${BackendURL}/admin/bulkJoin`, { agents })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="w-full h-full flex justify-baseline items-center flex-col gap-4 overflow-y-scroll">
        <h1 className="text-2xl font-semibold mb-4">Bulk Joining</h1>
        <p className="text-gray-600 mb-4">
          Upload an excel file to bulk join agents
        </p>
        <div className="flex justify-center items-center gap6">
          <label
            htmlFor="exelfile"
            className="border-2 border-gray-300 p-2 rounded-lg cursor-pointer mr-5"
          >
            Upload Excel File
          </label>
          <button
            className="border-2 border-gray-300 p-2 rounded-lg cursor-pointer"
            onClick={uploadAgents}
          >
            Creat Users
          </button>
        </div>
        <input
          type="file"
          accept=".xlsx, .xls"
          className="hidden"
          id="exelfile"
          onChange={handleFileUpload}
        />
        {agents.length != 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-[500px] gap-6 p-6 bg-gray-100 overflow-scroll">
            {agents.map((user, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
              >
                <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
                <p className="text-gray-600">
                  Date of Birth: {user.date_of_birth}
                </p>
                <p className="text-gray-600">Phone: {user.phone_number}</p>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Pin Code: {user.pin_code}</p>
                <p className="text-gray-600">Care Of: {user.careof}</p>
                <p className="text-gray-600">
                  Address: {user.address_line_1}, {user.address_line_2}
                </p>
                <p className="text-gray-600">Post: {user.post}</p>
                <p className="text-gray-600">
                  Police Station: {user.policestation}
                </p>
                <p className="text-gray-600">Town: {user.town}</p>
                <p className="text-gray-600">District: {user.district}</p>
                <p className="text-gray-600">State: {user.state}</p>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
