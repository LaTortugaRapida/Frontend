import { useState } from "react";

function App() {
    const [people, setPeople] = useState([
        {
            id: 1,
            name: "Joe Doe",
            salary: 5000,
            gender: "Male",
        },
        {
            id: 2,
            name: "Anna Smith",
            salary: 6000,
            gender: "Female",
        },
        {
            id: 3,
            name: "David Johnson",
            salary: 4500,
            gender: "Male",
        },
        {
            id: 4,
            name: "Emma Williams",
            salary: 7000,
            gender: "Female",
        },
    ]);

    function deletePerson(id) {
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }

    return (
        <div>
            <h1 style={{ color: "#283624" }}>People</h1>
            <div>
                <div
                    style={{
                        display: "flex",
                        background: "#b7dfab",
                        fontWeight: "bold",
                        padding: "8px",
                    }}
                >
                    <span style={{ flex: 1 }}>ID</span>
                    <span style={{ flex: 1 }}>Name</span>
                    <span style={{ flex: 1 }}>Salary</span>
                    <span style={{ flex: 1 }}>Gender</span>
                    <span style={{ flex: 1, textAlign: "center" }}>Action</span>
                </div>

                {people.map((person) => (
                    <div
                        key={person.id}
                        style={{
                            display: "flex",
                            padding: "8px",
                            borderBottom: "1px solid #eee",
                        }}
                    >
                        <span style={{ flex: 1 }}>{person.id}</span>
                        <span style={{ flex: 1 }}>{person.name}</span>
                        <span style={{ flex: 1 }}>{person.salary}</span>
                        <span style={{ flex: 1 }}>{person.gender}</span>

                        <span style={{ flex: 1, textAlign: "center" }}>
                            <button
                                onClick={() => deletePerson(person.id)}
                                style={{
                                    background: "#d6365b",
                                    color: "white",
                                    border: "none",
                                }}
                            >
                                Delete
                            </button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
