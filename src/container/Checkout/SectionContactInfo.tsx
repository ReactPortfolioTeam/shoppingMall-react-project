import InputCheckout from 'component/Input/inputCheckout';
import * as React from 'react';
import { StyledLink } from './Checkout';

interface IAppProps {
    inputValue: {
        email: string;
    };
    handleChange: any;
}

const SectionContactInfo: React.FC<IAppProps> = (props: IAppProps) => {
    const { handleChange, inputValue } = props;
    return (
        <section className="section section--contact-information">
            <div className="section__header">
                <h2 className="section__title">Contact information</h2>
                <p>
                    Already have an account? &nbsp;
                    <StyledLink to="./login">Log in</StyledLink>
                </p>
            </div>
            <div className="section__content">
                <InputCheckout
                    id="email"
                    name="email"
                    value={inputValue.email}
                    onChange={handleChange}
                    placeholder="Email"
                    content="Email"
                    type="email"
                    width="100%"
                    readOnly
                />
                <div
                    className="email--description"
                    data-buyer-accepts-marketing=""
                >
                    <div className="checkbox-wrapper">
                        <div className="checkbox__input">
                            <input
                                className="input-checkbox"
                                type="checkbox"
                                value="1"
                                checked={undefined}
                                name="checkout[buyer_accepts_marketing]"
                                id="checkout_buyer_accepts_marketing"
                            />
                        </div>
                        <label
                            className="checkbox__label"
                            htmlFor="checkout_buyer_accepts_marketing"
                        >
                            Email me with news and offers
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionContactInfo;
