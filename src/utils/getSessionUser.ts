/* eslint-disable no-else-return */
// By.Junhan  세션에 유저정보가 저장되어 있다면 True 없다면 False 리턴하는 함수  11-30

export default function getSessionUser() {
    if (sessionStorage.getItem('user')) {
        return true;
    } else {
        return false;
    }
}
