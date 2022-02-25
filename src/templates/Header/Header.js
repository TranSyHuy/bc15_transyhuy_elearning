import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Axios from "axios";
import { connect } from "react-redux";
export const KEY_TOKEN_CYBERSOFT = "TokenCybersoft";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0";
class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <header
            className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 fixed w-full z-10"
            style={{ backgroundColor: "#e9e1e175" }}
          >
            <div className="container flex justify-between h-12 mx-auto">
              <Link className="nav-link w-40" to="/">
                <img
                  src="./img/logooo.png
          "
                  alt=""
                />
              </Link>
              <div className="dropdown">
                <button
                  className="btn bg-white dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Danh Sách Khóa Học
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {this.props.menuDanhMuc.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        className="dropdown-item nav-link drop hover:text-black"
                        to={`/danhmuc/${item.maDanhMuc}`}
                        activeClassName="text-black"
                      >
                        {item.tenDanhMuc}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center md:space-x-4">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="submit"
                      title="Search"
                      className="p-1 focus:outline-none focus:ring"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 dark:text-coolGray-100"
                      >
                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z" />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="Search"
                    placeholder="Tìm Khóa Học..."
                    className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-coolGray-800 dark:text-coolGray-100 focus:dark:bg-coolGray-900"
                  />
                </div>
                <div className="dropdown">
                  <button
                    className="btn bg-white "
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      className="w-8"
                      src="./img/login.png
          "
                      alt=""
                    />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link
                      type="button"
                      to="/login"
                      activeClassName="activeLink"
                      className="nav-link"
                    >
                      Đăng Nhập
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
  componentDidMount() {
    Axios({
      method: "GET",
      headers: { TokenCyberSoft: TOKEN_CYBERSOFT },
      url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    })
      .then((res) => {
        this.props.dispatch({
          type: "LayDanhMucKhoaHoc",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const mapStateToProps = (state) => ({
  menuDanhMuc: state.course.menuDanhMuc,
});

export default connect(mapStateToProps)(Header);
