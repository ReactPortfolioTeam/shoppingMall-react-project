import React from 'react';
import styled from 'styled-components';

const UserAccountManagement = () => {
    return (
        <UserAccountManagementContainer>
            <h1>회원목록</h1>
            <div>
                <input type="text" placeholder="전체 사용자 검색"></input>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox"></input>
                        </th>
                        <th>유저아이디</th>
                        <th>이메일</th>
                        <th>주소</th>
                        <th>이름</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>wnsgks</td>
                        <td>wnsgks@naver.com</td>
                        <td>나만부산</td>
                        <td>김준한</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>wnsgks</td>
                        <td>wnsgks@naver.com</td>
                        <td>나만부산</td>
                        <td>김준한</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>wnsgks</td>
                        <td>wnsgks@naver.com</td>
                        <td>나만부산</td>
                        <td>김준한</td>
                    </tr>
                </tbody>
            </table>
        </UserAccountManagementContainer>
    );
};

export default UserAccountManagement;

const UserAccountManagementContainer = styled.div`
    table {
        width: 100%;

        td,
        th {
            text-align: center;
            height: 50px;
            border: 1px solid ${(p) => p.theme.colors.darkGray};
        }
        tr > th:nth-of-type(1) {
            width: 3%;
        }

        tr > th:nth-of-type(2) {
            width: 20%;
        }

        tr > th:nth-of-type(3) {
            width: 20%;
        }

        tr > th:nth-of-type(4) {
            width: 37%;
        }

        tr > th:nth-of-type(5) {
            width: 20%;
        }
    }
`;