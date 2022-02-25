import Axios from "axios";
export const KEY_TOKEN_CYBERSOFT = "TokenCybersoft";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0";
class apiLayDanhSachKhoaHoc {
  layDanhSachKhoaHoc() {
    return Axios({
      method: "GET",
      headers: { TokenCyberSoft: TOKEN_CYBERSOFT },
      url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    });
  }
  layThongTinKhoaHoc(id) {
    return Axios({
      method: "GET",
      headers: { TokenCyberSoft: TOKEN_CYBERSOFT },
      url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
    });
  }
  layKhoaHocTheoDanhMuc(idDanhMuc) {
    return Axios({
      method: "GET",
      headers: { TokenCyberSoft: TOKEN_CYBERSOFT },
      url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${idDanhMuc}&MaNhom=GP01`,
    });
  }
}

export default apiLayDanhSachKhoaHoc;
