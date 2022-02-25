let initialState = {
  courses: [],
  menuDanhMuc: [],
  courseDetail: null,
  khoaHocTheoDanhMuc: [],
};
const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LayDanhSachKhoaHoc": {
      state.courses = action.payload;
      return { ...state };
    }
    case "LayDanhMucKhoaHoc": {
      state.menuDanhMuc = action.payload;
      return { ...state };
    }
    case "LayChiTietKhoaHoc": {
      state.courseDetail = action.payload;
      return { ...state };
    }
    case "LayKhoaHocTheoDanhMuc": {
      state.khoaHocTheoDanhMuc = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
export default CourseReducer;
