export const nameValidator = {
    required: "Please fill in your name amd surname."
}

export const salaryValidator = {
    required: "Please fill in you salary",
    min: {value:60000, message:"Salary should be higher"},
    max: {value: 999999, message: "Salary should be lower"}
}