package jasu_be.message;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public abstract class CommonController {
    protected <T> ResponseEntity<?> toSuccessResult(T data) {
        ResponseMessage<T> message = new ResponseMessage<>();

        message.setCode(Const.API_RESPONSE.RETURN_CODE_SUCCESS);
        message.setSuccess(Const.API_RESPONSE.STATUS_TRUE);
        message.setDescription("SUCCESS");
        message.setData(data);

        return new ResponseEntity<>(message, HttpStatus.OK);
    }
    protected <T> ResponseEntity<?> toExceptionResult(String errorMessage, String code) {
        ResponseMessage<T> message = new ResponseMessage<>();

        message.setSuccess(Const.API_RESPONSE.STATUS_FALSE);
        message.setCode(code);
        message.setDescription(errorMessage);

        return new ResponseEntity<>(message, HttpStatus.OK);
    }


}
