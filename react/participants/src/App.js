import React from "react";
import {UsersList} from "./components/UsersList/UsersList";
import {people} from "./data/people";

export const App = props => {
    return <UsersList users={people}/>;
}