import Button from 'component/Button/Button';
import { ButtonHover } from 'component/Button/ButtonHover';
import TextButton from 'component/Button/TextButton';
import React from 'react';
import styled from 'styled-components';

const UserAccountManagement = () => {
    return (
        <UserAccountManagementContainer>
            <h1>회원목록</h1>
            <div>
                <input type="text" placeholder="전체 사용자 검색"></input>
                <Button height="49px" type="button">
                    Search
                </Button>
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
                        <th>설정</th>
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
                        <td>
                            <Button type="button">수정</Button>
                            <Button type="button">삭제</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>wnsgks</td>
                        <td>wnsgks@naver.com</td>
                        <td>나만부산</td>
                        <td>김준한</td>
                        <td>
                            <Button type="button">수정</Button>
                            <Button type="button">삭제</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>wnsgks</td>
                        <td>wnsgks@naver.com</td>
                        <td>나만부산</td>
                        <td>김준한</td>
                        <td>
                            <Button type="button">수정</Button>
                            <Button type="button">삭제</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="pagination">
                <ul>
                    <li>
                        <TextButton>1</TextButton>
                    </li>
                    <li>
                        <TextButton>2</TextButton>
                    </li>
                    <li>
                        <TextButton>3</TextButton>
                    </li>
                    <li>
                        <TextButton>4</TextButton>
                    </li>
                </ul>
                <div>
                    <ButtonHover height="40px">페이지 이동</ButtonHover>
                </div>
            </div>
        </UserAccountManagementContainer>
    );
};

export default UserAccountManagement;

const UserAccountManagementContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    padding: 20px;
    & > h1 {
        font-size: 50px;
    }

    & > div {
        margin-top: 30px;
        width: 50%;
        height: 100px;
        & > input:first-child {
            border-radius: 4px;
            width: 80%;
            height: 50px;
            padding: 20px;
            border: 1px solid ${(p) => p.theme.colors.gray};
            margin-right: 20px;
        }
    }
    table {
        width: 100%;

        tr {
            border-radius: 4px;
        }
        td,
        th {
            font-size: 20px;
            text-align: center;
            color: ${(p) => p.theme.colors.gray};
            height: 50px;
            border-bottom: 1px solid ${(p) => p.theme.colors.gray};
        }
        tr > th:nth-of-type(1),
        tr > td:nth-of-type(1) {
            width: 3%;
            padding-top: 17px;
        }

        tr > th:nth-of-type(2) {
            width: 15%;
        }

        tr > th:nth-of-type(3) {
            width: 20%;
        }

        tr > th:nth-of-type(4) {
            width: 37%;
        }

        tr > th:nth-of-type(5) {
            width: 10%;
        }
        button {
            margin-right: 10px;
        }
    }
    .pagination {
        position: fixed;
        width: 100%;
        bottom: 0;
        display: flex;
        justify-content: center;
        & > ul {
            display: flex;
            & > li {
                padding: 10px;
            }
        }
        & > div {
            margin-left: 20px;
        }
    }
`;
