import React from "react";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchFeature(props) {
    return (
        <div>
            <SearchIcon />
            <input
                id="searchTerm"
                type="text"
                placeholder="Search Meal Name or Ingredient"
                value={props.searchTerm}
                onChange={props.onChangeSearch}
                style={{
                    padding: "10px",
                    backgroundColor: "white",
                    border: "1px solid #e9ddd0",
                    marginTop: "0",
                    width: 300
                }}
            ></input>
        </div>
    )
}