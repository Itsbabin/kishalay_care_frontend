

export default function page() {
  return (
   <>   
         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="text-gray-600">You Earn</p>
            <p className="text-2xl font-bold"> &#8377; 5468</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="text-gray-600">Self BV</p>
            <p className="text-2xl font-bold">2135</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="text-gray-600">Team BV</p>
            <p className="text-2xl font-bold">13546</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="text-gray-600">Remaining BV for Next Level Promotion</p>
            <p className="text-2xl font-bold">5575</p>
        </div>
    </div>
    
    <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md md:col-span-2">
            <p className="text-gray-600 font-bold">Revenue VS Profit Margin Analysis</p>
            <img src="chart-placeholder.png" alt="Revenue Chart" className="w-full"/>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="text-gray-600">Downline Team Count</p>
            <p className="text-2xl font-bold">49</p>
            <p className="text-gray-600 mt-4">Direct Hand Count</p>
            <p className="text-2xl font-bold">6</p>
        </div>
    </div>
    
    <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold text-gray-700">Inactive Direct Downline</p>
            <table className="w-full mt-2 text-left">
                <thead>
                    <tr>
                        <th className="border-b p-2">User Name</th>
                        <th className="border-b p-2">User ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2">Arnab Chakraborty</td>
                        <td className="p-2">KCC0000001</td>
                    </tr>
                    <tr>
                        <td className="p-2">Abhijit Choudhuri</td>
                        <td className="p-2">KCC0000002</td>
                    </tr>
                    <tr>
                        <td className="p-2">Raju Guha</td>
                        <td className="p-2">KCC0000005</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-bold text-gray-700">Direct Hand Downline</p>
            <table className="w-full mt-2 text-left">
                <thead>
                    <tr>
                        <th className="border-b p-2">User Name</th>
                        <th className="border-b p-2">User ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2">Arnab Chakraborty</td>
                        <td className="p-2">KCC0000001</td>
                    </tr>
                    <tr>
                        <td className="p-2">Abhijit Choudhuri</td>
                        <td className="p-2">KCC0000002</td>
                    </tr>
                    <tr>
                        <td className="p-2">Raju Guha</td>
                        <td className="p-2">KCC0000005</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <p className="font-bold text-gray-700">Admin</p>
            <p className="text-gray-600">Arindam Pramanik</p>
            <p className="text-blue-500">KCPL0000010</p>
            <p className="text-gray-500">Rank-9 (Gold)</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center sm:col-span-2">
            <p className="font-bold text-gray-700">Events</p>
            <p className="text-gray-600">March</p>
            <p className="text-gray-700 mt-2">Product Training From HO</p>
        </div>
    </div>
   </>
  )
}
