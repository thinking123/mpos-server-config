import {message} from 'antd'

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