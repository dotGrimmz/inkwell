interface ApplicationState {
    title: string,
    signature: string
}


import React from "react";
const InkwellContext = React.createContext<Partial<ApplicationState>>({});
export default InkwellContext;
