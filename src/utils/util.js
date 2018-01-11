import {message,Modal} from 'antd'

export const showMessage = (msg , type) => {
    msg = (msg instanceof Error) ? msg.message : msg
    switch (type){
        case 'success':
            message.success(msg);
            break
        case 'warn':
            message.warning(msg);
            break
        case 'info':
            message.warning(msg);
            break
        default:
            //error
            message.error(msg);
            break
    }
}


export const toLocalDatetime = (datetime)=>{
    if(datetime instanceof Date){
        return datetime.toLocaleString()
    }else{
        return ''
    }
}

export const confirm = (config)=>{
    let init = {title:'提示' , okText:'确定',cancelText:'取消' , iconType:'info-circle',onCancel() {},onOk() {}}

    config = {...init , ...config}

    Modal.confirm(config)
}