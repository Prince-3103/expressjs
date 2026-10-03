import express from "express";

const allEmployee = (req, res) => {
    res.send("All Employee");
}
const newEmployee = (req, res) => {
    res.send("Add New Employee");
}
const updateEmployee = (req, res) => {
    res.send("Update Employee");
}
const deleteEmployee = (req, res) => {
    res.send("Remove Employee");
}

export { allEmployee, newEmployee, updateEmployee, deleteEmployee };