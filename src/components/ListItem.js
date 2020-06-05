import React, { useState } from "react";
import "../ListItem.css";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

export default function ListItem(props) {
    const { itemName, items, setItems } = props;
    const [isComplete, setIsComplete] = useState(true);

    const handleDelete = () => {
        setItems(items.filter(item => item != itemName));
    };

    const handleAddStrike = () => {
        setIsComplete(!isComplete);
        document.getElementById(itemName).className = isComplete
            ? "strike"
            : "";
    };
    return (
        <div className="container">
            <div className="item">
                <Checkbox
                    inputProps={{ "aria-label": "primary checkbox" }}
                    onClick={handleAddStrike}
                />
                <p id={itemName}>{itemName}</p>
                <Button
                    onClick={handleDelete}
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                />
            </div>
        </div>
    );
}
