import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserBookList } from "./UserBookList";
import { AddBookPage } from "./AddBookPage";
import { RequestedBooks } from "./RequestedBooks";
import { TheBooksIRequested } from "./TheBooksIRequested";

function ComponentUserPage() {
  const [activeTab, setActiveTab] = useState("tab1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="container mt-5">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "tab1" })}
            onClick={() => {
              toggle("tab1");
            }}
          >
            My Books
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "tab2" })}
            onClick={() => {
              toggle("tab2");
            }}
          >
            Requested Books
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "tab3" })}
            onClick={() => {
              toggle("tab3");
            }}
          >
            The Books I Requested
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="tab1">
          <AddBookPage />
          <UserBookList />
        </TabPane>
        <TabPane tabId="tab2">
            <RequestedBooks />
        </TabPane>
        <TabPane tabId="tab3">
            <TheBooksIRequested />
        </TabPane>
      </TabContent>
    </div>
  );
}

export { ComponentUserPage };
