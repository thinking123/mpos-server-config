import React from 'react'
import {Spin} from 'antd'
import {connect} from 'react-redux'
import css from './Loading.css'


const Loading = ({loading}) => (
    loading.isLoading ? <div className={css.wrap}>
        <div>
            <Spin/>
            <div>
                {loading.text}
            </div>
        </div>
    </div> : null
)

export const mapStateToProps = state => {
    return {
        loading: state.base.loading
    }
}


export default connect(
    mapStateToProps
)(Loading)