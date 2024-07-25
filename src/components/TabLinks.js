import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../styles/tablinks.css";
import Document from "./Document";
import Query from "./Query";
const TabLinks = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 custom-tabs"
      >
        <Tab eventKey="form" title="Form">
          Tab content for Form
        </Tab>
        <Tab eventKey="documents" title="Documents">
          <Document />
        </Tab>
        <Tab eventKey="tracking/status" title="Tracking/Status">
          Tab content for tracking/status
        </Tab>
        <Tab eventKey="queries" title="Queries">
          <Query/>
        </Tab>
        <Tab eventKey="charges" title="Charges/Pay Online">
          Tab content for Charges/pay Online
        </Tab>
      </Tabs>
    </>
  );
};

export default TabLinks;
