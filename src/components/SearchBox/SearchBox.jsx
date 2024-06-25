import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const filterFieldId = useId();
  const { name } = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <div className={css.searchBoxContainer}>
        <h2>Search for someone</h2>
        <label htmlFor={filterFieldId}>Find contacts by name</label>
        <input
          type="text"
          name="filter"
          id={filterFieldId}
          placeholder="Enter search prompt..."
          value={name}
          onChange={handleChange}
          className={css.searchInput}
        />
      </div>
    </div>
  );
};

export default SearchBox;
