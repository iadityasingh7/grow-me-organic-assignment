import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

// import css
import "./DepartmentsCategory.css";

// Hardcoded data
let data: any = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

export default function DepartmentsCategory() {
  let defaultStateValue: any = [];
  data.map((categoryItem: any) => {
    let categoryState: any = [];
    categoryItem.sub_departments.map(() => {
      categoryState.push(false);
    });
    defaultStateValue.push(categoryState);
  });

  const [checkedStateList, updateCheckedState] =
    React.useState(defaultStateValue);

  const handleCategoryChange =
    (catIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.checked);

      let currentState = checkedStateList.slice();
      currentState[catIndex] = currentState[catIndex].map(() => {
        return event.target.checked;
      });
      updateCheckedState(currentState);
      console.log(checkedStateList);
    };

  const handleSubCategoryChange =
    (catIndex: number, subCatIndex: number) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let currentState = checkedStateList.slice();
      currentState[catIndex][subCatIndex] = event.target.checked;
      updateCheckedState(currentState);

      console.log(checkedStateList);
    };

  function setParentCatrgoryValue(catIndex: number) {
    let parentValue: boolean = checkedStateList[catIndex].every(
      (item: boolean) => item == true
    );
    // console.log(parentValue);

    return parentValue;
  }

  function checkIndeterminateState(catIndex: number) {
    let parentValue: boolean = checkedStateList[catIndex].some(
      (item: boolean) => item == true
    );
    // console.log(parentValue);

    return parentValue;
  }

  return (
    <section>
      {data.map(function (catItem: any, catIndex: number) {
        return (
          <div className="parent-div" key={catItem.department}>
            <FormControlLabel
              label={catItem.department}
              control={
                <Checkbox
                  checked={setParentCatrgoryValue(catIndex)}
                  indeterminate={checkIndeterminateState(catIndex)}
                  onChange={handleCategoryChange(catIndex)}
                />
              }
            />

            <div className="inner-div">
              {catItem.sub_departments.map(function (
                subCatItem: any,
                subCatIndex: number
              ) {
                return (
                  <div key={subCatIndex + catIndex}>
                    <FormControlLabel
                      label={subCatItem}
                      control={
                        <Checkbox
                          checked={checkedStateList[catIndex][subCatIndex]}
                          onChange={handleSubCategoryChange(
                            catIndex,
                            subCatIndex
                          )}
                        />
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
