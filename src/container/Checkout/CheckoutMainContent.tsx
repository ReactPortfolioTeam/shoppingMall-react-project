import * as React from 'react';
import { useHistory } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import OrderInfo from 'state/atom/orderInfo/OrderInfo';
import User from 'state/atom/User';
import styled from 'styled-components';
import SectionContactInfo from './SectionContactInfo';
import SectionFooter from './SectionFooter';
import SectionShippingAddress from './SectionShippingAddress';

interface IAppProps {}
interface checkoutErrorCheckObject {
    address: string;
    detailedAddress: string;
    phone: string;
}

const CheckoutMainContent: React.FC<IAppProps> = () => {
    const history = useHistory();

    const userInfo = useRecoilValue(User);
    const [orderInfo, setOrderInfo] = useRecoilState(OrderInfo);
    const [
        errorMessage,
        setErrorMessage,
    ] = React.useState<checkoutErrorCheckObject>({
        address: '',
        detailedAddress: '',
        phone: '',
    });
    React.useEffect(() => {
        setOrderInfo({
            userid: userInfo.userid!,
            email: userInfo.email!,
            name: userInfo.name!,
            address: userInfo.address!,
            detailedAddress: '',
            phone: '',
        });
    }, []);
    const handleChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value, name } = e.target;

            setOrderInfo({
                ...orderInfo,
                [name]: value,
            });
        },
        [orderInfo]
    );
    const handleSubmit = async () => {
        // 프론트단 regex 검사
        const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        const regAddress = /(([가-힣A-Za-z·\d~\-\\.]{2,}(로|길).[\d]+)|([가-힣A-Za-z·\d~\-\\.]+(읍|동)\s)[\d]+)/;
        setErrorMessage({
            ...errorMessage,
            address: '',
            detailedAddress: '',
            phone: '',
        });
        if (regAddress.test(orderInfo.address) === false) {
            setErrorMessage({
                ...errorMessage,
                address:
                    "주소 형식이 올바르지 않습니다. '디지털로30길 28' 과 같은 도로명 주소나 '구로동 222-12'와 같은 지번 주소로 입력해주세요.",
            });
            return;
        }
        if (orderInfo.detailedAddress.length === 0) {
            setErrorMessage({
                ...errorMessage,
                detailedAddress: '상세 주소를 입력해주세요.',
            });
            return;
        }

        if (regPhone.test(orderInfo.phone) === false) {
            setErrorMessage({
                ...errorMessage,
                phone: '전화번호 형식이 잘못되었습니다.',
            });
            return;
        }
        history.push('/checkout/payment');
    };

    return (
        <form
            className="edit_checkout"
            action=""
            method="post"
            acceptCharset="UTF-8"
        >
            <CheckoutMainContentStyle>
                <SectionContactInfo
                    handleChange={handleChange}
                    inputValue={orderInfo}
                />
                <SectionShippingAddress
                    handleChange={handleChange}
                    inputValue={orderInfo}
                    errorMessage={errorMessage}
                />
                <SectionFooter handleSubmit={handleSubmit} />
            </CheckoutMainContentStyle>
        </form>
    );
};
const CheckoutMainContentStyle = styled.div`
    display: flex;
    flex-direction: column;
    .section {
        margin: ${(props) => props.theme.margins.m20};
        .section__header {
            display: flex;
            justify-content: space-between;
        }
        .section__content {
            display: flex;
            flex-direction: column;
            .checkbox-wrapper {
                display: flex;
            }
            &.doubleInput-row {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }
`;

export default CheckoutMainContent;
