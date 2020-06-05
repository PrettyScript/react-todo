import React, { useState } from "react";
import "../Todo.css";
import ListItem from "./ListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

export default function Todo() {
    const [items, setItems] = useState([]);

    const handleAddItem = () => {
        console.log("added to list");
        let input = document.getElementById("addItemInput");
        let value = input.value;
        if (!items.includes(value) && value !== "") {
            setItems([...items, value]);
        }

        input.value = "";
    };

    const handleDeleteAll = () => {
        console.log("deleted all items in list");
        setItems([]);
    };

    return (
        <div className="main">
            <div className="inputs">
                <Box justifyContent="space-between" alignItems="center">
                    <TextField label="New Task" id="addItemInput" />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddItem}
                    >
                        Add
                    </Button>
                </Box>
            </div>
            <div id="listOfItems">
                {items.map(item => (
                    <ListItem
                        key={item}
                        itemName={item}
                        items={items}
                        setItems={setItems}
                    />
                ))}
                {items.length > 0 && (
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleDeleteAll}
                    >
                        Clear
                    </Button>
                )}
            </div>
        </div>
    );
}
