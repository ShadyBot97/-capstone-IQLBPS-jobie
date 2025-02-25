import CustomButton from '../UI/Button/CustomButton';

const LatestJobs = ({ headers, data }) => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[70%] large:max-w-[70%] medium:max-w-[80%] small:max-w-[85%] h-full mx-auto py-10 small:py-5">
        <h1 className="text-3xl small:text-xl text-secondary mb-10 small:mb-5 font-semibold">
          Latest Jobs
        </h1>
        <div className="flex justify-end">
          <label htmlFor="full-time" className="mr-4 small:mr-2 small:text-sm">
            <input type="checkbox" id="full-time" className="mr-2 small:mr-1" />
            Full Time
          </label>
          <label htmlFor="part-time" className="mr-4 small:mr-2 small:text-sm">
            <input type="checkbox" id="part-time" className="mr-2 small:mr-1" />
            Part Time
          </label>
          <label htmlFor="remote" className="small:text-sm">
            <input type="checkbox" id="remote" className="mr-2 small:mr-1" />
            Remote
          </label>
        </div>
        <div className="overflow-x-auto shadow-md">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-secondary bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {headers.map((header) => {
                  if (header === '') {
                    return <td />;
                  }
                  return (
                    <th scope="col" className="py-3 px-6 small:py-2 small:px-3">
                      {header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((rowData) => {
                return (
                  <tr className="bg-white dark:bg-gray-800 small:text-xs">
                    <th
                      scope="row"
                      className="py-4 px-6 small:py-1 small:px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {rowData.position}
                    </th>
                    <td className="py-4 px-6 small:py-1 small:px-2">
                      {rowData.salary}
                    </td>
                    <td className="py-4 px-6 small:py-1 small:px-2">
                      {rowData.date}
                    </td>
                    <td className="py-4 px-6 small:py-1 small:px-2 w-20">
                      <CustomButton btnName="Apply" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default LatestJobs;
