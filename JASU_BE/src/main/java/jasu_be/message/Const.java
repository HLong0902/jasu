package jasu_be.message;

public class Const {
    public static final String XLS = "xls";
    public static final String XLSX = "xlsx";
    public static final String SUCCESS = "SUCCESS";
    public static final String ERROR = "ERROR";
    public static final String FAIL = "FAIL";

    public static class API_RESPONSE {
        private API_RESPONSE() {
            throw new IllegalStateException();
        }
        public static final String RETURN_CODE_SUCCESS = "200";
        public static final String RETURN_CODE_ERROR = "400";

        public static final Boolean STATUS_TRUE = true;
        public static final Boolean STATUS_FALSE = false;
    }

}
