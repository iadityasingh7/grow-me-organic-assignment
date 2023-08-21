import "./next.css";

import DepartmentsCategory from "../../Components/DepartmentsCategory/DepartmentsCategory";
import ApiDataTable from "../../Components/ApiDataTable/ApiDataTable";

function Next() {
  let userData: any = null;
  console.log(userData);
  const userDataJSON = localStorage.getItem("user_data");

  if (userDataJSON && userDataJSON.length > 1) {
    userData = JSON.parse(userDataJSON);
  }

  return (
    <section>
      <h1 className="next-h1">Second Page</h1>
      <ApiDataTable />
      <DepartmentsCategory />
    </section>
  );
}

export default Next;
