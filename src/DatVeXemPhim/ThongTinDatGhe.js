import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGhe } from '../Redux/actions/BaiTapDatVeAction'

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <button className="gheDuocChon "></button><span className="text-light" style={{ fontSize: '20px' }}>Ghế đã đặt</span>
                <br />
                <button className="gheDangChon "></button><span className="text-light" style={{ fontSize: '20px' }}>Ghế đang đặt</span>
                <br />

                <button className="ghe " style={{ marginLeft: 0 }}></button><span className="text-light" style={{ fontSize: '20px' }}>Ghế chưa đặt</span>

                <div className="mt-5" >
                    <table className="table text-light" border="2">
                        <thead>
                            <tr style={{ fontSize: 25 }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody className="text-warning">
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia}</td>
                                    <td><button onClick={() => {
                                        this.props.dispatch(huyGhe(gheDangDat.soGhe))
                                    }}>Hủy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className="text-warning">
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                    return tongTien += gheDangDat.gia;
                                }, 0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}
export default connect(mapStateToProps)(ThongTinDatGhe)