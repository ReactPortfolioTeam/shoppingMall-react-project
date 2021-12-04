/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Modal } from 'state/atom/modal/Modal';
import styled from 'styled-components';

const SizeGuide = () => {
    const modal = useRecoilValue(Modal);
    return (
        <SizeGuideModal>
            <div>
                <div>
                    <div>
                        <h1>CDW Down Vest -</h1>
                        <p>Size Guide</p>
                    </div>
                    <button type="button" onClick={modal.ModalClose}>
                        &#x2715;
                    </button>
                </div>
                <table>
                    <tr>
                        <th>Sizing</th>
                        <th>S</th>
                        <th>M</th>
                        <th>L</th>
                        <th>XL</th>
                        <th>2XL</th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Chest</td>
                        <td>19½”</td>
                        <td>20½"</td>
                        <td>22”</td>
                        <td>25”</td>
                        <td>26¾”</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Length</td>
                        <td>24”</td>
                        <td>24¼"</td>
                        <td>25”</td>
                        <td>26”</td>
                        <td>27”</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Shoulder</td>
                        <td>14¼”</td>
                        <td>15¼”</td>
                        <td>15¾”</td>
                        <td>16½”</td>
                        <td>17¼”</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </SizeGuideModal>
    );
};

const SizeGuideModal = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsla(0, 0%, 95%, 0.95);
    position: fixed;
    top: 0;
    left: 0;
    & > div {
        padding: 20px;
        width: 600px;
        height: 220px;
        background-color: white;
        display: flex;
        flex-direction: column;

        & > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > div {
                display: flex;
                align-items: flex-end;
                & > h1 {
                    font-family: ${(p) => p.theme.fonts.family.brewery};
                }
                & > p {
                    margin-left: 10px;
                    font-size: ${(p) => p.theme.fonts.size.fs18};
                    font-family: ${(p) => p.theme.fonts.family.base};
                    color: ${(p) => p.theme.colors.gray};
                }
            }

            & > button {
                border: none;
                background-color: #fff;
                font-size: ${(p) => p.theme.fonts.size.title};
                color: ${(p) => p.theme.colors.gray};
                cursor: pointer;
                user-select: none;
            }
        }
        & > table {
            margin-top: 20px;
            & > tr > th {
                padding: 10px 0px;
                text-align: center;
                border-bottom: 1px solid ${(p) => p.theme.colors.gray};
                font-size: ${(p) => p.theme.fonts.size.fs12};
                border-right: 0.5px solid ${(p) => p.theme.colors.lightGray};
            }
            & > tr > th:first-of-type {
                text-align: start;
                color: ${(p) => p.theme.colors.gray};
            }

            & > tr > td {
                width: calc(560px / 7);
                padding: 10px 0px;
                text-align: center;
                font-size: ${(p) => p.theme.fonts.size.fs12};
                border-right: 0.5px solid ${(p) => p.theme.colors.lightGray};
            }
            & > tr > td:first-of-type {
                font-family: ${(p) => p.theme.fonts.family.base};
                font-weight: ${(p) => p.theme.fonts.weight.bold};
                text-align: start;
            }
            & > tr:nth-of-type(3n-0) {
                background-color: #fafafa;
            }
            & > tr {
            }
        }
    }
`;

export default SizeGuide;
