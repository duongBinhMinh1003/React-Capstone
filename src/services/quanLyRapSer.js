import { https } from "./configServices";

export const quanLyRapSer = {
  getThongTin: () => {
    return https.get("api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1329");
  },
  getAllRap: () => {
    return https.get("api/QuanLyRap/LayThongTinHeThongRap");
  },
  getInfoShowTimesTheater: (maHeThongRap) => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP09`
    );
  },
  getInfoScheduleFilm: (maPhim) => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );
  },
  getListTicketRoom: (maLichChieu) => {
    return https.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  },
  getControlTicket: (data) => {
    return https.post("/api/QuanLyDatVe/DatVe", data);
  },
};
