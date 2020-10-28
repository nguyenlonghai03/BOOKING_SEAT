import React, { Component } from "react";
import "./DatVe.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGhe from '../Data/danhSachGhe.json'
import HangGhe from "./HangGhe";
export default class BaiTapBookingTicket extends Component {

    renderHangGhe = () => {
        return danhSachGhe.map((hangGhe, index) => {
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>

        })
    }


    render() {
        // chèn ảnh trên html là đi từ public
        return (
            <div
                className="bookingMovie"
                style={{
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('./img/BookingSeat/banner.jpg')",
                    backgroundSize: "100%",
                }}
            >
                <div
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.0)",
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-9 text-center" color="white">
                                <div className="text-warning" style={{ fontSize: 30 }}>
                                    Đặt vé xem phim Cyberlearn.vn</div>
                                <div className="mt-3 text-light" style={{ fontSize: "25px" }}>
                                    Màn hình</div>
                                <div
                                    className="mt-1"
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",

                                    }}>
                                    <div className="screen"></div>

                                </div>
                                {this.renderHangGhe()}

                            </div>
                            <div className="col-3">
                                <div style={{ fontSize: '25px' }} className="text-light mt-2">DANH SÁCH GHẾ BẠN CHỌN</div>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
