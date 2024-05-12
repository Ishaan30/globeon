import React, { Component } from "react";
import NavItem from "./NavItem";
import NavbarItems from "./Items";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    isOpen: false,
    isBg: false,
    show: true,
    scrollPos: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
    if (window.pageYOffset > 300) {
      this.setState({
        isBg: true,
      });
    } else {
      this.setState({
        isBg: false,
      });
    }
  };

  drawerHandler = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="hidden md:block font-monts fixed w-full h-16 text-white z-50 top-0">
          {/* Desktop View starts */}
          <div
            className={
              "hidden md:flex justify-between w-full navbar-testing p-3 " +
              (this.state.show ? "scrolled-up" : "scrolled-down") +
              (this.state.isBg ? " bg-white text-fuchsia-900" : null)
            }
          >
            <div className={"md:ml-6 lg:ml-28 flex justify-center items-center md:text-3xl lg:text-4xl font-black "}>globOn
            </div>
            <div className="flex ">
              {NavbarItems.map((element, index) => (
                <NavItem
                  item={element}
                  key={index + Math.random()}
                  clicked={this.drawerHandler}
                  icons={false}
                />
              ))}
            </div>
          </div>
        </nav>
        {/* Desktop View ends */}
        {/* Mobile View starts */}
        <div className="md:hidden flex fixed top-0 text-white z-20">
          <button
            className="top-0 h-16 w-16"
            aria-label="Open Menu"
            onClick={() =>
              this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
            }
          >
            <FontAwesomeIcon className="text-2xl" icon={faBars} fixedWidth />
          </button>
        </div>
        {/* transparent Backdrop starts */}
        {this.state.isOpen && (
          <div
            v-show="isOpen"
            className="z-10 fixed inset-0 transition-opacity"
          >
            <div
              onClick={this.drawerHandler}
              className="absolute inset-0 opacity-0"
              onKeyDown={this.drawerHandler}
              role="button"
              tabIndex="0"
              aria-label="menu-btn"
            ></div>
          </div>
        )}
        {/* transparent Backdrop ends */}
        <aside
          className={`text-fuchsia-900 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
            this.state.isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={this.drawerHandler}
          onKeyDown={this.drawerHandler}
        >
          <span
            onClick={this.drawerHandler}
            onKeyDown={this.drawerHandler}
            role="button"
            tabIndex="0"
            aria-label="menu-btn"
            className="flex w-full items-center p-10 border-b-2 border-fuchsia-900"
          >
            <div className={"ml-6 flex justify-center items-center text-4xl font-bold"}>globOn
            </div>
          </span>
          {NavbarItems.map((element, index) => (
            <NavItem
              item={element}
              key={index + Math.random()}
              clicked={this.drawerHandler}
              icons={true}
            />
          ))}
        </aside>
        {/* Mobile View ends */}
      </React.Fragment>
    );
  }
}

export default Navbar;
