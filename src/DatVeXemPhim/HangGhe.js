import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { datGheAction } from '../Redux/actions/BaiTapDatVeAction'
class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = '';
            let disable = false;
            // Trạng thái ghế đã bị người khác đặt rồi
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disable = true;
            }

            // Trạng thái ghế đang đặt
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon'
            }

            return <button onClick={() => {
                this.props.datGhe(ghe)
            }} disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className="rowNumber">
                {hang.soGhe}
            </button>
        })
    }



    renderHangGhe = () => {

        if (this.props.soHangGhe === 0) { // Hàng đầu tiên
            return <div className="ml-4">
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else {
            return <Fragment>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </Fragment>
        }
    }

    render() {
        return (
            <div className="text-light text-left ml-0 mt-0" style={{ fontSize: 30 }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(
                datGheAction(ghe)
            )
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)