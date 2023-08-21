import "./next.css";

import DepartmentsCategory from "../../Components/DepartmentsCategory/DepartmentsCategory";
import ApiDataTable from "../../Components/ApiDataTable/ApiDataTable";

function Next() {
  let userData: any = null;
  const userDataJSON = localStorage.getItem("user_data");

  if (userDataJSON && userDataJSON.length > 1) {
    userData = JSON.parse(userDataJSON);
  }

  function validateFormData(userData: any) {
    return (
      userData?.Name &&
      userData.Name.length > 0 &&
      userData?.Phone &&
      userData.Phone.length > 0 &&
      userData?.Email &&
      userData.Email.length > 0
    );
  }

  let pageUI;
  if (validateFormData(userData)) {
    pageUI = (
      <section>
        <h1 className="next-h1">Second Page</h1>
        <ApiDataTable />
        <DepartmentsCategory />
      </section>
    );
  } else {
    pageUI = (
      <div>
        Don't have access to second page. Go to home page and fill the form
        first.
        <a href="http://localhost:5173/">Home Page</a>
      </div>
    );
  }

  return <>{pageUI}</>;
}

export default Next;
