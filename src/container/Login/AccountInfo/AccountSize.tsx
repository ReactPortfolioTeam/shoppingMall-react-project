import { DaeHwanStyle } from 'assets/css/global/DaeHwan.style';
import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import { ButtonHover } from 'component/Button/ButtonHover';
import * as React from 'react';
import styled from 'styled-components';
import AccountSizeForm from './AccountSIzeForm';

export interface IAppProps {}

const AccountSize = (props: IAppProps) => {
    return (
        <AccountSizeStyle>
            <DaeHwanStyle>
                <FlexBoxDiv flexDirection="row" className="account-section-row">
                    <h3 className="account-section-title">Your Sizes</h3>
                    <div className="account-section-content">
                        <div className="preset-sizes-inner">
                            <div id="my-sizes">
                                <p className="bottom-margin x2">
                                    Save your sizes for quicker add-to-cart
                                    experience across the site.
                                </p>
                                <AccountSizeForm />
                            </div>
                        </div>
                    </div>
                </FlexBoxDiv>
            </DaeHwanStyle>
        </AccountSizeStyle>
    );
};
const AccountSizeStyle = styled.div`
    .account-section-row {
        margin-left: -1.4285714286rem;
        margin-right: -1.4285714286rem;
        flex-wrap: nowrap;
        .account-section-title {
            padding-left: 1.4285714286rem;
            padding-right: 1.4285714286rem;
            width: 13.5714285714rem;
            flex: 0 0 13.5714285714rem;
        }
        .account-section-content {
            padding-left: 1.4285714286rem;
            padding-right: 1.4285714286rem;
            margin-top: 0;
            flex: 1 1 auto;
            .preset-sizes-inner {
                padding-right: 6.7857142857rem;
                #my-sizes {
                    width: 100%;
                    max-width: 35.7142857143rem;
                    margin: 0 auto;
                    .bottom-margin.x2 {
                        margin-bottom: 2.8571428571rem;
                        font-size: 1rem;
                        color: #555;
                        font-weight: 400;
                        line-height: 1.4285714286rem;
                    }
                }
            }
        }
    }
`;

export default AccountSize;
